
const mainNav = document.getElementById('navigation')!;
let navOpts: any;

const navOptions: NavLayout = {
    0: {
        name: 'Party',
        src: 'assets/items/poke-ball.png',
        nav() { renderParty(true); },
        cond() { return true; }
    },
    1: {
        name: 'Pokédex',
        src: 'assets/items/rule-book.png',
        nav() { },
        cond() { return true; }
    },
    2: {
        name: 'Pokémon Box',
        src: 'assets/items/pokemon-box-link.png',
        nav() { renderPokeBox(); },
        cond() { return true; }
    },
    3: {
        name: 'Item Bag',
        src: 'assets/items/forage-bag.png',
        nav() { renderItemBag(player.prefs.bag); },
        cond() { return true; }
    },
    4: {
        name: 'Poké Radar',
        src: 'assets/items/poke-radar.png',
        nav() {
            this.cond() ? renderPokeRadar() : Notify('itemMissing', 408);
        },
        cond() {
            return checkItemAmnt(408) > 0 ? true : false;
        }
    },
    5: {
        name: 'Daycare',
        src: 'assets/npc/daycare-man.png',
        nav() { },
        cond() { return true; }
    },
    6: {
        name: 'Buff Caster',
        src: 'assets/items/mega-bracelet.png',
        nav() {
            this.cond() ? true : Notify('itemMissing', 785);
        },
        cond() {
            return checkItemAmnt(785) > 0 ? true : false;
        }
    },
    7: {
        name: 'Crafting',
        src: 'assets/items/works-key.png',
        nav() {
            this.cond() ? true : Notify('itemMissing', 415);
        },
        cond() {
            return checkItemAmnt(415) > 0 ? true : false;
        }
    },
    8: {
        name: 'Mining',
        src: 'assets/items/explorer-kit.png',
        nav() {
            this.cond() ? true : Notify('itemMissing', 405);
        },
        cond() {
            return checkItemAmnt(405) > 0 ? true : false;
        }
    }
}

function buildNav() {
    const frag = document.createDocumentFragment();
    for (const opt in navOptions) {
        const thisOpt = navOptions[opt];
        //Main nav opt
        const navDiv = document.createElement('div');
        navDiv.classList.add('navigation-item');
        if (player.prefs.nav === +opt) navDiv.classList.add('nav-select');
        navDiv.addEventListener('click', () => {
            if (player.prefs.nav === +opt) return;
            renderMain(+opt);
            //thisOpt.nav();
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
        !navOptions[i].cond() ? navOpts[i].classList.add('nav-locked') : navOpts[i].classList.remove('nav-locked');
    }
}