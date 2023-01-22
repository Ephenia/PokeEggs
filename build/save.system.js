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
let preventSave = false;
let clearSave = false;
window.addEventListener('beforeunload', function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (player.settings.onExitSave.state && !clearSave && !preventSave) {
            yield preserveOnSave();
            yield createSave();
        }
    });
}, false);
function preserveOnSave() {
    return __awaiter(this, void 0, void 0, function* () {
        //Preserve buffs
        for (const buff in player.buffHandler) {
            player.buffHandler[buff].buffPause = Date.now();
        }
        //Preserve eggs
        pauseEggTimer(true);
    });
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
function playerBase64() {
    const stringToEncode = JSON.stringify(player);
    const encoder = new TextEncoder();
    const data = encoder.encode(stringToEncode);
    const base64 = btoa(new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
    return base64;
}
function importSave(input) {
    const base64ToDecode = input;
    const decoder = new TextDecoder();
    const string = decoder.decode(new Uint8Array(atob(base64ToDecode).split('').map(char => char.charCodeAt(0))));
    player = JSON.parse(string);
    location.reload();
}
function downloadSave(base64) {
    //Downloading
    var textFileAsBlob = new Blob([base64], { type: 'text/plain' });
    var downloadLink = document.createElement("a");
    downloadLink.download = `PokeEggs-${new Date()}`;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}
function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0];
    if (f) {
        var r = new FileReader();
        r.onload = function (e) {
            var contents = e.target.result;
            if (confirm('Would you like to attempt to load this save file?')) {
                importSave(contents);
            }
        };
        r.readAsText(f);
    }
    else {
        alert("Failed to load file");
    }
}
