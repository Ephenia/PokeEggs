"use strict";
const mainTooltip = document.getElementById('tooltip');
const tooltipCont = document.getElementById('tooltip-cont');
window.addEventListener('mousemove', (e) => {
    if (!isHidden(pkmnMenu))
        return;
    const element = e.target;
    const tooltipType = element.getAttribute('tooltip-src');
    if (tooltipType) {
        mainTooltip.style.display = 'flex';
        mainTooltip.style.left = `${e.pageX}px`;
        mainTooltip.style.top = `${e.pageY + 16}px`;
        disposeElement(tooltipCont);
        remClasses(tooltipCont);
        tooltipStyle(element, tooltipType);
    }
    else {
        if (!player.settings.stickyTooltip.state)
            mainTooltip.style.display = 'none';
    }
});
function tooltipStyle(element, type) {
    const frag = document.createDocumentFragment();
    //For Buff Icons
    if (type === 'item-buff') {
        tooltipCont.classList.add('tooltip-item-buff');
        const buffSrc = element.getAttribute('buff-src');
        const buffData = itemData[+buffSrc];
        //Buff Header
        const buffHead = document.createElement('div');
        buffHead.classList.add('tooltip-item-buff-head');
        //Buff item icon
        const buffIcon = document.createElement('div');
        buffIcon.classList.add('tooltip-item-buff-icon');
        const buffImg = document.createElement('img');
        buffImg.setAttribute('src', `assets/items/${buffData.src}.png`);
        buffIcon.appendChild(buffImg);
        buffHead.appendChild(buffIcon);
        //Buff name
        const buffName = document.createElement('div');
        buffName.classList.add('tooltip-header', 'tooltip-item-buff-name', 'tooltip-section');
        buffName.innerHTML = `${buffData.name}`;
        buffHead.appendChild(buffName);
        frag.appendChild(buffHead);
        //Buff desc
        const buffDesc = document.createElement('div');
        buffDesc.classList.add('tooltip-item-buff-desc', 'tooltip-section');
        buffDesc.innerHTML = `${buffData.buffdesc}`;
        frag.appendChild(buffDesc);
        //For Party Pokemon
    }
    else if (type === 'party-pkmn') {
        pkmnTooltip(element, 'party');
    }
    else if (type === 'box-pkmn') {
        pkmnTooltip(element, 'box');
    }
    function pkmnTooltip(element, type) {
        tooltipCont.classList.add('tooltip-party-pkmn');
        const slotSrc = element.getAttribute('data-src');
        const member = type === 'party' ? player.party[+slotSrc] : player.pokemonBox[+slotSrc];
        const pokeData = pkmnData[member.id];
        //Pkmn Image
        const pkmnImg = document.createElement("div");
        pkmnImg.classList.add('tooltip-party-pkmn-icon');
        const img = document.createElement("img");
        let sprite;
        if (member.isEgg) {
            sprite = 'assets/pkmnicon/egg.png';
        }
        else {
            sprite = `assets/pkmnicon/${member.isShiny ? 'shiny' : 'normal'}/${member.FOV === 'forme' ? member.forme : member.variant}.png`;
        }
        img.src = sprite;
        pkmnImg.appendChild(img);
        frag.appendChild(pkmnImg);
        //Egg Message
        if (member.isEgg) {
            const msgDiv = document.createElement("div");
            msgDiv.classList.add('tooltip-party-pkmn-eggmsg');
            msgDiv.textContent = `${eggMessage(member.progress, member.ehp)}`;
            frag.appendChild(msgDiv);
        }
        //Level
        const levelDiv = document.createElement("div");
        levelDiv.textContent = member.isEgg ? '' : `Level: ${member.level}`;
        frag.appendChild(levelDiv);
        //Experience
        if (!member.isEgg) {
            const lastLevel = member.exp - getLevelEXP(member.id, member.level);
            const toLevel = nextLevelEXP(member.id, member.level);
            const progBar = document.createElement("progress");
            progBar.value = lastLevel;
            progBar.max = toLevel;
            frag.appendChild(progBar);
            const expDiv = document.createElement("div");
            expDiv.classList.add('tooltip-party-pkmn-exp');
            expDiv.textContent = `${member.level !== 100 ? `${lastLevel.toLocaleString()} / ${toLevel.toLocaleString()}` : member.exp.toLocaleString()}`;
            frag.appendChild(expDiv);
        }
        //Gender
        if (!member.isEgg && member.gender !== 'genderless') {
            const genderIcon = document.createElement("img");
            genderIcon.classList.add('tooltip-party-pkmn-gender');
            genderIcon.src = `assets/gender/${member.gender}.png`;
            frag.appendChild(genderIcon);
        }
        //Ability
        const abilityDiv = document.createElement("div");
        abilityDiv.textContent = member.isEgg ? '' : `Ability: ${abilityData[member.ability].names}`;
        frag.appendChild(abilityDiv);
        //Nature
        const natureDiv = document.createElement("div");
        natureDiv.textContent = member.isEgg ? '' : `Nature: ${member.nature}`;
        frag.appendChild(natureDiv);
        //Stats
        if (!member.isEgg) {
            const statDiv = document.createElement("div");
            statDiv.classList.add('tooltip-party-pkmn-stats', 'main-border');
            const statNames = ['HP', 'ATK', 'DEF', 'S.ATK', 'S.DEF', 'SPE'];
            const natureMod = calcNature(member.nature);
            for (let i = 0; i < 6; i++) {
                const statCol = document.createElement("div");
                if (natureMod[i] === 1.1) {
                    statCol.style.backgroundColor = 'rgb(173 255 47 / 15%)';
                }
                else if (natureMod[i] === 0.9) {
                    statCol.style.backgroundColor = 'rgb(238 75 43 / 15%)';
                }
                const statName = document.createElement("div");
                statName.classList.add('tooltip-party-pkmn-info');
                statName.textContent = `${statNames[i]}`;
                statCol.appendChild(statName);
                const IV = member.IVs[i];
                const IView = document.createElement("div");
                IView.style.color = member.isEgg ? '' : `${colorRange(IV)}`;
                IView.textContent = member.isEgg ? '' : IV;
                statCol.appendChild(IView);
                const statVal = document.createElement("div");
                statVal.textContent = `${pokeData.stats[i]}`;
                statCol.appendChild(statVal);
                statDiv.appendChild(statCol);
            }
            frag.appendChild(statDiv);
        }
    }
    const tooltipBottom = document.createElement('div');
    tooltipBottom.classList.add('tooltip-bottom');
    frag.appendChild(tooltipBottom);
    tooltipCont.appendChild(frag);
}
function hideTooltip() {
    mainTooltip.style.display = 'none';
}
