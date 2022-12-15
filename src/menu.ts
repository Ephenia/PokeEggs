const mainMenuBtn = document.getElementById('main-menu-btn')!;
const menuOpts = document.getElementById('menu-options')!;
let menuActive: boolean = false;

mainMenuBtn.addEventListener('click', () => { if (!menuActive) buildMenu(); });

window.onclick = function (e: any) {
    if (!e.target.matches('#main-menu-btn') && menuActive) {
        closeMenu();
    }
}

function buildMenu() {
    mainMenuBtn.classList.add('menu-active');
    const frag = document.createDocumentFragment();
    for (const opt in menuOptions) {
        const thisOpt = menuOptions[opt];
        if (!player.prefs.debug && thisOpt.debug) {
            //Do Nothing
        } else {
            const btn = document.createElement('button');
            btn.textContent = thisOpt.name;
            btn.setAttribute('title', thisOpt.description);
            btn.setAttribute('class', 'pkmnfont');
            btn.addEventListener('click', () => {
                if (thisOpt.modal) {
                    setModalTitle(thisOpt.name);
                    openModal(thisOpt.src);
                } else {
                    thisOpt.custom();
                }
            });
            frag.appendChild(btn);
        }
    }
    menuOpts.appendChild(frag);
    menuActive = true;
}

function closeMenu() {
    disposeElement(menuOpts);
    mainMenuBtn.classList.remove('menu-active');
    menuActive = false;
}