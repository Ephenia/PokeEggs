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
    },
    createGemEgg() {
        createGemEgg();
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
function createGemEgg() {
    const types = ['Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison', 'Electric', 'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy'];
    const frag = new DocumentFragment();
    const createEggCont = document.createElement("div");
    const typeCont = document.createElement("div");
    typeCont.classList.add('modal-create-egg-types');
    for (const type of types) {
        const typeSel = document.createElement("button");
        typeSel.textContent = type;
        typeSel.addEventListener('click', () => {
            findByType(type);
            player.prefs.createEgg = type;
        });
        typeCont.appendChild(typeSel);
    }
    createEggCont.appendChild(typeCont);
    const searchRes = document.createElement("div");
    searchRes.id = 'egg-create-results';
    createEggCont.appendChild(searchRes);
    frag.appendChild(createEggCont);
    modalContent.appendChild(frag);
    modalContent.classList.add('modal-create-egg');
    findByType(player.prefs.createEgg);
    function findByType(type) {
        let pkmnArr = {};
        Object.entries(speciesData).filter(([key, value]) => {
            if (!value.evolves_from_species)
                pkmnArr = Object.assign({ [key]: pkmnData[+key] }, pkmnArr);
        });
        const res = Object.entries(pkmnArr).filter(([key, value]) => value.types.includes(type));
        const frag = new DocumentFragment();
        const resHTML = document.getElementById('egg-create-results');
        disposeElement(resHTML);
        for (const index of res) {
            const pokeDiv = document.createElement("div");
            const pokeID = +index[0];
            const poke = index[1];
            const species = speciesData[pokeID];
            if (!species.egg_groups.includes('no-eggs')) {
                const pokeImg = document.createElement("img");
                pokeImg.src = `assets/pkmn/normal/${poke.name}.png`;
                pokeDiv.appendChild(pokeImg);
                const pokeName = document.createElement("div");
                pokeName.textContent = poke.names;
                pokeDiv.appendChild(pokeName);
                const gemCont = document.createElement("div");
                gemCont.classList.add('modal-create-egg-gem-cont');
                for (const type of poke.types) {
                    const trueTypes = poke.types.filter((t) => t !== 'None');
                    if (type !== 'None') {
                        const gemType = document.createElement("img");
                        gemType.src = `assets/items/${type.toLowerCase()}-gem.png`;
                        gemCont.appendChild(gemType);
                        const gemCost = document.createElement("div");
                        gemCost.textContent = `${eggCost(pokeID, trueTypes)}`;
                        gemCont.appendChild(gemCost);
                    }
                }
                pokeDiv.appendChild(gemCont);
                frag.appendChild(pokeDiv);
            }
        }
        resHTML.appendChild(frag);
    }
    function eggCost(pokeID, types) {
        const eggCycle = speciesData[pokeID].hatch_counter;
        const statTotal = sumBaseStat(pokeID);
        return Math.round(eggCycle / objLen(types));
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
        if (name === 'disableThrottle') {
            localStorage.setItem('HackTimer', JSON.stringify(!setting.state));
            location.reload();
        }
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
        0: ['Add an egg to the party.', 'Add Egg', 'addEgg(25)'],
        1: ['Cast a random Item Buff.', 'Cast Buff', 'randomBuff()'],
        2: ['Clears the party.', 'Clear Party', 'clearParty()'],
        3: ['Add a random item to the Item Bag.', 'Add Item', 'randomitem()'],
        4: ['Clears the Item Bag.', 'Clear Item Bag', 'clearItemBag()'],
        5: ['Salvages your Party.', 'Salvage Party', 'salvageParty()'],
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
        frag.appendChild(div1);
    }
    const dropdown = document.createElement("div");
    dropdown.id = 'debug-search-poke';
    const selected = document.createElement("input");
    selected.id = 'debug-search-poke-sel';
    selected.type = 'text';
    selected.spellcheck = false;
    selected.value = player.prefs.debugSearch;
    selected.addEventListener('input', (event) => {
        const searchInput = String(event.target.value);
        pokeSearch(searchInput);
        player.prefs.debugSearch = searchInput;
    });
    dropdown.appendChild(selected);
    const optionsContainer = document.createElement("div");
    optionsContainer.id = "debug-search-poke-res";
    dropdown.appendChild(optionsContainer);
    frag.appendChild(dropdown);
    modalContent.appendChild(frag);
    modalContent.classList.add('modal-debug-tools');
    pokeSearch(player.prefs.debugSearch);
    function pokeSearch(input) {
        const res = document.getElementById('debug-search-poke-res');
        disposeElement(res);
        const search = Object.entries(pkmnData).filter(([key, value]) => {
            return value.names.toLowerCase().includes(input.toLowerCase());
        });
        const options = document.createDocumentFragment();
        for (let i = 0; i < objLen(search); i++) {
            const pokeID = search[i][0];
            const thisPoke = search[i][1];
            const opt = document.createElement("div");
            opt.classList.add('debug-search-poke-opt', 'main-border');
            opt.addEventListener('click', () => {
                addEgg(pokeID);
            });
            opt.innerText = `#${pokeID} - ${search[i][1].names}`;
            const pokeIcon = document.createElement("img");
            pokeIcon.src = `assets/pkmnicon/normal/${thisPoke.forms[0]}.png`;
            pokeIcon.loading = 'lazy';
            opt.appendChild(pokeIcon);
            options.appendChild(opt);
        }
        res.appendChild(options);
    }
}
