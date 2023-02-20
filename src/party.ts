const partyCont = document.getElementById('party-cont')!;
let partySlots: any;

function renderParty(full = false, index: number = -1) {
    if (isHidden(partyCont)) return;
    if (full) {
        disposeParty(true);
        for (const index in player.party) {
            drawPoke(+index);
        }
    } else {
        disposeParty(false, index);
        drawPoke(index);
    }
    function drawPoke(index: number) {
        const member = player.party[index];
        const frag = new DocumentFragment();
        if (member.isEgg !== null) {
            //Pokemon image
            const pkmnImg = document.createElement("div");
            const img = document.createElement("img");
            img.setAttribute('data-src', `${index}`);
            img.setAttribute('tooltip-src', 'party-pkmn');
            let sprite;
            if (member.isEgg) {
                sprite = `assets/${eggDesign.includes(member.forme) ? `eggs/normal/${member.forme}` : `eggs/${member.eggSprite}`}.png`;
            } else {
                sprite = `assets/pkmn/${member.isShiny ? 'shiny' : 'normal'}/${member.FOV === 'forme' ? member.forme : member.variant}.png`;
            }
            //img.src = `assets/${member.isEgg ? `eggs/${member.eggSprite}` : `pkmn/${member.isShiny ? 'shiny' : 'normal'}/${member.sprite}`}.png`;
            img.src = sprite;
            pkmnImg.appendChild(img);
            frag.appendChild(pkmnImg);
            //Pokemon name
            const pkmnNameCont = document.createElement("div");
            const pkmnName = document.createElement("div");
            if (!member.isEgg && member.isShiny) pkmnName.classList.add('shiny-name');
            pkmnName.innerText = member.isEgg ? 'Egg' : `${member.name}`;
            pkmnNameCont.appendChild(pkmnName);
            frag.appendChild(pkmnNameCont);
            //Pokemon EHP
            const pkmnEHP = document.createElement("div");
            pkmnEHP.classList.add('egg-progress');
            pkmnEHP.innerHTML = member.isEgg ? `${formNum(member.progress)} /<br> ${formNum(member.ehp)}` : formNum(member.exp);
            frag.appendChild(pkmnEHP);
            partySlots[index].appendChild(frag);
            //Egg progress bar
            const eggProg = document.createElement("div");
            eggProg.classList.add('egg-progress-bar');
            eggProg.setAttribute('style', eggProgStyle(member.isEgg, member.progress, member.ehp));
            frag.appendChild(eggProg);
            //Egg hatcher
            const eggHatch = document.createElement("div");
            eggHatch.classList.add('egg-hatcher');
            eggHatch.style.display = member.isEgg && member.progress === member.ehp ? 'flex' : 'none';
            eggHatch.textContent = 'Hatch!';
            eggHatch.setAttribute('data-src', `${index}`);
            eggHatch.setAttribute('pkmn-menu', 'party');
            eggHatch.addEventListener('click', () => {
                hatchEgg(index);
            });
            frag.appendChild(eggHatch);
        } else {
            const nullSlot = document.createElement("div");
            nullSlot.textContent = 'This party slot is empty.';
            frag.appendChild(nullSlot);
        }
        partySlots[index].appendChild(frag);
    }
}

function disposeParty(full = false, index: number = -1) {
    if (full) {
        for (const slot of partySlots) {
            disposeElement(slot);
        }
    } else {
        disposeElement(partySlots[index]);
    }
}

//Egg functions
function progressEgg(index: number, delay: number = 0) {
    const thisEgg = player.party[index];
    let eggLoop: any;

    setTimeout(() => {
        console.log(thisEgg.UUID)
        player.eggHandler[index] = thisEgg.UUID;
        thisEgg.frozen = false;
        eggTick(delay > 0 ? false : true, index);
        startEgg();
    }, delay);
    function startEgg() {
        eggLoop = setInterval(() => {
            eggTick(true, index);
        }, 1000);
    }

    function eggTick(init: boolean = false, index: number) {
        if (!eggValidation(thisEgg, index)) {
            clearInterval(eggLoop)
            return;
        }
        if (init) {
            thisEgg.progress = player.settings.instaHatchEggs.state ? thisEgg.ehp : Math.min(thisEgg.ehp, thisEgg.progress += randRange(200, 250));
            thisEgg.lastTick = Date.now();
        }
        if (!isHidden(partyCont)) {
            const eggCont: HTMLElement = partyCont.querySelector(`[data-src="${index}"]`)!;
            const eggProg: HTMLElement = eggCont.querySelector('.egg-progress')!;
            const eggProgBar: HTMLElement = eggCont.querySelector('.egg-progress-bar')!;
            const eggHatch: HTMLElement = eggCont.querySelector('.egg-hatcher')!;
            eggProg.innerHTML = `${formNum(thisEgg.progress)} /<br> ${formNum(thisEgg.ehp)}`;
            eggProgBar.setAttribute('style', eggProgStyle(true, thisEgg.progress, thisEgg.ehp));
            if (thisEgg.progress === thisEgg.ehp) eggHatch.setAttribute('style', 'display:flex');
        }
        if (thisEgg.progress === thisEgg.ehp) {
            clearInterval(eggLoop);
            if (player.settings.eggReadyNotif.state) Notify('eggReady');
            if (player.settings.instaHatchEggs.state) hatchEgg(index);
        }
    }
}

function eggValidation(member: any, index: number): boolean {
    const eggHandler = player.eggHandler[index];
    return member.UUID === eggHandler && eggHandler !== null && !member.frozen ? true : false;
}

function resumeEggs() {
    for (const index in player.party) {
        const member = player.party[index];
        if (member.isEgg) {
            if (member.progress !== member.ehp) {
                const nextTick = Math.max(0, (1000 - (member.eggPause - member.lastTick)));
                console.log(nextTick)
                progressEgg(+index, nextTick);
            }
        }
    }
}

function eggProgStyle(isEgg: boolean = true, progress: number, ehp: number) {
    const width = isEgg ? 500 - Math.ceil(100 - ((progress / ehp) * 100)) * 5 : 0;
    console.log(width)
    return `width:${width}px`;
}

function pauseEggTimer(full: boolean = false, index: number = -1) {
    if (full) {
        for (const index in player.party) {
            const member = player.party[index];
            if (member.isEgg) pauseEgg(member, +index);
        }
    } else {
        pauseEgg(player.party[index], index);
    }
    function pauseEgg(member: any, index: number) {
        member.eggPause = Date.now();
        if (saveStatePause) {
            player.eggHandler[index] = null;
            member.frozen = true;
        }
    }
}

function hatchEgg(index: number) {
    const member = player.party[index];
    const eggHatch = partySlots[index].querySelector('.egg-hatcher');
    if (!isHidden(eggHatch)) eggHatch.style.display = 'none';
    player.eggHandler[index] = null;
    convertEgg(member);
    disposeParty(false, index);
    renderParty(false, index);
    console.log(member)
    advanceChain(member.id, member.isShiny);
}

function convertEgg(member: any) {
    member.isEgg = false;
    delete member.lastTick;
    delete member.eggPause;
    delete member.ehp
    delete member.progress;
    delete member.eggSprite;
}