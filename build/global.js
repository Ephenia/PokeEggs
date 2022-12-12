"use strict";
//For elements
function disposeElement(element) {
    element.innerHTML = '';
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
    return { id: pokeID, isEgg: true, name: thisPoke.names, ehp: toHatch, progress: 0, sprite: thisPoke.name, eggSprite: randRange(0, 2), isShiny: shiny, creation: Date.now(), lastTick: null, eggPause: null, frozen: false, UUID: UUID() };
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
//For party
function emptyMember() {
    return { id: null, isEgg: null, name: null, ehp: null, progress: null, sprite: null, eggSprite: null, isShiny: null, creation: null, lastTick: null, eggPause: null, frozen: null, UUID: null };
}
//For Items
function gainItem(itemID, amount) {
    if (!player.items.hasOwnProperty(itemID) && itemData.hasOwnProperty(itemID)) {
        player.items = Object.assign({ [itemID]: { quantity: amount } }, player.items);
    }
    else {
        console.log('Can\t add item as the player already has it or for an unknown reason.');
    }
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
