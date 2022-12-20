"use strict";
//Pokemon Handler functions
function sendToLead(index, type) {
    const getLead = player.leadPoke;
    let member;
    if (type === 'party') {
        member = player.party[index];
        player.party[index] = player.leadPoke;
        renderParty(false, index);
    }
    else if (type === 'box') {
        member = player.pokemonBox[index];
        player.pokemonBox[index] = player.leadPoke;
        sortBox();
        renderPokeBox();
    }
    player.leadPoke = member;
    renderLead();
}
function sendToBox(index) {
    const member = player.party[index];
    if (member.isEgg) {
        player.eggHandler[index] = null;
        pauseEggTimer(false, index);
    }
    const storageLen = Object.keys(player.pokemonBox).length;
    player.pokemonBox = Object.assign({ [storageLen]: member }, player.pokemonBox);
    player.party[index] = emptyMember();
    renderParty(false, index);
}
function sendToParty(index) {
    const slot = findEmptyParty();
    if (slot !== -1) {
        const member = player.pokemonBox[index];
        player.party[slot] = member;
        if (member.isEgg)
            progressEgg(slot);
        delete player.pokemonBox[index];
        sortBox();
        renderPokeBox();
    }
}
//For Salvaging Pokemon
function salvagePoke(index, type) {
    let member;
    if (type === 'party') {
        member = player.party[index];
        calcGems(pkmnData[member.id]);
        player.party[index] = emptyMember();
        renderParty(false, index);
    }
    else if (type === 'box') {
        member = player.pokemonBox[index];
        calcGems(pkmnData[member.id]);
        delete player.pokemonBox[index];
        sortBox();
        renderPokeBox();
    }
    function calcGems(pkmn) {
        for (const type of pkmn.types) {
            if (type !== 'None') {
                const gemID = +Object.entries(itemData).filter(([key, value]) => value.name === `${type} Gem`)[0][0];
                gainItem(gemID, 1);
                console.log(type);
            }
        }
    }
}
//Right click menu for Pokemon
document.querySelectorAll('[pkmn-menu]').forEach(item => {
    item.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const elem = e.target;
        const menuType = elem.getAttribute('pkmn-menu');
        const index = +elem.getAttribute('data-src');
        if (menuType === null || index === null)
            return;
        if (menuType === 'party') {
            if (player.party[index].isEgg !== null) {
                displayMenu();
                buildPartyMenu(+index);
            }
        }
        else if (menuType === 'box') {
            displayMenu();
            buildBoxMenu(+index);
        }
        function displayMenu() {
            pkmnMenu.style.top = `${e.pageY}px`;
            pkmnMenu.style.left = `${e.pageX}px`;
            pkmnMenu.style.display = 'flex';
        }
    });
});
function buildPartyMenu(index) {
    disposeElement(pkmnMenu);
    const member = player.party[index];
    const menuItems = ['Lead', 'Box', 'Salvage'];
    for (const opt in menuItems) {
        const menuOpt = document.createElement('button');
        menuOpt.classList.add('menu-item');
        menuOpt.innerHTML = menuItems[opt];
        if (member.isEgg) {
            if (opt === '0' || opt === '2') {
                menuOpt.disabled = true;
            }
        }
        menuOpt.addEventListener('click', (e) => {
            if (opt === '0') {
                sendToLead(index, 'party');
            }
            else if (opt === '1') {
                sendToBox(index);
            }
            else if (opt === '2') {
                salvagePoke(index, 'party');
            }
        });
        pkmnMenu.appendChild(menuOpt);
    }
}
function buildBoxMenu(index) {
    disposeElement(pkmnMenu);
    const member = player.pokemonBox[index];
    const menuItems = ['Lead', 'Party', 'Salvage'];
    for (const opt in menuItems) {
        const menuOpt = document.createElement('button');
        menuOpt.classList.add('menu-item');
        menuOpt.innerHTML = menuItems[opt];
        if (member.isEgg) {
            if (opt === '0' || findEmptyParty() === -1 && opt === '1' || opt === '2') {
                menuOpt.disabled = true;
            }
        }
        menuOpt.addEventListener('click', (e) => {
            if (opt === '0') {
                sendToLead(index, 'box');
            }
            else if (opt === '1') {
                sendToParty(index);
            }
            else if (opt === '2') {
                salvagePoke(index, 'box');
            }
        });
        pkmnMenu.appendChild(menuOpt);
    }
}
