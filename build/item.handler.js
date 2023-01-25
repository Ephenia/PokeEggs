"use strict";
function useItem(itemID) {
    switch (itemID) {
        case 405:
            player.prefs.nav = nameToNav('Mining');
            renderMain(player.prefs.nav);
            break;
        case 408:
            player.prefs.nav = nameToNav('Poké Radar');
            renderMain(player.prefs.nav);
            break;
        case 415:
            player.prefs.nav = nameToNav('Crafting');
            renderMain(player.prefs.nav);
            break;
        case 419:
            player.prefs.nav = nameToNav('World Map');
            renderMain(player.prefs.nav);
            break;
        case 10000:
            gainItem(405);
            gainItem(408);
            gainItem(415);
            gainItem(419);
            gainItem(10001);
            remItem(10000);
            break;
        case 10001:
            player.prefs.nav = nameToNav('Buff Caster');
            renderMain(player.prefs.nav);
            break;
        default:
            Notify('itemUnusable');
    }
}
