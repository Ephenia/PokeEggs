"use strict";function clearParty(){pauseEggTimer(!0);for(const e in player.party)player.party[e]=emptyMember();renderParty(!0)}function clearItemBag(){player.items={},renderItemBag(player.prefs.bag),renderMain(player.prefs.nav)}function randomitem(){const e=Object.entries(itemData),r=randInt(e.length);gainItem(+e[r][0],1)}function randomBuff(){const e=Object.keys(itemData),r=+e[randInt(e.length)];createBuff(r)}function addEgg(e){let r=!1;if(r=Object.entries(player.party).find((([e,r])=>{if(null===r.isEgg)return[e,r]})),console.log(r),r){const t=r[0];player.party[t]=createEgg(e,!1),renderParty(!1,t),progressEgg(t)}}