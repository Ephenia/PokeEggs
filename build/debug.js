"use strict";
function clearParty() {
    pauseEggTimer(true);
    for (const slot in player.party) {
        const member = player.party[slot];
        if (member.isEgg !== null && !member.starter) {
            player.eggHandler[+slot] = null;
            player.party[slot] = emptyMember();
        }
    }
    renderParty(true);
}
function clearItemBag() {
    player.items = {};
    renderItemBag(player.prefs.bag);
    renderMain(player.prefs.nav);
}
function randomitem() {
    const items = Object.entries(itemData);
    const rand = randInt(items.length);
    gainItem(+items[rand][0], 1);
}
function randomBuff() {
    const buffIDs = Object.keys(itemData);
    const randBuff = +buffIDs[randInt(buffIDs.length)];
    createBuff(randBuff);
}
function addEgg(pokeID, starter = false) {
    let findNull = false;
    findNull = Object.entries(player.party).find(([key, value]) => {
        if (value.isEgg === null) {
            return [key, value];
        }
    });
    console.log(findNull);
    if (findNull) {
        const nullIndex = findNull[0];
        player.party[nullIndex] = createEgg(pokeID, false, starter);
        renderParty(false, nullIndex);
        progressEgg(nullIndex);
    }
}
function salvageParty() {
    for (const slot in player.party) {
        const member = player.party[slot];
        if (member.isEgg !== null && !member.isEgg && !member.starter) {
            salvagePoke(+slot, 'party');
        }
    }
}
