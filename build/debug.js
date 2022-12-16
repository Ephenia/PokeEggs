"use strict";
function clearParty() {
    pauseEggTimer(true);
    for (const slot in player.party) {
        player.party[slot] = emptyMember();
    }
    renderParty(true);
}
function clearItemBag() {
    player.items = {};
    renderItemBag(player.prefs.bag);
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
function addEgg() {
    let findNull = false;
    findNull = Object.entries(player.party).find(([key, value]) => {
        if (value.isEgg === null) {
            return [key, value];
        }
    });
    console.log(findNull);
    if (findNull) {
        const nullIndex = findNull[0];
        player.party[nullIndex] = createEgg(false, 1);
        renderParty(false, nullIndex);
        progressEgg(nullIndex);
    }
}
