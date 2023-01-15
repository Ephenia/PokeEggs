"use strict";const modalData={starterselect(){pickStarter()},settings(){createSettings()},changelog(){createChangelog()},modaltest(){console.log("opening")},debugtools(){createDebugTools()}};function pickStarter(){const t={0:[1,4,7],1:[152,155,158],2:[252,255,258],3:[387,390,393],4:[495,498,501],5:[650,653,656],6:[722,725,728],7:[810,813,816]};for(const e in t){const a=player.flags.highestRegion>=e,n=t[e],o=new DocumentFragment,d=document.createElement("div");for(const t of n){const e=document.createElement("label");e.setAttribute("for",`starter-${t}`),a?e.addEventListener("click",(()=>{Array.from(document.querySelectorAll("label")).forEach((t=>t.classList.remove("modal-select-starter-active"))),e.classList.add("modal-select-starter-active"),document.getElementById("btn-select-starter").removeAttribute("disabled")})):e.classList.add("modal-select-starter-disabled");const n=document.createElement("img");n.src=`assets/pkmn/normal/${pkmnData[t].name}.png`,e.appendChild(n);const o=document.createElement("input");o.id=`starter-${t}`,o.type="radio",o.name="starter",o.value=t,e.appendChild(o),d.appendChild(e)}o.appendChild(d),modalContent.appendChild(o)}const e=document.createElement("button");e.id="btn-select-starter",e.textContent="Select",e.disabled=!0,e.addEventListener("click",(()=>{const t=document.querySelector('input[name="starter"]:checked').getAttribute("value");addEgg(+t),closeModal(),player.flags.kantoStarter=!0})),modalContent.appendChild(e),modalContent.classList.add("modal-select-starter"),modalPersist=!0}function createSettings(){}function createChangelog(){fetch("./changelog.txt").then((t=>t.text())).then((t=>{modalContent.innerHTML=`${t}`})),modalContent.classList.add("modal-changelog")}function createDebugTools(){new DocumentFragment;const t={0:["Cast a random Item Buff.","Cast Buff","randomBuff()"],1:["Add an egg to the party.","Add Egg","addEgg(1)"],2:["Clears the party.","Clear Party","clearParty()"],3:["Add a random item to the Item Bag.","Add Item","randomitem()"],4:["Clears the Item Bag.","Clear Item Bag","clearItemBag()"]};for(const e in t){const a=t[e],n=document.createElement("div"),o=document.createElement("div");o.textContent=a[0],n.appendChild(o);const d=document.createElement("button");d.textContent=a[1],d.setAttribute("onclick",a[2]),n.appendChild(d),modalContent.appendChild(n)}modalContent.classList.add("modal-debug-tools")}