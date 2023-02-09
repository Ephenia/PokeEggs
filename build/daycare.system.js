"use strict";
const daycareCont = document.getElementById('daycare-cont');
let breedLoop;
const daycareCompMsg = [
    'The two prefer to play with other Pokémon more than with each other.',
    'The two don\'t really seem to like each other very much',
    'The two seem to get along.',
    'The two seem to get along.',
    'The two seem to get along very well!',
];
function renderDaycare() {
    if (isHidden(daycareCont))
        return;
    disposeElement(daycareCont);
    const frag = document.createDocumentFragment();
    const daycare = player.daycareHandler;
    //Daycare Man
    const daycareMan = document.createElement('div');
    daycareMan.id = 'daycare-cont-daycare-man';
    const dcManIcon = document.createElement('img');
    dcManIcon.src = 'assets/npc/daycare-man.png';
    daycareMan.appendChild(dcManIcon);
    const dcManText = document.createElement('div');
    dcManText.classList.add('speech-bubble');
    dcManText.innerHTML = `${NPC('Daycare Man')} ${daycare.breedComp === null ? 'Hello! Welcome to the Daycare.' : `${daycareCompMsg[daycare.breedComp]} (${daycare.breedComp})`}`;
    daycareMan.appendChild(dcManText);
    frag.appendChild(daycareMan);
    //Pokemon View
    const pkmnView = document.createElement('div');
    const pkmnSlotView = document.createElement('div');
    pkmnView.classList.add('main-border');
    pkmnView.id = 'daycare-cont-pkmn-view';
    let pkmn;
    let pkmnSlot;
    let pkmnIcon;
    let genderIcon;
    let pkmnInfo;
    for (const index in daycare.pokemon) {
        const member = daycare.pokemon[index];
        pkmnSlot = document.createElement('div');
        pkmn = document.createElement('div');
        pkmn.classList.add('main-border');
        pkmnInfo = document.createElement('div');
        pkmnInfo.id = 'daycare-cont-pkmn-info';
        if (member.isEgg !== null) {
            pkmnIcon = document.createElement('img');
            pkmnIcon.src = `assets/pkmn/${member.isShiny ? 'shiny' : 'normal'}/${member.forme}.png`;
            //Gender
            if (member.gender !== 'genderless') {
                genderIcon = document.createElement("img");
                genderIcon.classList.add('tooltip-party-pkmn-gender');
                genderIcon.src = `assets/gender/${member.gender}.png`;
                pkmn.appendChild(genderIcon);
            }
            //Cancel
            const cancel = document.createElement('div');
            cancel.classList.add('cancel-button');
            cancel.addEventListener('click', () => {
                sendToBox(+index, 'daycare');
                stopBreeding();
                renderDaycare();
            });
            pkmn.appendChild(cancel);
            //Info
            pkmnInfo.textContent = `${member.name}`;
        }
        else {
            pkmnIcon = document.createElement('div');
            pkmnIcon.textContent = 'Empty.';
        }
        pkmn.appendChild(pkmnIcon);
        pkmnSlot.appendChild(pkmn);
        pkmnSlot.appendChild(pkmnInfo);
        pkmnSlotView.appendChild(pkmnSlot);
    }
    pkmnView.appendChild(pkmnSlotView);
    //Progress Bar
    const progBDebug = document.createElement('div');
    progBDebug.id = 'daycare-cont-prog-debug';
    progBDebug.textContent = `Odds: ${daycare.eggChance !== null ? `${fracToPerc(daycare.eggChance)}% (${daycare.eggChance})` : '--'}`;
    pkmnView.appendChild(progBDebug);
    const progBarCont = document.createElement('div');
    progBarCont.id = 'daycare-cont-prog-bar';
    const progBar = document.createElement('div');
    progBarCont.appendChild(progBar);
    pkmnView.appendChild(progBarCont);
    frag.appendChild(pkmnView);
    //Egg Collection
    const eggList = document.createElement('div');
    eggList.id = 'daycare-cont-egg-list';
    eggList.classList.add('main-border');
    if (objLen(daycare.eggs) !== 0) {
        eggList.classList.remove('no-dc-eggs');
        for (const index in daycare.eggs) {
            const thisEgg = daycare.eggs[index];
            const eggView = document.createElement('div');
            eggView.addEventListener('click', () => {
                sendToParty(+index, 'daycare');
            });
            const img = document.createElement("img");
            img.src = `assets/eggs/${thisEgg.eggSprite}.png`;
            eggView.appendChild(img);
            eggList.appendChild(eggView);
        }
    }
    else {
        eggList.classList.add('no-dc-eggs');
        eggList.textContent = 'You have no eggs awaiting collection.';
    }
    frag.appendChild(eggList);
    daycareCont.appendChild(frag);
}
function checkBreeding(skipCheck = false) {
    const slot = findEmptySlot(player.daycareHandler.pokemon);
    if (!skipCheck && player.daycareHandler.breedState)
        return;
    if (slot === -1) {
        startBreeding();
        breedLoop = setInterval(() => {
            const daycare = player.daycareHandler;
            const radar = player.radarHandler;
            const comp = daycare.breedComp;
            if (findEmptySlot(daycare.pokemon) === -1 && daycare.domParent !== null && comp !== 0) {
                const eggProg = document.querySelector('#daycare-cont-prog-bar > div');
                if (!isHidden(eggProg)) {
                    eggProg.style.transition = 'width 0.5s ease-in-out';
                    eggProg.style.width = "100%";
                    setTimeout(() => {
                        eggProg.style.transition = 'width 0.25s ease-in-out';
                        eggProg.style.width = "0%";
                    }, 500);
                }
                const eggChance = [0, 20, 50, 50, 70];
                const parentID = daycare.pokemon[daycare.domParent].id;
                const eggCycle = findSpecies(pkmnData[parentID].species).hatch_counter;
                const chainBonus = radar.active && radar.lastHatch === parentID ? Math.min(radar.chain, 40) : 0;
                const karmaBonus = Math.min(daycare.eggKarma, 100);
                const tickRate = daycare.eggChance = Math.max((Math.max(Math.round(sumBaseStat(parentID)) - eggChance[comp] - chainBonus - eggCycle, 0) * eggCycle) - daycare.breedKarma, 0);
                //const tickRate = daycare.eggChance = Math.max((Math.max(257 - eggChance[comp] - chainBonus - karmaBonus, 0) * eggCycle) - daycare.breedKarma, 0);
                if (tickRate === 0 || randInt(tickRate) === 0) {
                    if (randRange(1, 100) <= eggChance[comp]) {
                        console.log('!!!EGG GENERATED!!!');
                        Notify('successMsg', `Your Pokémon generated an egg!`);
                        const eggsLen = Object.keys(daycare.eggs).length;
                        daycare.eggs = Object.assign({ [eggsLen]: createEgg(parentID) }, daycare.eggs);
                        daycare.breedKarma = 0;
                        daycare.eggKarma -= daycare.eggKarma > 0 ? 1 : 0;
                        navNotify(nameToNav('Daycare'));
                        renderDaycare();
                    }
                    else {
                        //Notify('errorMsg', `Egg failed to generate (Rate: ${tickRate}).`);
                        console.log('Egg check failed.');
                        daycare.eggKarma += 1;
                    }
                }
                else {
                    //Notify('warnMsg', `Check failed (${tickRate}). Egg karma is (${karmaBonus})`);
                    const toAdd = weightedRandom(1, (1 + comp + eggCycle + chainBonus + karmaBonus) * (randInt(eggCycle) === 0 ? 2 : 1));
                    if (player.settings.debugNotifs.state)
                        Notify('warnMsg', `Breed karma increased by ${toAdd}.`);
                    daycare.breedKarma += toAdd;
                }
                const eggProgDebug = document.getElementById('daycare-cont-prog-debug');
                if (!isHidden(eggProgDebug))
                    eggProgDebug.textContent = `Odds: ${fracToPerc(daycare.eggChance)}% (${daycare.eggChance})`;
            }
            else {
                //stopBreeding();
            }
        }, 1000);
    }
}
function startBreeding() {
    const daycare = player.daycareHandler;
    daycare.breedState = true;
    daycare.breedComp = breedingComp();
    daycare.domParent = domParent();
}
function stopBreeding() {
    const daycare = player.daycareHandler;
    daycare.breedState = false;
    daycare.breedComp = null;
    daycare.domParent = null;
    daycare.breedKarma = 0;
    daycare.eggKarma = 0;
    daycare.eggChance = null;
    clearInterval(breedLoop);
}
function breedingComp() {
    const daycare = player.daycareHandler;
    let compLevel = 0;
    const checkOT = ['Player', 'Player'];
    const pokeIDs = [];
    const evoChain = [];
    const genders = [];
    for (const index in daycare.pokemon) {
        const member = daycare.pokemon[index];
        const species = findSpecies(pkmnData[member.id].species);
        pokeIDs.push(member.id);
        evoChain.push(species.evolution_chain);
        genders.push(member.gender);
    }
    const sameOT = everyArr(checkOT) ? 0 : 1;
    if (everyArr(evoChain)) {
        if (genders.includes('genderless')) {
            compLevel = 0;
        }
        else if (!everyArr(genders)) {
            compLevel = 3;
        }
    }
    else if (!everyArr(evoChain)) {
        if (countArr(pokeIDs, 132) === 1) {
            compLevel = 1;
        }
    }
    if (compLevel !== 0) {
        return compLevel += sameOT;
    }
    else {
        return compLevel;
    }
}
function domParent() {
    const daycare = player.daycareHandler;
    const pokeIDs = [];
    const genders = [];
    for (const index in daycare.pokemon) {
        const member = daycare.pokemon[index];
        pokeIDs.push(member.id);
        genders.push(member.gender);
    }
    let pos;
    if (countArr(pokeIDs, 132) === 1) {
        pos = pokeIDs.indexOf(132) === 0 ? 1 : 0;
    }
    else {
        pos = genders.indexOf('female');
    }
    return pos !== -1 ? pos : null;
}
