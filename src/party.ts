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
            img.src = `assets/${member.isEgg ? `eggs/${member.eggSprite}` : `pkmn/${member.isShiny ? 'shiny' : 'normal'}/${member.sprite}`}.png`;
            pkmnImg.appendChild(img);
            frag.appendChild(pkmnImg);
            //Pokemon name
            const pkmnName = document.createElement("div");
            if (!member.isEgg && member.isShiny) pkmnName.classList.add('shiny-name');
            pkmnName.innerText = member.isEgg ? 'Egg' : `${member.name}`;
            frag.appendChild(pkmnName);
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
            eggHatch.addEventListener('click', () => {
                eggHatch.style.display = 'none';
                convertEgg(member);
                disposeParty(false, index);
                drawPoke(index);
                console.log(member)
                advanceChain(member.id, member.isShiny);
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
    const eggProg: HTMLCollection = document.getElementsByClassName('egg-progress');
    const eggProgBar: HTMLCollection = document.getElementsByClassName('egg-progress-bar');
    const eggHatch: HTMLCollection = document.getElementsByClassName('egg-hatcher')!;
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
            thisEgg.progress = Math.min(thisEgg.ehp, thisEgg.progress += randRange(200, 250));
            thisEgg.lastTick = Date.now();
        }
        if (!isHidden(partyCont)) {
            eggProg[index].innerHTML = `${formNum(thisEgg.progress)} /<br> ${formNum(thisEgg.ehp)}`;
            eggProgBar[index].setAttribute('style', eggProgStyle(true, thisEgg.progress, thisEgg.ehp));
            if (thisEgg.progress === thisEgg.ehp) eggHatch[index].setAttribute('style', 'display:flex');
        }
        if (thisEgg.progress === thisEgg.ehp) clearInterval(eggLoop);
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

function addEgg() {
    let findNull: any = false;
    findNull = Object.entries(player.party).find(([key, value]) => {
        if (value.isEgg === null) {
            return [key, value];
        }
    });
    console.log(findNull)
    if (findNull) {
        const nullIndex = findNull[0];
        player.party[nullIndex] = createEgg(false, 1);
        renderParty(false, nullIndex);
        progressEgg(nullIndex);
    }
}

function pauseEggTimer(full: boolean = false, index: number = -1) {
    if (full) {
        for (const index in player.party) {
            const member = player.party[index];
            if (member.isEgg) pauseEgg(member, +index);
        }
    } else {
        //pauseEgg(player.party[index]);
    }
    function pauseEgg(member: any, index: number) {
        member.eggPause = Date.now();
        player.eggHandler[index] = null;
        member.frozen = true;
    }
}

function convertEgg(member: any) {
    member.isEgg = false;
    delete member.lastTick;
    delete member.eggPause;
    delete member.ehp
    delete member.progress;
    delete member.eggSprite;
}

// function progressEgss() {
//     const eggProg: HTMLCollection = document.getElementsByClassName('egg-progress');
//     for (const index in player.party) {
//         const member = player.party[index];
//         if (member.isEgg) {
//             member.progress -= 1;
//             eggProg[index].innerHTML = `${formNum(member.progress)} /<br> ${formNum(member.ehp)}`;
//         }
//     }
// }