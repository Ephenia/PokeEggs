"use strict";
//For elements
function disposeElement(element) {
    if (element.innerHTML !== '') {
        element.innerHTML = '';
    }
}
function isHidden(element) {
    return element === null ? true : element.offsetParent === null;
}
function remClasses(element) {
    element.classList.remove(...element.classList);
}
function hideElement(element) {
    element.style.display = 'none';
}
//For Objects
function objLen(obj) {
    return Object.keys(obj).length;
}
//For Arrays
function numToArr(max) {
    return Array.from({ length: max }, (_, index) => index + 1);
}
function countArr(arr, int) {
    return arr.filter(i => i === int).length;
}
function everyArr(arr) {
    return arr.every((val, i, arr) => val === arr[0]);
}
function compareArrays(arr1, arr2, comparisonArray, emptyArray) {
    if (JSON.stringify(emptyArray) === JSON.stringify(arr1) || JSON.stringify(emptyArray) === JSON.stringify(arr2)) {
        return [];
    }
    else if (JSON.stringify(comparisonArray) === JSON.stringify(arr1) && JSON.stringify(comparisonArray) === JSON.stringify(arr2)) {
        return [];
    }
    else if (JSON.stringify(comparisonArray) === JSON.stringify(arr1)) {
        return comparisonArray.concat(arr2);
    }
    else if (JSON.stringify(comparisonArray) === JSON.stringify(arr2)) {
        return comparisonArray.concat(arr1);
    }
    else {
        return arr1.filter(value => arr2.includes(value));
    }
}
//Random functions
function randInt(int) {
    //int = int < 1 ? 1 : int;
    const chance = new Chance();
    return chance.integer({ min: 1, max: int });
}
function randRange(min, max) {
    const chance = new Chance();
    return chance.integer({ min: min, max: max });
}
function UUID() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
function weightedRandom(min, max) {
    return Math.round(max / (Math.random() * max + min));
}
function getCSSVar(variableName) {
    const root = document.documentElement;
    const value = getComputedStyle(root).getPropertyValue(`--${variableName}`).trim();
    return value;
}
//For Pokemon
function createEgg(pokeID, starter = false, forme = 0) {
    const thisPoke = pkmnData[pokeID];
    console.log(thisPoke);
    const species = findSpecies(thisPoke.species);
    const toHatch = species.hatch_counter * 257;
    let shiny;
    const radar = player.radarHandler;
    if (radar.active && radar.lastHatch === pokeID) {
        shiny = 1 === randInt(chainOdds(radar.chain));
    }
    else {
        shiny = 1 === randInt(4096);
    }
    const variantPos = species.varieties.indexOf(thisPoke.name);
    return { id: pokeID, isEgg: true, name: thisPoke.names, level: 1, exp: 0, ehp: toHatch, progress: 0, eggSprite: randRange(0, 2), isShiny: shiny, creation: Date.now(), lastTick: null, eggPause: null, frozen: false, UUID: UUID(), IVs: genIVs(), gender: calcGender(species.gender_rate), ability: calcAbility(pokeID), nature: genNature(), starter: starter, variant: thisPoke.name, forme: thisPoke.forms[forme], FOV: variantPos === 0 ? 'forme' : 'variant', indexForme: forme, indexVar: variantPos };
}
function findVariant(variant, index) {
    const findPoke = Object.entries(pkmnData).find(([key, value]) => value.name === variant);
    return findPoke ? findPoke[index] : -1;
}
function findSpecies(pokeName) {
    const findSpecies = Object.entries(speciesData).find(([key, value]) => value.name === pokeName);
    return findSpecies ? findSpecies[1] : -1;
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
    return randInt(pkmnArr.length - 1);
}
function genIVs() {
    return new Array(6).fill(null, 0).map(() => {
        return randInt(32) - 1;
    });
}
function calcGender(rate) {
    //const rate = speciesData[pokeID].gender_rate;
    const gender = (100 / 8) * rate;
    return rate === -1 ? 'genderless' : randInt(100) <= gender ? 'female' : 'male';
}
function calcAbility(pokeID) {
    const abilities = pkmnData[pokeID].abilities;
    const abilityList = Object.entries(abilities).filter(([key, value]) => value.hidden === false);
    return pkmnData[pokeID].abilities[randInt(abilityList.length) - 1].ability;
}
function pokeNameToID(name) {
    const findPoke = Object.entries(pkmnData).find(([key, value]) => value.name === name);
    return findPoke ? +findPoke[0] : 1;
}
function formToID(form) {
    const findForm = Object.entries(pkmnFormData).find(([key, value]) => value.name == form);
    return findForm ? +findForm[0] : 1;
}
function formToName(form) {
    const findForm = Object.entries(pkmnFormData).find(([key, value]) => value.name == form);
    return findForm ? findForm[1].names : null;
}
function eggMessage(progress, ehp) {
    const message = [
        'It looks as though this Egg will take a long time yet to hatch.',
        'What Pokémon will hatch from this Egg? It doesn\'t seem close to hatching.',
        'It appears to move occasionally. It may be close to hatching.',
        'Sounds can be heard coming from inside! This Egg will hatch soon!'
    ];
    const eggProg = (progress / ehp) * 100;
    if (eggProg <= 25) {
        return message[0];
    }
    else if (eggProg <= 50) {
        return message[1];
    }
    else if (eggProg <= 75) {
        return message[2];
    }
    else if (eggProg <= 100) {
        return message[3];
    }
}
function genNature() {
    const natureList = Object.keys(natureData);
    return natureList[randInt(natureList.length) - 1];
}
function calcNature(nature) {
    const statOrder = ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'];
    const getNature = natureData[nature];
    const statArr = new Array(6).fill(0).map((x, index) => {
        if (statOrder[index] == getNature.incStat) {
            return 1.1;
        }
        else if (statOrder[index] == getNature.decStat) {
            return 0.9;
        }
        else {
            return 1;
        }
    });
    return statArr;
}
//Experience Calculation
const expGroup = {
    erratic(level) {
        if (level < 2)
            return 0;
        if (level < 51) {
            return Math.floor((Math.pow(level, 3) * (100 - level)) / 50);
        }
        else if (level < 68) {
            return Math.floor((Math.pow(level, 3) * (150 - level)) / 100);
        }
        else if (level < 98) {
            return Math.floor((Math.pow(level, 3) * ((1911 - (level * 10)) / 3)) / 500);
        }
        else if (level < 101) {
            return Math.floor((Math.pow(level, 3) * (160 - level)) / 100);
        }
        else {
            return -1;
        }
    },
    fast(level) {
        if (level < 2)
            return 0;
        return Math.floor((Math.pow(level, 3) * 4) / 5);
    },
    medium_fast(level) {
        if (level < 2)
            return 0;
        return Math.floor(Math.pow(level, 3));
    },
    medium_slow(level) {
        if (level < 2)
            return 0;
        return Math.floor((6 / 5 * Math.pow(level, 3)) - (15 * Math.pow(level, 2)) + (100 * level) - 140);
    },
    slow(level) {
        if (level < 2)
            return 0;
        return Math.floor((Math.pow(level, 3) * 5) / 4);
    },
    fluctuating(level) {
        if (level < 2)
            return 0;
        if (level < 15) {
            return Math.floor(Math.pow(level, 3) * ((((level + 1) / 3) + 24) / 50));
        }
        else if (level < 36) {
            return Math.floor(Math.pow(level, 3) * ((level + 14) / 50));
        }
        else if (level < 101) {
            return Math.floor(Math.pow(level, 3) * (((level / 2) + 32) / 50));
        }
        else {
            return -1;
        }
    }
};
function getLevelEXP(pokeID, level) {
    const group = findSpecies(pkmnData[pokeID].species).growth_rate;
    return expGroup[group](level);
}
function nextLevelEXP(pokeID, level) {
    const group = findSpecies(pkmnData[pokeID].species).growth_rate;
    return expGroup[group](Math.min(level + 1, 100)) - expGroup[group](level);
}
function gainEXP(slot, exp) {
    const member = player.party[slot];
    member.exp += exp;
    const trueLvl = validateLevel(member.id, member.exp);
    if (member.level !== trueLvl)
        member.level = trueLvl;
    renderParty(false, slot);
}
function validateLevel(pokeID, exp) {
    for (let i = 100; i !== 0; i--) {
        if (exp >= getLevelEXP(pokeID, i)) {
            return i;
        }
    }
}
//Stat Calculation
function sumBaseStat(pokeID) {
    const stats = pkmnData[pokeID].stats;
    return stats.reduce((total, num) => total + num, 0);
}
//For party
function emptyMember() {
    return { id: null, isEgg: null, name: null, level: null, exp: null, ehp: null, progress: null, eggSprite: null, isShiny: null, creation: null, lastTick: null, eggPause: null, frozen: null, UUID: null, IVs: null, gender: null, ability: null, nature: null, starter: null, variant: null, forme: null, FOV: null, indexForme: null, indexVar: null };
}
function findEmptySlot(object) {
    const findNull = Object.entries(object).map(function (index) {
        return (index[1].isEgg === null);
    });
    return findNull.includes(true) ? findNull.indexOf(true) : -1;
}
//For Items
function gainItem(itemID, amount = 1) {
    if (!itemData.hasOwnProperty(itemID))
        return;
    const getItem = itemData[itemID];
    if (getItem.type === 'key')
        amount = 1;
    if (!player.items.hasOwnProperty(itemID)) {
        player.items = Object.assign({ [itemID]: { type: getItem.type, quantity: amount } }, player.items);
        if (player.settings.obtainItem.state)
            Notify('itemRecieve', [itemID, amount]);
    }
    else if (player.items.hasOwnProperty(itemID)) {
        if (getItem.type !== 'key') {
            player.items[itemID].quantity += amount;
            if (player.settings.obtainItem.state)
                Notify('itemRecieve', [itemID, amount]);
        }
        else {
            Notify('errorMsg', `You already own this item.`);
        }
    }
    else {
        Notify('errorMsg', 'Can\'t add item for an unknown reason.');
    }
    renderItemBag(player.prefs.bag);
    renderMain(player.prefs.nav);
}
function remItem(itemID, amount = 1) {
    player.items[itemID].quantity -= amount;
    renderItemBag(player.prefs.bag);
    renderMain(player.prefs.nav);
}
function checkItemAmnt(itemID) {
    return player.items.hasOwnProperty(itemID) ? player.items[itemID].quantity : 0;
}
function itemImg(itemID) {
    return `<img src="assets/items/${itemData[itemID].src}.png">`;
}
//For Navigation
function nameToNav(name) {
    return Object.entries(navOptions).findIndex(function ([key, value]) {
        return value.name === name;
    });
}
//Sorting
function sortBox() {
    let tempObj = player.pokemonBox;
    player.pokemonBox = {};
    Object.entries(tempObj).map((value, index) => {
        player.pokemonBox[index] = value[1];
    });
}
//Conversion
function fracToPerc(denom) {
    const decimal = (1 / Math.max(1, denom)) * 100;
    return decimal.toFixed(4);
}
//Format
function formNum(int) {
    return int.toLocaleString('en-US');
}
function notifyNum(int) {
    let str = String(int);
    if (int === 0) {
        str = '';
    }
    else if (int > 99) {
        str = '99+';
    }
    return str;
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
function colorRange(IV) {
    // @ts-ignore
    const colorRange = chroma.scale(['#EE4B2B', '#ADFF2F']).mode('lch').colors(31);
    return IV == 31 ? 'deepskyblue' : colorRange[IV];
}
function NPC(name) {
    return `<b style="color:lightskyblue">${name}:</b>`;
}
function formatDate(dateString) {
    let date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
