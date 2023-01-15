function useItem(itemID: number) {
    switch (itemID) {
        case 408:
            player.prefs.nav = 4;
            renderMain(player.prefs.nav);
            break;
        default:
            Notify('itemUnusable');
    }
}