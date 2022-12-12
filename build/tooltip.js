"use strict";
const mainTooltip = document.getElementById('tooltip');
const tooltipCont = document.getElementById('tooltip-cont');
window.addEventListener('mousemove', (event) => {
    const element = event.target;
    const tooltipType = element.getAttribute('tooltip-src');
    if (tooltipType) {
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        //console.log(mouseX)
        //console.log(mouseY)
        mainTooltip.style.display = 'flex';
        mainTooltip.style.left = `${mouseX}px`;
        mainTooltip.style.top = `${mouseY + 16}px`;
        clearTooltip();
        tooltipStyle(element, tooltipType);
    }
    else {
        mainTooltip.style.display = 'none';
    }
});
function tooltipStyle(element, type) {
    const frag = document.createDocumentFragment();
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
    }
    const tooltipBottom = document.createElement('div');
    tooltipBottom.classList.add('tooltip-bottom');
    frag.appendChild(tooltipBottom);
    tooltipCont.appendChild(frag);
}
function clearTooltip() {
    tooltipCont.innerHTML = '';
}
function hideTooltip() {
    mainTooltip.style.display = 'none';
}
