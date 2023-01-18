"use strict";
function useItem(itemID) {
    switch (itemID) {
        case 408:
            player.prefs.nav = 4;
            renderMain(player.prefs.nav);
            break;
        case 10000:
            gainItem(405);
            gainItem(408);
            gainItem(415);
            gainItem(785);
            remItem(10000);
            break;
        default:
            Notify('itemUnusable');
    }
}
