const itemBagCont = document.getElementById('item-bag-cont')!;
let itemBagView: any;
const invNames: BagTabLayout = {
    0: ['medicine', 'Medicine'],
    1: ['ball', 'Poké Balls'],
    2: ['battle', 'Battle Items'],
    3: ['berries', 'Berries'],
    4: ['misc', 'Other Items'],
    5: ['tm', 'TMs'],
    6: ['treasure', 'Treasures'],
    7: ['ingredient', 'Ingredients'],
    8: ['key', 'Key Items'],
}

function renderItemBag(index: number) {
    if (isHidden(itemBagCont)) return;
    disposeElement(itemBagView);
    const frag = document.createDocumentFragment();
    const typeItems = Object.entries(player.items).filter(([key, value]) => value.type === invNames[player.prefs.bag][0] && value.quantity !== 0);
    if (typeItems.length > 0) {
        itemBagView.classList.remove('empty-pocket');
        for (const index of typeItems) {
            const itemID = +index[0];
            const thisItem = index[1];
            const getItem = itemData[itemID];
            if (thisItem.quantity !== 0) {
                console.log(getItem)
                //Item Row
                const itemRow = document.createElement('div');
                itemRow.classList.add('item-bag-view-row');
                //Item Icon
                const itemIcon = document.createElement('div');
                const itemImg = document.createElement('img');
                itemImg.src = `assets/items/${getItem.src}.png`;
                itemIcon.appendChild(itemImg);
                itemRow.appendChild(itemIcon);
                //Item Name
                const itemName = document.createElement('div');
                itemName.textContent = `${getItem.name}`;
                itemRow.appendChild(itemName);
                //Item Quantity
                const itemAmnt = document.createElement('div');
                itemAmnt.textContent = `x${formNum(thisItem.quantity)}`;
                itemRow.appendChild(itemAmnt);
                //Item Function
                const itemFunc = document.createElement('div');
                const useBtn = document.createElement('button');
                getItem.usable ? useBtn.textContent = 'Use item' : useBtn.textContent = '----';
                if (!getItem.usable) useBtn.disabled = true;
                useBtn.addEventListener('click', () => {
                    useItem(itemID);
                });
                itemFunc.appendChild(useBtn);
                itemRow.appendChild(itemFunc);
                frag.appendChild(itemRow);
            }
        }
    } else {
        itemBagView.classList.add('empty-pocket');
        frag.textContent = 'Item Bag pocket is empty.'
    }
    itemBagView.appendChild(frag);
}

function changeItemBag(index: number) {
    const bagTabs: HTMLCollection = document.getElementsByClassName('item-bag-tab-cont')!;
    for (const tab of bagTabs) {
        const getIndex = +tab.getAttribute('tab-src')!;
        const getIcon = tab.querySelector('img')!;
        +getIndex === index ? tab.classList.add('item-bag-tab-active') : tab.classList.remove('item-bag-tab-active');
        +getIndex === index ? getIcon.classList.add('item-bag-tab-icon') : getIcon.classList.remove('item-bag-tab-icon');
    }
    if (player.prefs.bag !== index) {
        player.prefs.bag = index;
        disposeElement(itemBagView);
        renderItemBag(index);
    }
}