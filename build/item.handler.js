"use strict";
function useItem(itemID) {
    switch (itemID) {
        case 408:
            player.prefs.nav = 3;
            renderMain(player.prefs.nav);
            break;
        default:
            Notify('itemUnusable');
    }
}
