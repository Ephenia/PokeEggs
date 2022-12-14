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
    eggHandler: {},
    prefs: {
        nav: 0,
        bag: 0,
        debug: false
    },
    flags: {
        kantoStarter: false,
        highestRegion: 0,
    },
    notifyTrack: {},
    statistics: {}
};
initialize();
function initialize() {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield hasSave()) {
            yield loadSave();
        }
        else {
            yield newLead();
            yield newParty();
            yield newEggHandler();
            yield createSave();
            loadMain();
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
    resumeEggs();
    resumeNotify();
    if (!player.flags.kantoStarter)
        openModal('starterselect', 'Select Starter');
    setInterval(function () {
        //createSave();
    }, 60000);
}
//For initilization purposes always
function renderMain(index) {
    const getView = document.querySelectorAll('[view-index]');
    for (const view of getView) {
        view.setAttribute('style', 'display: none');
    }
    getView[index].setAttribute('style', 'display:flex');
    if (index === 0) {
        //For Party
        renderParty(true);
    }
    else if (index === 1) {
        //For Pokemon Box
        renderPokeBox();
    }
    else if (index === 2) {
        //For Item Bag
        renderItemBag(player.prefs.bag);
    }
    else if (index === 3) {
        //For Poke Radar
        renderPokeRadar();
    }
    player.prefs.nav = index;
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
        pkmnIcon.src = `assets/pkmnicon/${member.isShiny ? 'shiny' : 'normal'}/${member.sprite}.png`;
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
    const partyLen = Object.keys(player.party).length;
    for (let i = 0; i < partyLen; i++) {
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
    const boxLen = Object.keys(player.pokemonBox).length;
    if (boxLen !== 0) {
        pkmnBoxView.classList.remove('empty-box');
        for (const poke in player.pokemonBox) {
            const member = player.pokemonBox[poke];
            //const getPoke = pkmnData[member.id];
            const pkmnDiv = document.createElement('div');
            pkmnDiv.classList.add('pkmn-box-slot');
            pkmnDiv.setAttribute('data-src', poke);
            pkmnDiv.setAttribute('pkmn-menu', 'box');
            const pkmnIcon = document.createElement('img');
            pkmnIcon.src = member.isEgg ? 'assets/pkmnicon/egg.png' : `assets/pkmnicon/${member.isShiny ? 'shiny' : 'normal'}/${member.sprite}.png`;
            pkmnIcon.setAttribute('loading', 'lazy');
            pkmnDiv.appendChild(pkmnIcon);
            frag.appendChild(pkmnDiv);
        }
    }
    else {
        pkmnBoxView.classList.add('empty-box');
        frag.textContent = 'Your Pok??mon Box is empty.';
    }
    pkmnBoxView.appendChild(frag);
}
//Pok?? Radar functions
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
    stateDiv.innerHTML = `The Pok?? Radar is currently <b class="${radar.active ? 'active-text' : 'inactive-text'}">${radar.active ? 'ACTIVE' : 'INACTIVE'}</b>.`;
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
    oodsDiv.textContent = `??? Shiny Odds: ${fracToPerc(chainOdds(radar.chain))}%`;
    frag.appendChild(oodsDiv);
    pokeRadarCont.appendChild(frag);
}
//Global Click Handler
document.addEventListener('click', (e) => {
    const element = e.target;
    pkmnMenu.style.display = 'none';
});
