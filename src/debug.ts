function clearParty() {
    pauseEggTimer(true);
    for (const slot in player.party) {
        player.party[slot] = emptyMember();
    }
    renderParty(true);
}