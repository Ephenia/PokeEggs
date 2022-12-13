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
let player = {
    party: {},
    items: {},
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
    createParty();
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
    //For Party
    if (index === 0)
        renderParty(true);
    //For Item Bag
    if (index === 2)
        renderItemBag(player.prefs.bag);
    player.prefs.nav = index;
}
function createParty() {
    const frag = new DocumentFragment();
    const partyLen = Object.keys(player.party).length;
    for (let i = 0; i < partyLen; i++) {
        const slot = document.createElement("div");
        slot.setAttribute('data-src', `${i}`);
        slot.classList.add('party-slot');
        frag.appendChild(slot);
    }
    partyCont.appendChild(frag);
    partySlots = document.getElementsByClassName('party-slot');
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
//Poké Radar functions
function advanceChain(pokeID, shiny) {
    const radar = player.radarHandler;
    if (radar.active) {
        const buff = document.querySelector(`[buff-src="408"]`);
        const counter = buff.querySelector('.buff-counter');
        if (radar.chain === 0 || radar.lastHatch === pokeID) {
            radar.lastHatch = pokeID;
            radar.chain++;
            counter.innerHTML = `${radar.chain}`;
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
