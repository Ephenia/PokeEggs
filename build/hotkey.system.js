"use strict";
// @ts-nocheck
hotkeys('d', function (event, handler) {
    event.preventDefault();
    if (!player.prefs.debug)
        return;
    setModalTitle('Debug Tools');
    openModal('debugtools');
});
