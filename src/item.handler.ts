function useItem(itemID: number) {
    switch (itemID) {
        case 408:
            player.prefs.nav = 3;
            renderMain(player.prefs.nav);
            break;
        default:
            Notify('itemUnusable');
    }
}