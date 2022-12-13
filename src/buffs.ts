const buffContainer = document.getElementById('buff-cont')!;

//let player.buffHandler: BuffSystem = {
// 4: {
//     duration: Infinity,
//     time: Infinity,
//     active: false
// },
// 50: {
//     duration: 60,
//     time: 30,
//     active: false
// },
// 250: {
//     duration: 30,
//     time: 5,
//     active: false
// }
//}

function resumeBuffs() {
    for (const buff in player.buffHandler) {
        const thisBuff = player.buffHandler[buff];
        const nextTick = Math.max(0, (1000 - (thisBuff.buffPause - thisBuff.lastTick)));
        console.log(nextTick)
        castBuff(+buff, nextTick, true);
    }
}

function createBuff(buffID: number) {
    if (!player.buffHandler.hasOwnProperty(buffID) && itemData.hasOwnProperty(buffID)) {
        const getBuff = itemData[buffID];
        player.buffHandler = Object.assign({ [buffID]: { duration: getBuff.duration, time: getBuff.duration, increment: getBuff.countable, active: false, buffStart: Date.now(), lastTick: null, buffPause: null } }, player.buffHandler);
        castBuff(buffID);
    } else {
        console.log('Buff is already either active or doesn\'t exist.')
    }
}

function castBuff(buffID: number, delay: number = 0, resume: boolean = false) {
    const thisBuff = player.buffHandler[buffID];
    const buffItem = itemData[buffID];
    let buffLoop: any;

    //Create buff icon if it doesn't exist
    const frag = document.createDocumentFragment();
    //Buff icon container
    const buffDiv = document.createElement('div');
    buffDiv.classList.add('buff-icon');
    buffDiv.setAttribute('buff-src', `${buffID}`);
    buffDiv.setAttribute('tooltip-src', 'item-buff');
    buffDiv.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (buffItem.voidable) {
            cancelBuff(buffLoop, buffDiv, buffID);
            hideTooltip();
        }
    });
    //Duration overlay
    const durationDiv = document.createElement('div');
    durationDiv.classList.add('buff-duration');
    durationDiv.setAttribute('style', `height:${buffTimeVisual(thisBuff)}px;`);
    //Buff visual countdown
    const countDiv = document.createElement('div');
    countDiv.classList.add('buff-counter');
    countDiv.textContent = thisBuff.time !== Infinity ? buffTimeSimple(thisBuff) : '';
    countDiv.setAttribute('style', `${thisBuff.time < 60 ? 'color:#eeaf61' : ''}`);
    //Buff item icon
    const itemIcon = document.createElement('img');
    itemIcon.classList.add('buff-item');
    itemIcon.src = `assets/items/${buffItem.src}.png`;
    buffDiv.appendChild(durationDiv);
    buffDiv.appendChild(countDiv);
    buffDiv.appendChild(itemIcon);
    frag.appendChild(buffDiv);
    buffContainer.appendChild(frag);

    if (thisBuff.duration === Infinity) {
        //Poké Radar
        if (buffID === 408) {
            player.radarHandler.active = true;
            buffCounter(408, player.radarHandler.chain);
        }
        return;
    } else if (thisBuff.time !== 0) {
        setTimeout(() => {
            buffTick();
            startBuff();
        }, delay);

        function startBuff() {
            buffLoop = setInterval(() => {
                buffTick();
            }, 1000);
        }

        function buffTick() {
            const buffCont = document.querySelector(`[buff-src="${buffID}"]`)!;
            const buffTimer = buffCont.querySelector('.buff-duration')!;
            const buffCount = buffCont.querySelector('.buff-counter')!;
            buffCount.textContent = buffTimeSimple(thisBuff);
            buffCount.setAttribute('style', `${thisBuff.time < 60 ? 'color:#eeaf61' : ''}`);
            buffTimer.setAttribute('style', `height:${buffTimeVisual(thisBuff)}px;`);
            if (thisBuff.time < 6 && !buffCont.classList.contains('buff-timeout')) {
                buffCont.classList.add('buff-timeout');
            }
            console.log(thisBuff)
            //Deduct buff time
            thisBuff.time -= 1;
            thisBuff.lastTick = Date.now();
            if (thisBuff.time === -1) {
                cancelBuff(buffLoop, buffDiv, buffID);
            }
        }
    }
}

function cancelBuff(buffLoop: any, buffIcon: any, buffID: any) {
    delete player.buffHandler[buffID];
    buffIcon.remove();
    clearInterval(buffLoop);
}

function buffCounter(buffID: number, value: number) {
    const buff = document.querySelector(`[buff-src="${buffID}"]`)!;
    const counter = buff.querySelector('.buff-counter')!;
    counter.innerHTML = `${value}`;
}

function buffTimeSimple(buff: any) {
    return buff.time >= 60 ? Math.floor(buff.time / 60) : buff.time;
}

function buffTimeVisual(buff: any) {
    const remTime = Math.abs(Math.ceil((buff.time / buff.duration) * 100) - 100);
    return Math.ceil(remTime / 100 * 36);
}

// function checkBuffs() {
//     for (const buff in player.buffHandler) {
//         const thisBuff = player.buffHandler[buff];
//         const buffItem = itemData[buff];
//         //Create buff icon if it doesn't exist
//         if (!thisBuff.active) {
//             const frag = document.createDocumentFragment();
//             //Buff icon container
//             const buffDiv = document.createElement('div');
//             buffDiv.classList.add('buff-icon');
//             buffDiv.setAttribute('tooltip-src', 'item');
//             //Duration overlay
//             const durationDiv = document.createElement('div');
//             durationDiv.classList.add('buff-duration');
//             durationDiv.setAttribute('buff-src', buffItem.src);
//             //Buff visual countdown
//             const countDiv = document.createElement('div');
//             countDiv.classList.add('buff-counter');
//             countDiv.textContent = thisBuff.time !== Infinity ? buffTimeSimple(thisBuff) : '';
//             //Buff item icon
//             const itemIcon = document.createElement('img');
//             itemIcon.classList.add('buff-item');
//             itemIcon.src = `assets/items/${buffItem.src}.png`;
//             buffDiv.appendChild(durationDiv);
//             buffDiv.appendChild(countDiv);
//             buffDiv.appendChild(itemIcon);
//             frag.appendChild(buffDiv);
//             buffContainer.appendChild(frag);
//             thisBuff.active = true;
//         }
//         //Checking if buff has ended
//         const buffTimer = document.querySelector(`[buff-src="${buffItem.src}"]`)!;
//         const buffCont = buffTimer.parentElement!;
//         const buffCount = buffCont.querySelector('.buff-counter')!;
//         if (thisBuff.duration === Infinity) {
//             //Do nothing
//         } else if (thisBuff.time !== 0) {
//             buffCount.textContent = buffTimeSimple(thisBuff);
//             const remTime = Math.abs(Math.ceil((thisBuff.time / thisBuff.duration) * 100) - 100);
//             const calcTime = Math.ceil(remTime / 100 * 36);
//             buffTimer.setAttribute('style', `height:${calcTime}px;`);
//             if (thisBuff.time < 6 && !buffCont.classList.contains('buff-timeout')) {
//                 buffCont.classList.add('buff-timeout');
//             }
//             console.log(thisBuff)
//             //Deduct buff time
//             thisBuff.time -= 1;
//         } else {
//             delete player.buffHandler[buff];
//             buffCont.remove();
//         }
//     }
// }