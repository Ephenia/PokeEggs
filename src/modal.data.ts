const modalData: any = {
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
        console.log('opening')
    },
    //Debug tools
    debugtools() {
        createDebugTools();
    }
}

function pickStarter() {
    const starters: any = {
        0: [1, 4, 7], //Kanto
        1: [152, 155, 158], //Jhoto
        2: [252, 255, 258], //Hoenn
        3: [387, 390, 393], //Sinnoh
        4: [495, 498, 501], //Unova
        5: [650, 653, 656], //Kalos
        6: [722, 725, 728], // Alola
        7: [810, 813, 816] //Galar
    }
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
                    document.getElementById('btn-select-starter')!.removeAttribute('disabled');
                });
            } else {
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
        const id: any = document.querySelector('input[name="starter"]:checked')!.getAttribute('value');
        addEgg(+id);
        closeModal();
        player.flags.kantoStarter = true;
    })
    modalContent.appendChild(btn);
    modalContent.classList.add('modal-select-starter');
    modalPersist = true;
}

function createSettings() {

}

function createChangelog() {
    fetch('./changelog.txt')
        .then(response => response.text())
        .then((data) => {
            modalContent.innerHTML = `${data}`;
        })
    modalContent.classList.add('modal-changelog');
}

function createDebugTools() {
    const frag = new DocumentFragment();
    const tests: any = {
        0: ['Cast a random Item Buff.', 'Cast Buff', 'randomBuff()'],
        1: ['Add an egg to the party.', 'Add Egg', 'addEgg(1)'],
        2: ['Clears the party.', 'Clear Party', 'clearParty()'],
        3: ['Add a random item to the Item Bag.', 'Add Item', 'randomitem()'],
        4: ['Clears the Item Bag.', 'Clear Item Bag', 'clearItemBag()']
    }
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