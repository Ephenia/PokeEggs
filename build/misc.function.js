"use strict";
const pkmnMenu = document.getElementById('pkmn-menu');
const dataImg = {
    'eggIcon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATdJREFUWEftVaEOwjAQfTh+oxIkEoncL0wOBxKHBYdkjslJ7CQSHBLkLH8AbuS23VKWkdyRLQtJK5b2erv37t21HaDnMegZH46AU8Ap8PcKZNY98lMyP/0EIAe+3RYV/ngc8lwVU+VcImTrgwczAfxR8HGRRmGC5Soimziu2LEOTus6AbJpSagJHK5ezqUJnOxpekJZDlFskRNnv98FCBYFgfqI77n0mA4NTslLXAoVgefz+PXxZALpFfCnRqxCawSI2SYuVOiMAB07Y2bgbO0+oNrbQ9oHKgWoB2beEOdXWtWbJvG5WHP2XfUAxc/sy6cOziS284SmouRETpa0GavANjt7sj0uQBR1RyBXgT62EkyizFycvcqx4fzZDxFvaxWV1enr4W9hQ824BcyPEI6AU8Ap0LsCbw3FYyE2M9K7AAAAAElFTkSuQmCC'
};
//Possible to have en egg design
const eggDesign = ["abra", "absol", "aerodactyl", "aipom", "alomomola", "amaura", "anorith", "applin", "archen", "aron", "arrokuda", "audino", "axew", "azurill", "bagon", "baltoy", "barboach", "basculin", "beldum", "bellsprout", "bergmite", "bidoof", "binacle", "blipbug", "blitzle", "bonsly", "bouffalant", "bounsweet", "bronzor", "bruxish", "budew", "buizel", "bulbasaur", "buneary", "bunnelby", "burmy", "cacnea", "carbink", "carnivine", "carvanha", "castform", "caterpie", "chansey", "charjabug", "charmander", "chatot", "cherubi", "chespin", "chewtle", "chikorita", "chimchar", "chimecho", "chinchou", "chingling", "clamperl", "clauncher", "cleffa", "clobbopus", "combee", "comfey", "corpish", "corsola", "corsola_1", "cottonee", "crabrawler", "cramorant", "cranidos", "croagunk", "cryogonal", "cubchoo", "cubone", "cufant", "cutiefly", "cyndaquil", "darumaka", "dedenne", "deerling", "deino", "delibird", "dewpider", "dhelmise", "diglett", "diglett_1", "doduo", "drampa", "dratini", "dreepy", "drifloon", "drilbur", "drowzee", "druddigon", "ducklett", "dunsparce", "durant", "duskull", "dwebble", "eevee", "eiscue", "ekans", "electrike", "elekid", "elgyem", "emolga", "espurr", "exeggcute", "falinks", "farfetchd", "feebas", "fennekin", "ferroseed", "finneon", "flabebe", "fletchling", "fomantis", "foongus", "frillish", "froakie", "furfrou", "gastly", "geodude", "geodude_1", "gible", "girafarig", "glameow", "gligar", "goldeen", "golett", "goomy", "gossifleur", "gothita", "grimer", "grimer_1", "grookey", "growlithe", "grubbin", "gulpin", "happiny", "hatenna", "hawlucha", "heatmor", "helioptile", "heracross", "hippopotas", "honedge", "hoothoot", "hoppip", "horsea", "houndour", "igglybuff", "illumise", "impidimp", "indeedee", "inkay", "jangmoo", "joltik", "kabuto", "kangaskhan", "karrablast", "kecleon", "klefki", "klink", "koffing", "krabby", "kricketot", "lapras", "larvesta", "larvitar", "ledyba", "lickitung", "lileep", "lillipup", "litleo", "litten", "litwick", "lotad", "lunatone", "luvdisc", "machop", "magby", "magikarp", "magnemite", "makuhita", "manaphy", "manaphy_icon", "mankey", "mantyke", "maractus", "mareanie", "mareep", "marill", "mawile", "meditite", "meowth", "meowth_1", "meowth_2", "mienfoo", "milcery", "miltank", "mimejr", "mimikyu", "minccino", "minior", "minun", "misdreavus", "morelull", "morpeko", "mudbray", "mudkip", "munchlax", "munna", "murkrow", "natu", "nickit", "nidoranfe", "nidoranme", "nincada", "noibat", "nosepass", "numel;", "oddish", "omanyte", "onix", "oranguru", "oricorio", "oricorio_1", "oricorio_2", "oricorio_3", "oshawott", "output.txt", "pachirisu", "pancham", "panpour", "pansage", "pansear", "paras", "passimian", "patrat", "pawniard", "petilil", "phanpy", "phantump", "pichu", "pidgey", "pidove", "pikipek", "pincurchin", "pineco", "pinsir", "piplup", "plusle", "poliwag", "ponyta", "ponyta_1", "poochyena", "popplio", "porygon", "psyduck", "pumpkaboo", "purrloin", "pyukumuku", "qwilfish", "raltss", "rattata", "rattata_1", "relicanth", "remoraid", "rhyhorn", "riolu", "rockruff", "roggenrola", "rolycoly", "rookidee", "roselia", "rotom", "rowlet", "rufflet", "sableye", "salandit", "sandile", "sandshrew", "sandshrew_1", "sandygast", "sawk", "scatterby", "scorbunny", "scraggy", "scyther", "seedot", "seel", "sentret", "seviper", "sewaddle", "shellder", "shellos", "shelmet", "shieldon", "shinx", "shroomish", "shuckle", "shuppet", "sigilyph", "silicobra", "sinistea", "sizzipede", "skarmory", "skiddo", "skitty", "skorupi", "skrelp", "skwovet", "slakoth", "slowpoke", "slowpoke_1", "slugma", "smeargle", "smoochum", "sneasel", "snivy", "snom", "snorlax", "snorunt", "snover", "snubbul", "sobble", "solosis", "solrock", "sorupi", "spearow", "spheal", "spinarak", "spinda", "spiritomb", "spoink", "spritzee", "squirtle", "stantler", "starly", "staryu", "stonjourner", "stufful", "stunfisk", "stunfisk_1", "stunky", "sudowoodo", "sunkern", "surskit", "swablu", "swinub", "swirlix", "taillow", "tangela", "tauros", "teddiursa", "tentacool", "tepig", "throh", "timburr", "tirtouga", "togedemaru", "togepi", "torchic", "torkoal", "totodile", "toxel", "trapinch", "treecko", "tropius", "trubbish", "turtonator", "turtwig", "tympole", "tynamo", "tyrogue", "tyrunt", "vanillite", "venipede", "venonat", "volbeat", "voltorb", "vullaby", "vulpix", "vulpix_1", "wailmer", "weedle", "whismur", "wimpod", "wingull", "wishiwashi", "woobat", "wooloo", "wooper", "wurmple", "wynaut", "yamask", "yamask_1", "yamper", "yanma", "yungoos", "zangoose", "zigzagoon", "zigzagoon_1", "zorua", "zubat"];
//Pokemon Handler functions
function sendToLead(index, type) {
    const getLead = player.leadPoke;
    let member;
    if (type === 'party') {
        member = player.party[index];
        player.party[index] = player.leadPoke;
        renderParty(false, index);
    }
    else if (type === 'box') {
        member = player.pokemonBox[index];
        player.pokemonBox[index] = player.leadPoke;
        sortBox();
        renderPokeBox();
    }
    player.leadPoke = member;
    renderLead();
}
function sendToBox(index, type) {
    const storageLen = Object.keys(player.pokemonBox).length;
    let member;
    if (type === 'party') {
        member = player.party[index];
        player.party[index] = emptyMember();
        renderParty(false, index);
    }
    else if (type === 'daycare') {
        member = player.daycareHandler.pokemon[index];
        player.daycareHandler.pokemon[index] = emptyMember();
        renderDaycare();
    }
    if (member.isEgg) {
        player.eggHandler[index] = null;
        pauseEggTimer(false, index);
    }
    player.pokemonBox = Object.assign({ [storageLen]: member }, player.pokemonBox);
}
function sendToParty(index, type) {
    const slot = findEmptySlot(player.party);
    if (slot !== -1) {
        let member;
        if (type === 'box') {
            member = player.pokemonBox[index];
            delete player.pokemonBox[index];
            sortBox();
            renderPokeBox();
        }
        else if (type === 'daycare') {
            member = player.daycareHandler.eggs[index];
            delete player.daycareHandler.eggs[index];
            renderDaycare();
        }
        player.party[slot] = member;
        if (member.isEgg)
            progressEgg(slot);
    }
}
function sendToDaycare(index, type) {
    const slot = findEmptySlot(player.daycareHandler.pokemon);
    let member;
    if (slot === -1) {
        Notify('errorMsg', 'Daycare is full.');
        return true;
    }
    if (type === 'party') {
        member = player.party[index];
        player.party[index] = emptyMember();
        renderParty(false, index);
    }
    else if (type === 'box') {
        member = player.pokemonBox[index];
        delete player.pokemonBox[index];
        sortBox();
        renderPokeBox();
    }
    player.daycareHandler.pokemon[slot] = member;
    checkBreeding();
}
//For Salvaging Pokemon
function salvagePoke(index, type) {
    let member;
    if (type === 'party') {
        member = player.party[index];
        calcGems(pkmnData[member.id]);
        player.party[index] = emptyMember();
        renderParty(false, index);
    }
    else if (type === 'box') {
        member = player.pokemonBox[index];
        calcGems(pkmnData[member.id]);
        delete player.pokemonBox[index];
        sortBox();
        renderPokeBox();
    }
    function calcGems(pkmn) {
        for (const type of pkmn.types) {
            if (type !== 'None') {
                const gemID = +Object.entries(itemData).filter(([key, value]) => value.name === `${type} Gem`)[0][0];
                gainItem(gemID, 1);
                console.log(type);
            }
        }
    }
}
//Right click menu for Pokemon
document.querySelectorAll('[pkmn-menu]').forEach(item => {
    item.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const elem = e.target;
        const menuType = elem.getAttribute('pkmn-menu');
        const index = +elem.getAttribute('data-src');
        if (menuType === null || index === null)
            return;
        if (menuType === 'party') {
            if (player.party[index].isEgg !== null) {
                displayMenu();
                buildPartyMenu(+index);
            }
        }
        else if (menuType === 'box') {
            displayMenu();
            buildBoxMenu(+index);
        }
        function displayMenu() {
            pkmnMenu.style.top = `${e.pageY}px`;
            pkmnMenu.style.left = `${e.pageX}px`;
            pkmnMenu.style.display = 'flex';
        }
    });
});
function buildPartyMenu(index) {
    disposeElement(pkmnMenu);
    const member = player.party[index];
    const menuItems = ['Lead', 'Box', 'Salvage', 'Daycare'];
    for (const opt in menuItems) {
        const menuOpt = document.createElement('button');
        menuOpt.classList.add('menu-item');
        menuOpt.innerHTML = menuItems[opt];
        if (member.isEgg) {
            if (opt === '0' || opt === '2' || opt === '3') {
                menuOpt.disabled = true;
            }
        }
        else if (member.starter) {
            if (opt === '2')
                menuOpt.disabled = true;
        }
        menuOpt.addEventListener('click', (e) => {
            if (opt === '0') {
                sendToLead(index, 'party');
            }
            else if (opt === '1') {
                sendToBox(index, 'party');
            }
            else if (opt === '2') {
                salvagePoke(index, 'party');
            }
            else if (opt === '3') {
                sendToDaycare(index, 'party');
            }
        });
        pkmnMenu.appendChild(menuOpt);
    }
}
function buildBoxMenu(index) {
    if (!isHidden(pkmnMenu))
        hideElement(mainTooltip);
    disposeElement(pkmnMenu);
    const member = player.pokemonBox[index];
    const menuItems = ['Lead', 'Party', 'Salvage', 'Daycare'];
    for (const opt in menuItems) {
        const menuOpt = document.createElement('button');
        menuOpt.classList.add('menu-item');
        menuOpt.innerHTML = menuItems[opt];
        if (member.isEgg) {
            if (opt === '0' || findEmptySlot(player.party) === -1 && opt === '1' || opt === '2' || opt === '3') {
                menuOpt.disabled = true;
            }
        }
        else if (member.starter) {
            if (opt === '2')
                menuOpt.disabled = true;
        }
        menuOpt.addEventListener('click', (e) => {
            if (opt === '0') {
                sendToLead(index, 'box');
            }
            else if (opt === '1') {
                sendToParty(index, 'box');
            }
            else if (opt === '2') {
                salvagePoke(index, 'box');
            }
            else if (opt === '3') {
                sendToDaycare(index, 'box');
            }
        });
        pkmnMenu.appendChild(menuOpt);
    }
}
function trimImage(htmlID) {
    // Get a reference to the canvas element
    const canvas = document.getElementById('canvas');
    // Get a reference to the image element
    const image = document.getElementById(htmlID);
    // Set the canvas dimensions to the same as the image
    canvas.width = 32;
    canvas.height = 32;
    // Get a reference to the canvas context
    const ctx = canvas.getContext('2d');
    // Draw the image to the canvas
    ctx.drawImage(image, -18, -30);
    // Trim the image by specifying the source and destination coordinates
    //ctx.drawImage(image, 10, 10, 32, 32, 10, 10, 32, 32);
    const trimmedImageUrl = canvas.toDataURL();
    console.log(trimmedImageUrl);
}
