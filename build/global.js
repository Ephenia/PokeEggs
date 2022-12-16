"use strict";
const pkmnMenu = document.getElementById('pkmn-menu');
//For elements
function disposeElement(element) {
    if (element.innerHTML !== '') {
        element.innerHTML = '';
    }
}
function isHidden(element) {
    return element.offsetParent === null;
}
//Random functions
function randInt(int) {
    return Math.floor(Math.random() * int);
}
function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function UUID() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
//For Pokemon
function createEgg(random = false, pokeID) {
    const thisPoke = random ? canBeEgg() : speciesData[pokeID];
    console.log(thisPoke);
    const toHatch = thisPoke.hatch_counter * 257;
    const shiny = 0 === randInt(4096);
    return { id: pokeID, isEgg: true, name: thisPoke.names, exp: 0, ehp: toHatch, progress: 0, sprite: thisPoke.name, eggSprite: randRange(0, 2), isShiny: shiny, creation: Date.now(), lastTick: null, eggPause: null, frozen: false, UUID: UUID(), IVs: genIVs() };
}
function randPoke() {
    const pkmnLen = Object.keys(pkmnData).length;
    return pkmnData[randRange(1, pkmnLen)];
}
function canBeEgg() {
    const pkmnArr = [];
    Object.entries(speciesData).filter(([key, value]) => {
        if (!value.evolves_from_species)
            pkmnArr.push(value);
    });
    return pkmnArr[randInt(pkmnArr.length)];
}
function genIVs() {
    return new Array(6).fill(null, 0).map(() => {
        return randInt(32);
    });
}
function sendToBox(index) {
    const member = player.party[index];
    const storageLen = Object.keys(player.pokemonBox).length;
    player.pokemonBox = Object.assign({ [storageLen]: member }, player.pokemonBox);
    player.party[index] = emptyMember();
    renderParty(false, index);
}
function sendToParty(index) {
    if (findEmptyParty() !== -1) {
        player.party[findEmptyParty()] = player.pokemonBox[index];
        delete player.pokemonBox[index];
        sortBox();
        renderPokeBox();
    }
}
function salvagePoke(index, type) {
    let member;
    if (type === 'party') {
        member = player.party[index];
        calcGems(pkmnData[member.id]);
        player.party[index] = emptyMember();
        renderParty(false, index);
    }
    else if (type === 'box') {
        member = player.pokemonBox[index];
        calcGems(pkmnData[member.id]);
        delete player.pokemonBox[index];
        sortBox();
        renderPokeBox();
    }
    function calcGems(pkmn) {
        for (const type of pkmn.types) {
            if (type !== 'None') {
                const gemID = +Object.entries(itemData).filter(([key, value]) => value.name === `${type} Gem`)[0][0];
                gainItem(gemID, 1);
                console.log(type);
            }
        }
    }
}
//Right click menu for Pokemon
document.querySelectorAll('[pkmn-menu]').forEach(item => {
    item.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const elem = e.target;
        const menuType = elem.getAttribute('pkmn-menu');
        const index = +elem.getAttribute('data-src');
        if (menuType === null || index === null)
            return;
        if (menuType === 'party') {
            if (player.party[index].isEgg !== null) {
                displayMenu();
                buildPartyMenu(+index);
            }
        }
        else if (menuType === 'box') {
            displayMenu();
            buildBoxMenu(+index);
        }
        function displayMenu() {
            pkmnMenu.style.top = `${e.pageY}px`;
            pkmnMenu.style.left = `${e.pageX}px`;
            pkmnMenu.style.display = 'flex';
        }
    });
});
function buildPartyMenu(index) {
    disposeElement(pkmnMenu);
    const member = player.party[index];
    const menuItems = ['Box', 'Salvage'];
    for (const opt in menuItems) {
        const menuOpt = document.createElement('button');
        menuOpt.classList.add('menu-item');
        menuOpt.innerHTML = menuItems[opt];
        if (member.isEgg)
            menuOpt.disabled = true;
        menuOpt.addEventListener('click', (e) => {
            if (opt === '0') {
                sendToBox(index);
            }
            else if (opt === '1') {
                salvagePoke(index, 'party');
            }
        });
        pkmnMenu.appendChild(menuOpt);
    }
}
function buildBoxMenu(index) {
    disposeElement(pkmnMenu);
    const member = player.pokemonBox[index];
    const menuItems = ['Party', 'Salvage'];
    for (const opt in menuItems) {
        const menuOpt = document.createElement('button');
        menuOpt.classList.add('menu-item');
        menuOpt.innerHTML = menuItems[opt];
        if (member.isEgg || findEmptyParty() === -1 && opt === '0')
            menuOpt.disabled = true;
        menuOpt.addEventListener('click', (e) => {
            if (opt === '0') {
                sendToParty(index);
            }
            else if (opt === '1') {
                salvagePoke(index, 'box');
            }
        });
        pkmnMenu.appendChild(menuOpt);
    }
}
//For party
function emptyMember() {
    return { id: null, isEgg: null, name: null, exp: 0, ehp: null, progress: null, sprite: null, eggSprite: null, isShiny: null, creation: null, lastTick: null, eggPause: null, frozen: null, UUID: null };
}
function findEmptyParty() {
    const findNull = Object.entries(player.party).find(([key, value]) => {
        if (value.isEgg === null) {
            return [key, value];
        }
    });
    return findNull ? +findNull[0] : -1;
}
//For Items
function gainItem(itemID, amount = 1) {
    if (!itemData.hasOwnProperty(itemID))
        return;
    const getItem = itemData[itemID];
    if (getItem.type === 'key')
        amount = 1;
    if (!player.items.hasOwnProperty(itemID)) {
        player.items = Object.assign({ [itemID]: { quantity: amount } }, player.items);
    }
    else if (player.items.hasOwnProperty(itemID)) {
        if (getItem.type !== 'key')
            player.items[itemID].quantity += amount;
    }
    else {
        console.log('Can\'t add item for an unknown reason.');
    }
    renderItemBag(player.prefs.bag);
}
//Sorting
function sortBox() {
    let tempObj = player.pokemonBox;
    player.pokemonBox = {};
    Object.entries(tempObj).map((value, index) => {
        player.pokemonBox[index] = value[1];
    });
}
//Format
function formNum(int) {
    return int.toLocaleString('en-US');
}
function colorLog(message, type = 'log') {
    let color = 'unset';
    switch (type) {
        case "success":
            color = "greenyellow";
            break;
        case "info":
            color = "deepskyblue";
            break;
        case "error":
            color = "orangered";
            break;
        case "warning":
            color = "orange";
            break;
        default:
            color = color;
    }
    console.warn(`%c[${type.toUpperCase()}] ${message}`, `color:${color}`);
}
