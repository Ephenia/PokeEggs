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
    const rand = randInt(items.length - 1);
    gainItem(+items[rand][0], 1);
}

function randomBuff() {
    const buffIDs = Object.keys(itemData);
    const randBuff = +buffIDs[randInt(buffIDs.length) - 1];
    createBuff(randBuff);
}

function addEgg(pokeID: number, starter = false) {
    let findNull: any = false;
    findNull = Object.entries(player.party).find(([key, value]) => {
        if (value.isEgg === null) {
            return [key, value];
        }
    });
    console.log(findNull)
    if (findNull) {
        const nullIndex = findNull[0];
        player.party[nullIndex] = createEgg(pokeID, starter);
        renderParty(false, nullIndex);
        progressEgg(nullIndex);
    } else {
        Notify('errorMsg', 'Party is full.');
    }
}

function salvageParty() {
    for (const slot in player.party) {
        const member = player.party[slot];
        if (member.isEgg !== null && !member.isEgg && !member.starter) {
            salvagePoke(+slot ,'party');
        }
    }
}