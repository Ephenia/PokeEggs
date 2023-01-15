"use strict";const mainTooltip=document.getElementById("tooltip"),tooltipCont=document.getElementById("tooltip-cont");function tooltipStyle(t,e){const o=document.createDocumentFragment();if("item-buff"===e){tooltipCont.classList.add("tooltip-item-buff");const e=t.getAttribute("buff-src"),i=itemData[+e],n=document.createElement("div");n.classList.add("tooltip-item-buff-head");const l=document.createElement("div");l.classList.add("tooltip-item-buff-icon");const d=document.createElement("img");d.setAttribute("src",`assets/items/${i.src}.png`),l.appendChild(d),n.appendChild(l);const s=document.createElement("div");s.classList.add("tooltip-header","tooltip-item-buff-name","tooltip-section"),s.innerHTML=`${i.name}`,n.appendChild(s),o.appendChild(n);const p=document.createElement("div");p.classList.add("tooltip-item-buff-desc","tooltip-section"),p.innerHTML=`${i.buffdesc}`,o.appendChild(p)}const i=document.createElement("div");i.classList.add("tooltip-bottom"),o.appendChild(i),tooltipCont.appendChild(o)}function hideTooltip(){mainTooltip.style.display="none"}window.addEventListener("mousemove",(t=>{const e=t.target,o=e.getAttribute("tooltip-src");o?(mainTooltip.style.display="flex",mainTooltip.style.left=`${t.pageX}px`,mainTooltip.style.top=`${t.pageY+16}px`,disposeElement(tooltipCont),tooltipStyle(e,o)):mainTooltip.style.display="none"}));