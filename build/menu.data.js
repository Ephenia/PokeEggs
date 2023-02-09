"use strict";
const menuOptions = {
    0: {
        name: 'Settings',
        description: 'Lets you adjust and configure various settings.',
        src: 'settings',
        modal: true,
        debug: false,
        custom: null
    },
    1: {
        name: 'Statistics',
        description: 'Shows and details different Player statistics',
        src: 'statistics',
        modal: true,
        debug: false,
        custom: null
    },
    2: {
        name: 'Changelog',
        description: 'Shows and details the updates of the project.',
        src: 'changelog',
        modal: true,
        debug: false,
        custom: null
    },
    3: {
        name: 'Modal System Test',
        description: 'Tests the Modal System.',
        src: 'modaltest',
        modal: true,
        debug: true,
        custom: null
    },
    // 4: {
    //     name: 'Buff System Test',
    //     description: 'Tests the Buff System. Will currently cast a random buff.',
    //     src: 'bufftest',
    //     modal: false,
    //     debug: true,
    //     custom() {
    //         randomBuff();
    //     }
    // },
    // 5: {
    //     name: 'Party System Test',
    //     description: 'Tests the Party System.',
    //     src: 'partytest',
    //     modal: false,
    //     debug: true,
    //     custom() {
    //         addEgg();
    //     }
    // },
    // 6: {
    //     name: 'Item System Test',
    //     description: 'Tests the Item System.',
    //     src: 'itemtest',
    //     modal: false,
    //     debug: true,
    //     custom() {
    //         randomitem();
    //     }
    // },
    // 7: {
    //     name: 'Clear Party',
    //     description: 'Clears the Party.',
    //     src: 'clearparty',
    //     modal: false,
    //     debug: true,
    //     custom() {
    //         clearParty();
    //     }  
    // },
    8: {
        name: 'Save Game',
        description: 'Saves your game.',
        src: 'createsave',
        modal: false,
        debug: false,
        custom() {
            createSave();
            Notify('createSave');
        }
    },
    9: {
        name: 'Reset Game',
        description: 'Resets your game and creates a new save.',
        src: 'deletesave',
        modal: false,
        debug: false,
        custom() {
            deleteSave();
        }
    },
    10: {
        name: 'Debug Tools',
        description: 'Tools made for debugging.',
        src: 'debugtools',
        modal: true,
        debug: true,
        custom: null
    },
    11: {
        name: 'Debug Mode',
        description: 'Switches On/Off Debug mode.',
        src: 'debugmode',
        modal: false,
        debug: false,
        custom() {
            player.prefs.debug = !player.prefs.debug;
        }
    },
    12: {
        name: 'Create Egg',
        description: '',
        src: 'createGemEgg',
        modal: true,
        debug: true,
        custom: null
    }
};
