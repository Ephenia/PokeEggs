"use strict";
const mainNav = document.getElementById('navigation');
let navOpts;
const navOptions = {
    0: {
        name: 'Party',
        src: 'assets/items/poke-ball.png',
        nav() { renderParty(true); }
    },
    1: {
        name: 'Pokémon Box',
        src: 'assets/items/pokemon-box-link.png',
        nav() { }
    },
    2: {
        name: 'Item Bag',
        src: 'assets/items/forage-bag.png',
        nav() { }
    },
    3: {
        name: 'Poké Radar',
        src: 'assets/items/poke-radar.png',
        nav() { }
    },
    4: {
        name: 'Daycare',
        src: 'assets/npc/daycare-man.png',
        nav() { }
    }
};
function buildNav() {
    const frag = document.createDocumentFragment();
    for (const opt in navOptions) {
        const thisOpt = navOptions[opt];
        //Main nav opt
        const navDiv = document.createElement('div');
        navDiv.classList.add('navigation-item');
        if (player.prefs.nav === +opt)
            navDiv.classList.add('nav-select');
        navDiv.addEventListener('click', () => {
            if (player.prefs.nav === +opt)
                return;
            renderMain(+opt);
            thisOpt.nav();
        });
        //Nav icon
        const navImg = document.createElement('img');
        navImg.setAttribute('src', thisOpt.src);
        navDiv.appendChild(navImg);
        //Nav name
        const navName = document.createElement('div');
        navName.textContent = thisOpt.name;
        navDiv.appendChild(navName);
        frag.appendChild(navDiv);
    }
    mainNav.appendChild(frag);
    navOpts = document.getElementsByClassName('navigation-item');
}
function navSelect() {
    for (let i = 0; i < navOpts.length; i++) {
        player.prefs.nav === i ? navOpts[i].classList.add('nav-select') : navOpts[i].classList.remove('nav-select');
    }
}
