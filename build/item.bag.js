"use strict";
const itemBagCont = document.getElementById('item-bag-cont');
const invNames = {
    0: ['medicine', 'Medicine'],
    1: ['ball', 'Poké Balls'],
    2: ['battle', 'Battle Items'],
    3: ['berries', 'Berries'],
    4: ['misc', 'Other Items'],
    5: ['tm', 'TMs'],
    6: ['treasure', 'Treasures'],
    7: ['ingredient', 'Ingredients'],
    8: ['key', 'Key Items'],
};
function renderItemBag(index) {
}
function changeItemBag(index) {
    const bagTabs = document.getElementsByClassName('item-bag-tab-cont');
    for (const tab of bagTabs) {
        const getIndex = +tab.getAttribute('tab-src');
        const getIcon = tab.querySelector('img');
        +getIndex === index ? tab.classList.add('item-bag-tab-active') : tab.classList.remove('item-bag-tab-active');
        +getIndex === index ? getIcon.classList.add('item-bag-tab-icon') : getIcon.classList.remove('item-bag-tab-icon');
    }
    renderItemBag(index);
    player.prefs.bag = index;
}
