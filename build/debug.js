"use strict";
function clearParty() {
    pauseEggTimer(true);
    for (const slot in player.party) {
        player.party[slot] = emptyMember();
    }
    renderParty(true);
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
