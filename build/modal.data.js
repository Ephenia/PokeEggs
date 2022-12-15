"use strict";
const modalData = {
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
        1: ['Add an egg to the party.', 'Add Egg', 'addEgg()'],
        2: ['Clears the party.', 'Clear Party', 'clearParty()'],
        3: ['Add a random item to the Item Bag.', 'Add Item', 'randomitem()']
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
