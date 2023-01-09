const pkmnMenu = document.getElementById('pkmn-menu')!;

//For elements
function disposeElement(element: HTMLElement) {
    if (element.innerHTML !== '') { element.innerHTML = ''; }
}

function isHidden(element: HTMLElement) {
    return element.offsetParent === null;
}

//Random functions
function randInt(int: number): number {
    return Math.floor(Math.random() * int);
}

function randRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function UUID() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

//For Pokemon
function createEgg(pokeID: number, random = false) {
    const thisPoke = random ? canBeEgg() : speciesData[pokeID];
    console.log(thisPoke)
    const toHatch = thisPoke.hatch_counter * 257;
    let shiny;
    const radar = player.radarHandler;
    if (radar.active && radar.lastHatch === pokeID) {
        shiny = 0 === randInt(chainOdds(radar.chain));
    } else {
        shiny = 0 === randInt(4096);
    }
    return { id: pokeID, isEgg: true, name: thisPoke.names, level: 1, exp: 0, ehp: toHatch, progress: 0, sprite: thisPoke.name, eggSprite: randRange(0, 2), isShiny: shiny, creation: Date.now(), lastTick: null, eggPause: null, frozen: false, UUID: UUID(), IVs: genIVs(), gender: calcGender(pokeID) };
}

function randPoke(): Object {
    const pkmnLen = Object.keys(pkmnData).length;
    return pkmnData[randRange(1, pkmnLen)];
}

function canBeEgg() {
    const pkmnArr: Array<any> = [];
    Object.entries(speciesData).filter(([key, value]) => {
        if (!value.evolves_from_species) pkmnArr.push(value);
    });
    return pkmnArr[randInt(pkmnArr.length)];
}

function genIVs() {
    return new Array(6).fill(null, 0).map(() => {
        return randInt(32);
    });
}

function calcGender(pokeID: number) {
    const rate = speciesData[pokeID].gender_rate;
    const gender = (100 / 8) * rate;
    return rate === -1 ? 'genderless': randInt(101) <= gender ? 'female' : 'male';
}

//For party
function emptyMember() {
    return { id: null, isEgg: null, name: null, level: 0, exp: 0, ehp: null, progress: null, sprite: null, eggSprite: null, isShiny: null, creation: null, lastTick: null, eggPause: null, frozen: null, UUID: null, IVs: null, gender: null };
}

function findEmptyParty(): number {
    const findNull = Object.entries(player.party).find(([key, value]) => {
        if (value.isEgg === null) {
            return [key, value];
        }
    });
    return findNull ? +findNull[0] : -1;
}

//For Items
function gainItem(itemID: number, amount: number = 1) {
    if (!itemData.hasOwnProperty(itemID)) return;
    const getItem = itemData[itemID];
    if (getItem.type === 'key') amount = 1;
    if (!player.items.hasOwnProperty(itemID)) {
        player.items = Object.assign({ [itemID]: { type: getItem.type, quantity: amount } }, player.items);
    } else if (player.items.hasOwnProperty(itemID)) {
        if (getItem.type !== 'key') player.items[itemID].quantity += amount;
    } else {
        console.log('Can\'t add item for an unknown reason.')
    }
    renderItemBag(player.prefs.bag);
}

function checkItemAmnt(itemID: number) {
    return player.items.hasOwnProperty(itemID) ? player.items[itemID].quantity : 0;
}

function itemImg(itemID: number) {
    return `<img src="assets/items/${itemData[itemID].src}.png">`;
}

//Sorting
function sortBox() {
    let tempObj = player.pokemonBox;
    player.pokemonBox = {};
    Object.entries(tempObj).map((value, index) => {
        player.pokemonBox[index] = value[1];
    })
}

//Conversion
function fracToPerc(denom: number) {
    const decimal = (1 / denom) * 100;
    return decimal.toFixed(4);
}

//Format
function formNum(int: number) {
    return int.toLocaleString('en-US');
}

function colorLog(message: string, type: string = 'log') {
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
    console.warn(`%c[${type.toUpperCase()}] ${message}`, `color:${color}`)
}