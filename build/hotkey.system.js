"use strict";
// @ts-nocheck
hotkeys('d', function (event, handler) {
    event.preventDefault();
    setModalTitle('Debug Tools');
    openModal('debugtools');
});
