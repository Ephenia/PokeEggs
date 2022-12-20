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
        lastHatch: null
    },
    eggHandler: {},
    prefs: {
        nav: 0,
        bag: 0,
        debug: false
    }
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
    }
    else {
        view.textContent = 'Lead is empty.';
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
            if (shiny)
                radarOff();
        }
        else {
            radar.chain = 0;
            radarOff();
        }
        function radarOff() {
            radar.active = false;
            delete player.buffHandler[408];
            buff.remove();
        }
    }
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
//Global Click Handler
document.addEventListener('click', (e) => {
    const element = e.target;
    pkmnMenu.style.display = 'none';
});
