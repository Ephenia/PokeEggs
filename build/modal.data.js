"use strict";
const modalData = {
    //For selecting a starter
    starterselect() {
        pickStarter();
    },
    //For settings
    settings() {
        createSettings();
    },
    //For viewing the changelog
    changelog() {
        createChangelog();
    },
    //For testing the Modal system
    modaltest() {
        console.log('opening');
    },
    //Debug tools
    debugtools() {
        createDebugTools();
    }
};
function pickStarter() {
    const starters = {
        1: [1, 4, 7],
        2: [152, 155, 158],
        3: [252, 255, 258],
        4: [387, 390, 393],
        5: [495, 498, 501],
        6: [650, 653, 656],
        7: [722, 725, 728],
        8: [810, 813, 816] //Galar
    };
    for (const region in starters) {
        const unlocked = player.flags.highestRegion >= region;
        const selection = starters[region];
        const frag = new DocumentFragment();
        const row = document.createElement("div");
        for (const id of selection) {
            const label = document.createElement("label");
            label.setAttribute('for', `starter-${id}`);
            if (unlocked) {
                label.addEventListener('click', () => {
                    Array.from(document.querySelectorAll('label')).forEach((el) => el.classList.remove('modal-select-starter-active'));
                    label.classList.add('modal-select-starter-active');
                    document.getElementById('btn-select-starter').removeAttribute('disabled');
                });
                label.addEventListener("dblclick", function () {
                    confirmStarter();
                });
            }
            else {
                label.classList.add('modal-select-starter-disabled');
            }
            const img = document.createElement("img");
            img.src = `assets/pkmn/normal/${pkmnData[id].name}.png`;
            label.appendChild(img);
            const input = document.createElement("input");
            input.id = `starter-${id}`;
            input.type = 'radio';
            input.name = 'starter';
            input.value = id;
            label.appendChild(input);
            row.appendChild(label);
        }
        frag.appendChild(row);
        modalContent.appendChild(frag);
    }
    const btn = document.createElement("button");
    btn.id = 'btn-select-starter';
    btn.textContent = 'Select';
    btn.disabled = true;
    btn.addEventListener('click', () => {
        confirmStarter();
    });
    modalContent.appendChild(btn);
    modalContent.classList.add('modal-select-starter');
    modalPersist = true;
    function confirmStarter() {
        const id = document.querySelector('input[name="starter"]:checked').getAttribute('value');
        addEgg(+id, true);
        closeModal();
        player.flags.kantoStarter = true;
    }
}
function createSettings() {
    const frag = new DocumentFragment();
    for (const setting in player.settings) {
        console.log(setting);
        console.log(player.settings[setting]);
        frag.appendChild(createCheckSetting(setting, player.settings[setting]));
    }
    const exportSave = document.createElement("button");
    exportSave.textContent = 'Export Save';
    exportSave.addEventListener('click', () => {
        downloadSave(playerBase64());
    });
    frag.appendChild(exportSave);
    const chooseSave = document.createElement("input");
    chooseSave.type = 'file';
    chooseSave.accept = '.txt';
    chooseSave.addEventListener("change", function (event) {
        readSingleFile(event);
    });
    frag.appendChild(chooseSave);
    modalContent.appendChild(frag);
    modalContent.classList.add('modal-settings');
}
function createCheckSetting(name, setting) {
    const frag = new DocumentFragment();
    const settingCont = document.createElement("div");
    settingCont.classList.add('modal-settings-checkbox');
    //Checkbox
    const checkInput = document.createElement("input");
    checkInput.type = 'checkbox';
    checkInput.id = name;
    checkInput.name = name;
    checkInput.checked = setting.state;
    checkInput.addEventListener('input', () => {
        player.settings[name].state = !setting.state;
    });
    settingCont.appendChild(checkInput);
    //Label
    const checkLabel = document.createElement("label");
    checkLabel.setAttribute('for', name);
    checkLabel.textContent = ` ${setting.name}`;
    settingCont.appendChild(checkLabel);
    frag.appendChild(settingCont);
    return frag;
}
function createChangelog() {
    fetch('./changelog.txt')
        .then(response => response.text())
        .then((data) => {
        modalContent.innerHTML = `${data}`;
    });
    modalContent.classList.add('modal-changelog');
}
function createDebugTools() {
    const frag = new DocumentFragment();
    const tests = {
        0: ['Cast a random Item Buff.', 'Cast Buff', 'randomBuff()'],
        1: ['Add an egg to the party.', 'Add Egg', 'addEgg(129)'],
        2: ['Clears the party.', 'Clear Party', 'clearParty()'],
        3: ['Add a random item to the Item Bag.', 'Add Item', 'randomitem()'],
        4: ['Clears the Item Bag.', 'Clear Item Bag', 'clearItemBag()']
    };
    for (const index in tests) {
        const thisTest = tests[index];
        const div1 = document.createElement("div");
        const info1 = document.createElement("div");
        info1.textContent = thisTest[0];
        div1.appendChild(info1);
        const btn1 = document.createElement("button");
        btn1.textContent = thisTest[1];
        btn1.setAttribute('onclick', thisTest[2]);
        div1.appendChild(btn1);
        modalContent.appendChild(div1);
    }
    modalContent.classList.add('modal-debug-tools');
}
