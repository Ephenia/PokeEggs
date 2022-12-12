//@ts-nocheck
localforage.config({
    driver: localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
    name: 'PokéEggs',
    version: 1.0,
    size: 100000000, // Size of database, in bytes. WebSQL-only for now.
    storeName: 'keyvaluepairs', // Should be alphanumeric, with underscores.
    description: ''
});

let clearSave: boolean = false;

window.addEventListener('beforeunload', async function (e) {
    if (!clearSave) {
        preserveOnSave();
        createSave();
    }
}, false);

function preserveOnSave() {
    //Preserve buffs
    for (const buff in player.buffHandler) {
        player.buffHandler[buff].buffPause = Date.now();
    }
    //Preserve eggs
    pauseEggTimer(true);
}

async function hasSave(): boolean {
    try {
        const value = await localforage.getItem('PE_Player');
        return value !== null;
    } catch (err) {
        console.log(err);
    }
}

async function createSave() {
    localforage.setItem('PE_Player', player).then(function (value) {
        console.log(value);
        colorLog('Saved game!', 'info');
        preserveOnSave();
    }).catch(function (err) {
        console.log(err);
    });
}

async function loadSave() {
    localforage.getItem('PE_Player').then(function (value) {
        console.log(value);
        colorLog('Loaded save!', 'info');
        player = value;
        setTimeout(() => {
            loadMain();
        }, 0)
    }).catch(function (err) {
        console.log(err);
    });
}

function deleteSave() {
    localforage.clear().then(function () {
        colorLog('Save data cleared!', 'success')
        clearSave = true;
        location.reload();
    }).catch(function (err) {
        console.log(err);
    });
}