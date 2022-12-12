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
//@ts-nocheck
localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'PokéEggs',
    version: 1.0,
    size: 100000000,
    storeName: 'keyvaluepairs',
    description: ''
});
let clearSave = false;
window.addEventListener('beforeunload', function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!clearSave) {
            preserveOnSave();
            createSave();
        }
    });
}, false);
function preserveOnSave() {
    //Preserve buffs
    for (const buff in player.buffHandler) {
        player.buffHandler[buff].buffPause = Date.now();
    }
    //Preserve eggs
    pauseEggTimer(true);
}
function hasSave() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const value = yield localforage.getItem('PE_Player');
            return value !== null;
        }
        catch (err) {
            console.log(err);
        }
    });
}
function createSave() {
    return __awaiter(this, void 0, void 0, function* () {
        localforage.setItem('PE_Player', player).then(function (value) {
            console.log(value);
            colorLog('Saved game!', 'info');
            preserveOnSave();
        }).catch(function (err) {
            console.log(err);
        });
    });
}
function loadSave() {
    return __awaiter(this, void 0, void 0, function* () {
        localforage.getItem('PE_Player').then(function (value) {
            console.log(value);
            colorLog('Loaded save!', 'info');
            player = value;
            setTimeout(() => {
                loadMain();
            }, 0);
        }).catch(function (err) {
            console.log(err);
        });
    });
}
function deleteSave() {
    localforage.clear().then(function () {
        colorLog('Save data cleared!', 'success');
        clearSave = true;
        location.reload();
    }).catch(function (err) {
        console.log(err);
    });
}
