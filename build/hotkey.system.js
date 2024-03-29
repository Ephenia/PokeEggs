"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-nocheck
hotkeys('f5', function (event, handler) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        if (player.settings.onRefreshSave.state) {
            yield createSave();
        }
        preventForceSave = true;
        saveStatePause = true;
        location.reload();
    });
});
hotkeys('d', function (event, handler) {
    event.preventDefault();
    if (!player.prefs.debug)
        return;
    openModal('debugtools', 'Debug Tools');
});
