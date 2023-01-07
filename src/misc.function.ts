const dataImg = {
    'eggIcon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATdJREFUWEftVaEOwjAQfTh+oxIkEoncL0wOBxKHBYdkjslJ7CQSHBLkLH8AbuS23VKWkdyRLQtJK5b2erv37t21HaDnMegZH46AU8Ap8PcKZNY98lMyP/0EIAe+3RYV/ngc8lwVU+VcImTrgwczAfxR8HGRRmGC5Soimziu2LEOTus6AbJpSagJHK5ezqUJnOxpekJZDlFskRNnv98FCBYFgfqI77n0mA4NTslLXAoVgefz+PXxZALpFfCnRqxCawSI2SYuVOiMAB07Y2bgbO0+oNrbQ9oHKgWoB2beEOdXWtWbJvG5WHP2XfUAxc/sy6cOziS284SmouRETpa0GavANjt7sj0uQBR1RyBXgT62EkyizFycvcqx4fzZDxFvaxWV1enr4W9hQ824BcyPEI6AU8Ap0LsCbw3FYyE2M9K7AAAAAElFTkSuQmCC'
}

//Pokemon Handler functions
function sendToLead(index: number, type: string) {
    const getLead: any = player.leadPoke;
    let member: any;
    if (type === 'party') {
        member = player.party[index];
        player.party[index] = player.leadPoke;
        renderParty(false, index);
    } else if (type === 'box') {
        member = player.pokemonBox[index];
        player.pokemonBox[index] = player.leadPoke;
        sortBox();
        renderPokeBox();
    }
    player.leadPoke = member;
    renderLead();
}

function sendToBox(index: number) {
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

function sendToParty(index: number) {
    const slot = findEmptyParty();
    if (slot !== -1) {
        const member = player.pokemonBox[index];
        player.party[slot] = member;
        if (member.isEgg) progressEgg(slot);
        delete player.pokemonBox[index];
        sortBox();
        renderPokeBox();
    }
}

//For Salvaging Pokemon
function salvagePoke(index: number, type: string) {
    let member: any;
    if (type === 'party') {
        member = player.party[index];
        calcGems(pkmnData[member.id]);
        player.party[index] = emptyMember();
        renderParty(false, index);
    } else if (type === 'box') {
        member = player.pokemonBox[index];
        calcGems(pkmnData[member.id]);
        delete player.pokemonBox[index];
        sortBox();
        renderPokeBox();
    }
    function calcGems(pkmn: any) {
        for (const type of pkmn.types) {
            if (type !== 'None') {
                const gemID = +Object.entries(itemData).filter(([key, value]) => value.name === `${type} Gem`)[0][0];
                gainItem(gemID, 1);
                console.log(type)
            }
        }
    }
}

//Right click menu for Pokemon
document.querySelectorAll('[pkmn-menu]').forEach(item => {
    item.addEventListener('contextmenu', (e: any) => {
        e.preventDefault();
        const elem: any = e.target;
        const menuType = elem.getAttribute('pkmn-menu');
        const index = +elem.getAttribute('data-src');
        if (menuType === null || index === null) return;
        if (menuType === 'party') {
            if (player.party[index].isEgg !== null) {
                displayMenu();
                buildPartyMenu(+index);
            }
        } else if (menuType === 'box') {
            displayMenu();
            buildBoxMenu(+index);
        }
        function displayMenu() {
            pkmnMenu.style.top = `${e.pageY}px`;
            pkmnMenu.style.left = `${e.pageX}px`;
            pkmnMenu.style.display = 'flex';
        }
    })
})

function buildPartyMenu(index: number) {
    disposeElement(pkmnMenu);
    const member = player.party[index];
    const menuItems = ['Lead', 'Box', 'Salvage'];
    for (const opt in menuItems) {
        const menuOpt = document.createElement('button');
        menuOpt.classList.add('menu-item');
        menuOpt.innerHTML = menuItems[opt];
        if (member.isEgg) {
            if (opt === '0' || opt === '2') {
                menuOpt.disabled = true
            }
        }
        menuOpt.addEventListener('click', (e) => {
            if (opt === '0') {
                sendToLead(index, 'party');
            } else if (opt === '1') {
                sendToBox(index);
            } else if (opt === '2') {
                salvagePoke(index, 'party');
            }
        });
        pkmnMenu.appendChild(menuOpt);
    }
}

function buildBoxMenu(index: number) {
    disposeElement(pkmnMenu);
    const member = player.pokemonBox[index];
    const menuItems = ['Lead', 'Party', 'Salvage'];
    for (const opt in menuItems) {
        const menuOpt = document.createElement('button');
        menuOpt.classList.add('menu-item');
        menuOpt.innerHTML = menuItems[opt];
        if (member.isEgg) {
            if (opt === '0' || findEmptyParty() === -1 && opt === '1' || opt === '2') {
                menuOpt.disabled = true
            }
        }
        menuOpt.addEventListener('click', (e) => {
            if (opt === '0') {
                sendToLead(index, 'box');
            } else if (opt === '1') {
                sendToParty(index);
            } else if (opt === '2') {
                salvagePoke(index, 'box');
            }
        });
        pkmnMenu.appendChild(menuOpt);
    }
}

function trimImage(htmlID: string) {
    // Get a reference to the canvas element
    const canvas: any = document.getElementById('canvas')!;

    // Get a reference to the image element
    const image: any = document.getElementById(htmlID)!;

    // Set the canvas dimensions to the same as the image
    canvas.width = 32;
    canvas.height = 32;

    // Get a reference to the canvas context
    const ctx = canvas.getContext('2d');

    // Draw the image to the canvas
    ctx.drawImage(image, -18, -30);

    // Trim the image by specifying the source and destination coordinates
    //ctx.drawImage(image, 10, 10, 32, 32, 10, 10, 32, 32);

    const trimmedImageUrl = canvas.toDataURL();

    console.log(trimmedImageUrl)
}