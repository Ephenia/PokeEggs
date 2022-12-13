"use strict";
const mainMenuBtn = document.getElementById('main-menu-btn');
const menuOpts = document.getElementById('menu-options');
let menuActive = false;
mainMenuBtn.addEventListener('click', () => { if (!menuActive)
    buildMenu(); });
window.onclick = function (e) {
    if (!e.target.matches('#main-menu-btn') && menuActive) {
        closeMenu();
    }
};
const menuOptions = {
    0: {
        name: 'Changelog',
        description: 'Shows and details the updates of the project.',
        src: 'changelog',
        modal: true,
        debug: false,
        custom: null
    },
    1: {
        name: 'Modal System Test',
        description: 'Tests the Modal System.',
        src: 'modaltest',
        modal: true,
        debug: true,
        custom: null
    },
    2: {
        name: 'Buff System Test',
        description: 'Tests the Buff System. Will currently cast a random buff.',
        src: 'bufftest',
        modal: false,
        debug: true,
        custom() {
            const buffIDs = Object.keys(itemData);
            const randBuff = +buffIDs[randInt(buffIDs.length)];
            createBuff(randBuff);
        }
    },
    3: {
        name: 'Party System Test',
        description: 'Tests the Party System.',
        src: 'partytest',
        modal: false,
        debug: true,
        custom() {
            addEgg();
        }
    },
    4: {
        name: 'Clear Party',
        description: 'Clears the Party.',
        src: 'clearparty',
        modal: false,
        debug: true,
        custom() {
            clearParty();
        }
    },
    5: {
        name: 'Save Game',
        description: 'Saves your game.',
        src: 'createsave',
        modal: false,
        debug: false,
        custom() {
            createSave();
        }
    },
    6: {
        name: 'Reset Game',
        description: 'Resets your game and creates a new save.',
        src: 'deletesave',
        modal: false,
        debug: false,
        custom() {
            deleteSave();
        }
    },
    7: {
        name: 'Debug Mode',
        description: 'Switches On/Off Debug mode.',
        src: 'debugmode',
        modal: false,
        debug: false,
        custom() {
            player.prefs.debug = !player.prefs.debug;
            location.reload();
        }
    }
};
function buildMenu() {
    mainMenuBtn.classList.add('menu-active');
    const frag = document.createDocumentFragment();
    for (const opt in menuOptions) {
        const thisOpt = menuOptions[opt];
        if (!player.prefs.debug && thisOpt.debug) {
            //Do Nothing
        }
        else {
            const btn = document.createElement('button');
            btn.textContent = thisOpt.name;
            btn.setAttribute('title', thisOpt.description);
            btn.setAttribute('class', 'pkmnfont');
            btn.addEventListener('click', () => {
                if (thisOpt.modal) {
                    setModalTitle(thisOpt.name);
                    openModal(thisOpt.src);
                }
                else {
                    thisOpt.custom();
                }
            });
            frag.appendChild(btn);
        }
    }
    menuOpts.appendChild(frag);
    menuActive = true;
}
function closeMenu() {
    disposeElement(menuOpts);
    mainMenuBtn.classList.remove('menu-active');
    menuActive = false;
}
