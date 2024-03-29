"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// main.ts
const gameVersion = '2-20-2023';
const pkmnBoxCont = document.getElementById('pkmn-box-cont');
const leadPokeCont = document.getElementById('lead-pkmn');
const pokeRadarCont = document.getElementById('poke-radar-cont');
let pkmnBoxView;
let player = {
    leadPoke: {},
    party: {},
    items: {},
    pokemonBox: {},
    buffHandler: {
    // 408: {
    //     duration: Infinity,
    //     time: Infinity,
    //     active: true
    // },
    // 250: {
    //     duration: Infinity,
    //     time: Infinity,
    //     active: true
    // }
    },
    radarHandler: {
        active: false,
        chain: 0,
        lastHatch: null,
        hatchNormal: 0,
        hatchShiny: 0
    },
    daycareHandler: {
        pokemon: {},
        eggs: {},
        breedState: false,
        breedComp: null,
        domParent: null,
        breedKarma: 0,
        eggKarma: 0,
        eggChance: null
    },
    eggHandler: {},
    prefs: {
        nav: 0,
        bag: 0,
        debug: false,
        createEgg: 'Normal',
        debugSearch: ''
    },
    flags: {
        kantoStarter: false,
        highestRegion: 1,
    },
    notifyTrack: {},
    statistics: {},
    settings: {
        obtainItem: {
            name: '[Item] Obtain Item',
            state: true
        },
        doAutoSave: {
            name: '[Save] Auto Save',
            state: false
        },
        onExitSave: {
            name: '[Save] Attempt Save on Game Exit',
            state: true
        },
        onRefreshSave: {
            name: '[Save] Save on Refresh',
            state: true
        },
        eggReadyNotif: {
            name: '[Notify] Egg Ready to Hatch',
            state: true
        },
        debugNotifs: {
            name: '[Debug] Debug Notifications',
            state: false
        },
        stickyTooltip: {
            name: '[Debug] Sticky Tooltips',
            state: false
        },
        instaHatchEggs: {
            name: '[Debug] Instantly Hatch Eggs',
            state: false
        },
        disableThrottle: {
            name: '[Debug] Disable Timer Throttling',
            state: false
        }
    },
    version: gameVersion
};
initialize();
function initialize() {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield hasSave()) {
            yield loadSave();
        }
        else {
            localStorage.setItem('HackTimer', player.settings.disableThrottle.state);
            yield newLead();
            yield newParty();
            yield newDaycare();
            yield newEggHandler();
            yield createSave();
            loadMain();
            gainItem(10000);
        }
    });
}
function loadMain() {
    console.log(player.party);
    buildNav();
    renderLead();
    createParty();
    createPokeBox();
    createItemBag();
    renderMain(player.prefs.nav);
    changeItemBag(player.prefs.bag);
    resumeBuffs();
    checkBreeding(true);
    resumeEggs();
    resumeNotify();
    navNotifs();
    if (!player.flags.kantoStarter)
        openModal('starterselect', 'Select Starter');
    setInterval(function () {
        if (player.settings.doAutoSave.state) {
            createSave();
            Notify('createSave');
        }
    }, 60000);
    if (gameVersion !== player.version) {
        if (confirm(`The game is running on the latest update of ${formatDate(gameVersion)}\r\nYour save version is currently from ${formatDate(player.version)}\r\nWould you like to wipe your save for convenience sake?\r\n(Note: This is here due to the game still being in early development and to help in the testing phase for now)`)) {
            deleteSave();
        }
        else {
            // The user clicked Cancel
        }
    }
}
//For initilization purposes always
function renderMain(index) {
    const getView = document.querySelectorAll('[view-index]');
    if (navOptions[index].cond()) {
        for (const view of getView) {
            view.setAttribute('style', 'display: none');
        }
        getView[index].setAttribute('style', 'display:flex');
        player.prefs.nav = index;
        //navOptions[player.prefs.nav].nav();
    }
    navOptions[index].nav();
    navSelect();
}
function renderLead() {
    disposeElement(leadPokeCont);
    const frag = new DocumentFragment();
    const member = player.leadPoke;
    const view = document.createElement("div");
    if (member.isEgg !== null) {
        //Pokemon Icon
        const pkmnIcon = document.createElement('img');
        pkmnIcon.src = `assets/pkmnicon/${member.isShiny ? 'shiny' : 'normal'}/${member.forme}.png`;
        view.appendChild(pkmnIcon);
        leadPokeCont.classList.add('lead-pkmn-active');
    }
    else {
        view.textContent = 'Lead is empty.';
        leadPokeCont.classList.remove('lead-pkmn-active');
    }
    frag.appendChild(view);
    leadPokeCont.appendChild(frag);
}
function createParty() {
    const frag = new DocumentFragment();
    for (let i = 0; i < objLen(player.party); i++) {
        const slot = document.createElement("div");
        slot.classList.add('party-slot', 'main-bg');
        slot.setAttribute('data-src', `${i}`);
        slot.setAttribute('pkmn-menu', 'party');
        frag.appendChild(slot);
    }
    partyCont.appendChild(frag);
    partySlots = document.getElementsByClassName('party-slot');
}
function createPokeBox() {
    const frag = new DocumentFragment();
    const boxView = document.createElement("div");
    boxView.id = 'pkmn-box-view';
    boxView.classList.add('main-border');
    frag.appendChild(boxView);
    pkmnBoxCont.appendChild(frag);
    pkmnBoxView = document.getElementById('pkmn-box-view');
}
function createItemBag() {
    const frag = new DocumentFragment();
    const tabRow = document.createElement("div");
    tabRow.id = 'item-bag-tab-row';
    const bagView = document.createElement("div");
    bagView.id = 'item-bag-view';
    bagView.classList.add('main-border');
    for (const tab in invNames) {
        const tabName = invNames[tab][0];
        const tabDiv = document.createElement("div");
        tabDiv.setAttribute('tab-src', tab);
        tabDiv.classList.add('item-bag-tab-cont');
        tabDiv.addEventListener('click', () => {
            if (player.prefs.bag === +tab)
                return;
            changeItemBag(+tab);
        });
        const tabImg = document.createElement("img");
        tabImg.classList.add('item-bag-tab');
        tabImg.src = `assets/bag/${tabName}.png`;
        tabDiv.appendChild(tabImg);
        tabRow.appendChild(tabDiv);
    }
    frag.appendChild(tabRow);
    frag.appendChild(bagView);
    itemBagCont.appendChild(frag);
    itemBagView = document.getElementById('item-bag-view');
}
function newDaycare() {
    return __awaiter(this, void 0, void 0, function* () {
        let newDaycare = new Object();
        for (let i = 0; i < 2; i++) {
            newDaycare[i] = Object.assign(emptyMember(), newDaycare[i]);
        }
        player.daycareHandler.pokemon = newDaycare;
    });
}
//For new initilization purposes
function newLead() {
    return __awaiter(this, void 0, void 0, function* () {
        player.leadPoke = Object.assign(emptyMember(), player.leadPoke);
    });
}
function newParty() {
    return __awaiter(this, void 0, void 0, function* () {
        //For player.party
        let newParty = new Object();
        for (let i = 0; i < 6; i++) {
            newParty[i] = Object.assign(emptyMember(), newParty[i]);
        }
        player.party = newParty;
    });
}
function newEggHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        player.eggHandler = new Array(6).fill(null, 0);
    });
}
//Pokemon Box
function renderPokeBox() {
    if (isHidden(pkmnBoxCont))
        return;
    disposeElement(pkmnBoxView);
    const frag = document.createDocumentFragment();
    if (objLen(player.pokemonBox) !== 0) {
        pkmnBoxView.classList.remove('empty-box');
        for (const poke in player.pokemonBox) {
            const member = player.pokemonBox[poke];
            //const getPoke = pkmnData[member.id];
            const pkmnDiv = document.createElement('div');
            pkmnDiv.classList.add('pkmn-box-slot');
            pkmnDiv.setAttribute('tooltip-src', 'box-pkmn');
            pkmnDiv.setAttribute('data-src', poke);
            pkmnDiv.setAttribute('pkmn-menu', 'box');
            const pkmnIcon = document.createElement('img');
            pkmnIcon.src = member.isEgg ? 'assets/pkmnicon/egg.png' : `assets/pkmnicon/${member.isShiny ? 'shiny' : 'normal'}/${member.FOV === 'forme' ? member.forme : member.variant}.png`;
            pkmnIcon.setAttribute('loading', 'lazy');
            pkmnDiv.appendChild(pkmnIcon);
            frag.appendChild(pkmnDiv);
        }
    }
    else {
        pkmnBoxView.classList.add('empty-box');
        frag.textContent = 'Your Pokémon Box is empty.';
    }
    pkmnBoxView.appendChild(frag);
}
//Poké Radar functions
function advanceChain(pokeID, shiny) {
    const radar = player.radarHandler;
    if (radar.active) {
        const buff = document.querySelector(`[buff-src="408"]`);
        if (radar.chain === 0 || radar.lastHatch === pokeID) {
            radar.lastHatch = pokeID;
            radar.chain++;
            buffCounter(408, radar.chain);
            if (shiny) {
                radar.hatchShiny++;
                radarOff();
            }
            else {
                radar.hatchNormal++;
            }
        }
        else {
            radar.chain = 0;
            radar.lastHatch = null;
            radar.hatchNormal = 0;
            radar.hatchShiny = 0;
            radarOff();
        }
        function radarOff() {
            radar.active = false;
            delete player.buffHandler[408];
            buff.remove();
        }
    }
    renderPokeRadar();
}
function chainOdds(chain) {
    const charm = 0;
    const chainLen = Math.min(40, chain);
    let odds = 4096;
    if (chainLen < 30) {
        odds = (15 + 1 + chainLen + charm);
    }
    else if (chainLen <= 35) {
        odds = (15 + 5 + chainLen + charm);
    }
    else if (chainLen == 36) {
        odds = (15 + 15 + chainLen + charm);
    }
    else if (chain >= 37) {
        odds = (15 + 30 + 37 + charm) << (chainLen - 37);
    }
    return Math.round(65536 / odds);
}
function renderPokeRadar() {
    if (isHidden(pokeRadarCont))
        return;
    disposeElement(pokeRadarCont);
    const frag = document.createDocumentFragment();
    const radar = player.radarHandler;
    //If the Poke Radar is active or not
    const stateDiv = document.createElement('div');
    stateDiv.id = 'poke-radar-state';
    stateDiv.innerHTML = `The Poké Radar is currently <b class="${radar.active ? 'active-text' : 'inactive-text'}">${radar.active ? 'ACTIVE' : 'INACTIVE'}</b>.`;
    frag.appendChild(stateDiv);
    //Poke Radar cost & turning on
    if (!radar.active) {
        const costDiv = document.createElement('div');
        costDiv.id = 'poke-radar-cost';
        const canBuy = checkItemAmnt(593) >= 50;
        costDiv.innerHTML = `<div>${itemImg(593)}${checkItemAmnt(593).toLocaleString()} / 50</div>`;
        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Turn On';
        //buyBtn.disabled = !canBuy ? true : false;
        buyBtn.addEventListener('click', () => {
            createBuff(408);
            renderPokeRadar();
        });
        costDiv.appendChild(buyBtn);
        frag.appendChild(costDiv);
    }
    //Currently chaining info
    const chainDiv = document.createElement('div');
    chainDiv.id = 'poke-radar-chain-info';
    chainDiv.classList.add('main-border');
    const normalPkmn = document.createElement('div');
    const normalImg = document.createElement('img');
    const shinyPkmn = document.createElement('div');
    const shinyImg = document.createElement('img');
    if (radar.lastHatch !== null) {
        normalImg.src = `assets/pkmn/normal/${pkmnData[radar.lastHatch].name}.png`;
        shinyImg.src = `assets/pkmn/shiny/${pkmnData[radar.lastHatch].name}.png`;
    }
    else {
        normalImg.src = 'assets/pkmnicon/unknown-gen5.png';
        shinyImg.src = 'assets/pkmnicon/unknown-gen5.png';
    }
    normalPkmn.appendChild(normalImg);
    shinyPkmn.appendChild(shinyImg);
    const nhatchDiv = document.createElement('div');
    nhatchDiv.textContent = `${radar.hatchNormal.toLocaleString()}`;
    normalPkmn.appendChild(nhatchDiv);
    const shatchDiv = document.createElement('div');
    shatchDiv.classList.add('shiny-symbol');
    shatchDiv.textContent = `${radar.hatchShiny.toLocaleString()}`;
    shinyPkmn.appendChild(shatchDiv);
    chainDiv.appendChild(normalPkmn);
    chainDiv.appendChild(shinyPkmn);
    frag.appendChild(chainDiv);
    //Chain length
    const lenDiv = document.createElement('div');
    lenDiv.id = 'poke-radar-chain-len';
    lenDiv.textContent = `Chain: ${radar.chain.toLocaleString('en')}`;
    frag.appendChild(lenDiv);
    const oodsDiv = document.createElement('div');
    oodsDiv.textContent = `✨ Shiny Odds: ${fracToPerc(chainOdds(radar.chain))}%`;
    frag.appendChild(oodsDiv);
    pokeRadarCont.appendChild(frag);
}
//Global Click Handler
document.addEventListener('click', (e) => {
    const element = e.target;
    pkmnMenu.style.display = 'none';
});
