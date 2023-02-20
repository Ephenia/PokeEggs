"use strict";
let evoChainData = {
    "1": {
        is_baby: false,
        name: "bulbasaur",
        evolves_to: {
            "0": {
                name: "ivysaur",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "venusaur",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "2": {
        is_baby: false,
        name: "charmander",
        evolves_to: {
            "0": {
                name: "charmeleon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "charizard",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "3": {
        is_baby: false,
        name: "squirtle",
        evolves_to: {
            "0": {
                name: "wartortle",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "blastoise",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "4": {
        is_baby: false,
        name: "caterpie",
        evolves_to: {
            "0": {
                name: "metapod",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "butterfree",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "5": {
        is_baby: false,
        name: "weedle",
        evolves_to: {
            "0": {
                name: "kakuna",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "beedrill",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "6": {
        is_baby: false,
        name: "pidgey",
        evolves_to: {
            "0": {
                name: "pidgeotto",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "pidgeot",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "7": {
        is_baby: false,
        name: "rattata",
        evolves_to: {
            "0": {
                name: "raticate",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "8": {
        is_baby: false,
        name: "spearow",
        evolves_to: {
            "0": {
                name: "fearow",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "9": {
        is_baby: false,
        name: "ekans",
        evolves_to: {
            "0": {
                name: "arbok",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "10": {
        is_baby: true,
        name: "pichu",
        evolves_to: {
            "0": {
                name: "pikachu",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "raichu",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "11": {
        is_baby: false,
        name: "sandshrew",
        evolves_to: {
            "0": {
                name: "sandslash",
                is_baby: false,
                evolution_triggers: [1, 3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "12": {
        is_baby: false,
        name: "nidoran-f",
        evolves_to: {
            "0": {
                name: "nidorina",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "nidoqueen",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "13": {
        is_baby: false,
        name: "nidoran-m",
        evolves_to: {
            "0": {
                name: "nidorino",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "nidoking",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "14": {
        is_baby: true,
        name: "cleffa",
        evolves_to: {
            "0": {
                name: "clefairy",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "clefable",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "15": {
        is_baby: false,
        name: "vulpix",
        evolves_to: {
            "0": {
                name: "ninetales",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "16": {
        is_baby: true,
        name: "igglybuff",
        evolves_to: {
            "0": {
                name: "jigglypuff",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "wigglytuff",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "17": {
        is_baby: false,
        name: "zubat",
        evolves_to: {
            "0": {
                name: "golbat",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "crobat",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "18": {
        is_baby: false,
        name: "oddish",
        evolves_to: {
            "0": {
                name: "gloom",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "vileplume",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                    "1": {
                        name: "bellossom",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "19": {
        is_baby: false,
        name: "paras",
        evolves_to: {
            "0": {
                name: "parasect",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "20": {
        is_baby: false,
        name: "venonat",
        evolves_to: {
            "0": {
                name: "venomoth",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "21": {
        is_baby: false,
        name: "diglett",
        evolves_to: {
            "0": {
                name: "dugtrio",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "22": {
        is_baby: false,
        name: "meowth",
        evolves_to: {
            "0": {
                name: "persian",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "1": {
                name: "perrserker",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "23": {
        is_baby: false,
        name: "psyduck",
        evolves_to: {
            "0": {
                name: "golduck",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "24": {
        is_baby: false,
        name: "mankey",
        evolves_to: {
            "0": {
                name: "primeape",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "annihilape",
                        is_baby: false,
                        evolution_triggers: [10],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "25": {
        is_baby: false,
        name: "growlithe",
        evolves_to: {
            "0": {
                name: "arcanine",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "26": {
        is_baby: false,
        name: "poliwag",
        evolves_to: {
            "0": {
                name: "poliwhirl",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "poliwrath",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                    "1": {
                        name: "politoed",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "27": {
        is_baby: false,
        name: "abra",
        evolves_to: {
            "0": {
                name: "kadabra",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "alakazam",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "28": {
        is_baby: false,
        name: "machop",
        evolves_to: {
            "0": {
                name: "machoke",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "machamp",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "29": {
        is_baby: false,
        name: "bellsprout",
        evolves_to: {
            "0": {
                name: "weepinbell",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "victreebel",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "30": {
        is_baby: false,
        name: "tentacool",
        evolves_to: {
            "0": {
                name: "tentacruel",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "31": {
        is_baby: false,
        name: "geodude",
        evolves_to: {
            "0": {
                name: "graveler",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "golem",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "32": {
        is_baby: false,
        name: "ponyta",
        evolves_to: {
            "0": {
                name: "rapidash",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "33": {
        is_baby: false,
        name: "slowpoke",
        evolves_to: {
            "0": {
                name: "slowbro",
                is_baby: false,
                evolution_triggers: [1, 3],
                evolves_to: {},
            },
            "1": {
                name: "slowking",
                is_baby: false,
                evolution_triggers: [2, 3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "34": {
        is_baby: false,
        name: "magnemite",
        evolves_to: {
            "0": {
                name: "magneton",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "magnezone",
                        is_baby: false,
                        evolution_triggers: [1, 3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "35": {
        is_baby: false,
        name: "farfetchd",
        evolves_to: {
            "0": {
                name: "sirfetchd",
                is_baby: false,
                evolution_triggers: [8],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "36": {
        is_baby: false,
        name: "doduo",
        evolves_to: {
            "0": {
                name: "dodrio",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "37": {
        is_baby: false,
        name: "seel",
        evolves_to: {
            "0": {
                name: "dewgong",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "38": {
        is_baby: false,
        name: "grimer",
        evolves_to: {
            "0": {
                name: "muk",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "39": {
        is_baby: false,
        name: "shellder",
        evolves_to: {
            "0": {
                name: "cloyster",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "40": {
        is_baby: false,
        name: "gastly",
        evolves_to: {
            "0": {
                name: "haunter",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "gengar",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "41": {
        is_baby: false,
        name: "onix",
        evolves_to: {
            "0": {
                name: "steelix",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "42": {
        is_baby: false,
        name: "drowzee",
        evolves_to: {
            "0": {
                name: "hypno",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "43": {
        is_baby: false,
        name: "krabby",
        evolves_to: {
            "0": {
                name: "kingler",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "44": {
        is_baby: false,
        name: "voltorb",
        evolves_to: {
            "0": {
                name: "electrode",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "45": {
        is_baby: false,
        name: "exeggcute",
        evolves_to: {
            "0": {
                name: "exeggutor",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "46": {
        is_baby: false,
        name: "cubone",
        evolves_to: {
            "0": {
                name: "marowak",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "47": {
        is_baby: true,
        name: "tyrogue",
        evolves_to: {
            "0": {
                name: "hitmonlee",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "1": {
                name: "hitmonchan",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "2": {
                name: "hitmontop",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "48": {
        is_baby: false,
        name: "lickitung",
        evolves_to: {
            "0": {
                name: "lickilicky",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "49": {
        is_baby: false,
        name: "koffing",
        evolves_to: {
            "0": {
                name: "weezing",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "50": {
        is_baby: false,
        name: "rhyhorn",
        evolves_to: {
            "0": {
                name: "rhydon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "rhyperior",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "51": {
        is_baby: true,
        name: "happiny",
        evolves_to: {
            "0": {
                name: "chansey",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "blissey",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: "luck-incense",
    },
    "52": {
        is_baby: false,
        name: "tangela",
        evolves_to: {
            "0": {
                name: "tangrowth",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "53": {
        is_baby: false,
        name: "kangaskhan",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "54": {
        is_baby: false,
        name: "horsea",
        evolves_to: {
            "0": {
                name: "seadra",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "kingdra",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "55": {
        is_baby: false,
        name: "goldeen",
        evolves_to: {
            "0": {
                name: "seaking",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "56": {
        is_baby: false,
        name: "staryu",
        evolves_to: {
            "0": {
                name: "starmie",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "57": {
        is_baby: true,
        name: "mime-jr",
        evolves_to: {
            "0": {
                name: "mr-mime",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "mr-rime",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: "odd-incense",
    },
    "58": {
        is_baby: false,
        name: "scyther",
        evolves_to: {
            "0": {
                name: "scizor",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {},
            },
            "1": {
                name: "kleavor",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "59": {
        is_baby: true,
        name: "smoochum",
        evolves_to: {
            "0": {
                name: "jynx",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "60": {
        is_baby: true,
        name: "elekid",
        evolves_to: {
            "0": {
                name: "electabuzz",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "electivire",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "61": {
        is_baby: true,
        name: "magby",
        evolves_to: {
            "0": {
                name: "magmar",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "magmortar",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "62": {
        is_baby: false,
        name: "pinsir",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "63": {
        is_baby: false,
        name: "tauros",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "64": {
        is_baby: false,
        name: "magikarp",
        evolves_to: {
            "0": {
                name: "gyarados",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "65": {
        is_baby: false,
        name: "lapras",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "66": {
        is_baby: false,
        name: "ditto",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "67": {
        is_baby: false,
        name: "eevee",
        evolves_to: {
            "0": {
                name: "vaporeon",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
            "1": {
                name: "jolteon",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
            "2": {
                name: "flareon",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
            "3": {
                name: "espeon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "4": {
                name: "umbreon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "5": {
                name: "leafeon",
                is_baby: false,
                evolution_triggers: [1, 3],
                evolves_to: {},
            },
            "6": {
                name: "glaceon",
                is_baby: false,
                evolution_triggers: [1, 3],
                evolves_to: {},
            },
            "7": {
                name: "sylveon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "68": {
        is_baby: false,
        name: "porygon",
        evolves_to: {
            "0": {
                name: "porygon2",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {
                    "0": {
                        name: "porygon-z",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "69": {
        is_baby: false,
        name: "omanyte",
        evolves_to: {
            "0": {
                name: "omastar",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "70": {
        is_baby: false,
        name: "kabuto",
        evolves_to: {
            "0": {
                name: "kabutops",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "71": {
        is_baby: false,
        name: "aerodactyl",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "72": {
        is_baby: true,
        name: "munchlax",
        evolves_to: {
            "0": {
                name: "snorlax",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: "full-incense",
    },
    "73": {
        is_baby: false,
        name: "articuno",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "74": {
        is_baby: false,
        name: "zapdos",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "75": {
        is_baby: false,
        name: "moltres",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "76": {
        is_baby: false,
        name: "dratini",
        evolves_to: {
            "0": {
                name: "dragonair",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "dragonite",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "77": {
        is_baby: false,
        name: "mewtwo",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "78": {
        is_baby: false,
        name: "mew",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "79": {
        is_baby: false,
        name: "chikorita",
        evolves_to: {
            "0": {
                name: "bayleef",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "meganium",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "80": {
        is_baby: false,
        name: "cyndaquil",
        evolves_to: {
            "0": {
                name: "quilava",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "typhlosion",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "81": {
        is_baby: false,
        name: "totodile",
        evolves_to: {
            "0": {
                name: "croconaw",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "feraligatr",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "82": {
        is_baby: false,
        name: "sentret",
        evolves_to: {
            "0": {
                name: "furret",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "83": {
        is_baby: false,
        name: "hoothoot",
        evolves_to: {
            "0": {
                name: "noctowl",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "84": {
        is_baby: false,
        name: "ledyba",
        evolves_to: {
            "0": {
                name: "ledian",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "85": {
        is_baby: false,
        name: "spinarak",
        evolves_to: {
            "0": {
                name: "ariados",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "86": {
        is_baby: false,
        name: "chinchou",
        evolves_to: {
            "0": {
                name: "lanturn",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "87": {
        is_baby: true,
        name: "togepi",
        evolves_to: {
            "0": {
                name: "togetic",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "togekiss",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "88": {
        is_baby: false,
        name: "natu",
        evolves_to: {
            "0": {
                name: "xatu",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "89": {
        is_baby: false,
        name: "mareep",
        evolves_to: {
            "0": {
                name: "flaaffy",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "ampharos",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "90": {
        is_baby: true,
        name: "azurill",
        evolves_to: {
            "0": {
                name: "marill",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "azumarill",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: "sea-incense",
    },
    "91": {
        is_baby: true,
        name: "bonsly",
        evolves_to: {
            "0": {
                name: "sudowoodo",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: "rock-incense",
    },
    "92": {
        is_baby: false,
        name: "hoppip",
        evolves_to: {
            "0": {
                name: "skiploom",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "jumpluff",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "93": {
        is_baby: false,
        name: "aipom",
        evolves_to: {
            "0": {
                name: "ambipom",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "94": {
        is_baby: false,
        name: "sunkern",
        evolves_to: {
            "0": {
                name: "sunflora",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "95": {
        is_baby: false,
        name: "yanma",
        evolves_to: {
            "0": {
                name: "yanmega",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "96": {
        is_baby: false,
        name: "wooper",
        evolves_to: {
            "0": {
                name: "quagsire",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "1": {
                name: "clodsire",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "97": {
        is_baby: false,
        name: "murkrow",
        evolves_to: {
            "0": {
                name: "honchkrow",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "98": {
        is_baby: false,
        name: "misdreavus",
        evolves_to: {
            "0": {
                name: "mismagius",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "99": {
        is_baby: false,
        name: "unown",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "100": {
        is_baby: true,
        name: "wynaut",
        evolves_to: {
            "0": {
                name: "wobbuffet",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: "lax-incense",
    },
    "101": {
        is_baby: false,
        name: "girafarig",
        evolves_to: {
            "0": {
                name: "farigiraf",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "102": {
        is_baby: false,
        name: "pineco",
        evolves_to: {
            "0": {
                name: "forretress",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "103": {
        is_baby: false,
        name: "dunsparce",
        evolves_to: {
            "0": {
                name: "dudunsparce",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "104": {
        is_baby: false,
        name: "gligar",
        evolves_to: {
            "0": {
                name: "gliscor",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "105": {
        is_baby: false,
        name: "snubbull",
        evolves_to: {
            "0": {
                name: "granbull",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "106": {
        is_baby: false,
        name: "qwilfish",
        evolves_to: {
            "0": {
                name: "overqwil",
                is_baby: false,
                evolution_triggers: [12],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "107": {
        is_baby: false,
        name: "shuckle",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "108": {
        is_baby: false,
        name: "heracross",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "109": {
        is_baby: false,
        name: "sneasel",
        evolves_to: {
            "0": {
                name: "weavile",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "1": {
                name: "sneasler",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "110": {
        is_baby: false,
        name: "teddiursa",
        evolves_to: {
            "0": {
                name: "ursaring",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "ursaluna",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "111": {
        is_baby: false,
        name: "slugma",
        evolves_to: {
            "0": {
                name: "magcargo",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "112": {
        is_baby: false,
        name: "swinub",
        evolves_to: {
            "0": {
                name: "piloswine",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "mamoswine",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "113": {
        is_baby: false,
        name: "corsola",
        evolves_to: {
            "0": {
                name: "cursola",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "114": {
        is_baby: false,
        name: "remoraid",
        evolves_to: {
            "0": {
                name: "octillery",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "115": {
        is_baby: false,
        name: "delibird",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "116": {
        is_baby: true,
        name: "mantyke",
        evolves_to: {
            "0": {
                name: "mantine",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: "wave-incense",
    },
    "117": {
        is_baby: false,
        name: "skarmory",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "118": {
        is_baby: false,
        name: "houndour",
        evolves_to: {
            "0": {
                name: "houndoom",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "119": {
        is_baby: false,
        name: "phanpy",
        evolves_to: {
            "0": {
                name: "donphan",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "120": {
        is_baby: false,
        name: "stantler",
        evolves_to: {
            "0": {
                name: "wyrdeer",
                is_baby: false,
                evolution_triggers: [11],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "121": {
        is_baby: false,
        name: "smeargle",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "122": {
        is_baby: false,
        name: "miltank",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "123": {
        is_baby: false,
        name: "raikou",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "124": {
        is_baby: false,
        name: "entei",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "125": {
        is_baby: false,
        name: "suicune",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "126": {
        is_baby: false,
        name: "larvitar",
        evolves_to: {
            "0": {
                name: "pupitar",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "tyranitar",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "127": {
        is_baby: false,
        name: "lugia",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "128": {
        is_baby: false,
        name: "ho-oh",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "129": {
        is_baby: false,
        name: "celebi",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "130": {
        is_baby: false,
        name: "treecko",
        evolves_to: {
            "0": {
                name: "grovyle",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "sceptile",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "131": {
        is_baby: false,
        name: "torchic",
        evolves_to: {
            "0": {
                name: "combusken",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "blaziken",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "132": {
        is_baby: false,
        name: "mudkip",
        evolves_to: {
            "0": {
                name: "marshtomp",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "swampert",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "133": {
        is_baby: false,
        name: "poochyena",
        evolves_to: {
            "0": {
                name: "mightyena",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "134": {
        is_baby: false,
        name: "zigzagoon",
        evolves_to: {
            "0": {
                name: "linoone",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "obstagoon",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "135": {
        is_baby: false,
        name: "wurmple",
        evolves_to: {
            "0": {
                name: "silcoon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "beautifly",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
            "1": {
                name: "cascoon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "dustox",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "136": {
        is_baby: false,
        name: "lotad",
        evolves_to: {
            "0": {
                name: "lombre",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "ludicolo",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "137": {
        is_baby: false,
        name: "seedot",
        evolves_to: {
            "0": {
                name: "nuzleaf",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "shiftry",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "138": {
        is_baby: false,
        name: "taillow",
        evolves_to: {
            "0": {
                name: "swellow",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "139": {
        is_baby: false,
        name: "wingull",
        evolves_to: {
            "0": {
                name: "pelipper",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "140": {
        is_baby: false,
        name: "ralts",
        evolves_to: {
            "0": {
                name: "kirlia",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "gardevoir",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                    "1": {
                        name: "gallade",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "141": {
        is_baby: false,
        name: "surskit",
        evolves_to: {
            "0": {
                name: "masquerain",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "142": {
        is_baby: false,
        name: "shroomish",
        evolves_to: {
            "0": {
                name: "breloom",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "143": {
        is_baby: false,
        name: "slakoth",
        evolves_to: {
            "0": {
                name: "vigoroth",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "slaking",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "144": {
        is_baby: false,
        name: "nincada",
        evolves_to: {
            "0": {
                name: "ninjask",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "1": {
                name: "shedinja",
                is_baby: false,
                evolution_triggers: [4],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "145": {
        is_baby: false,
        name: "whismur",
        evolves_to: {
            "0": {
                name: "loudred",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "exploud",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "146": {
        is_baby: false,
        name: "makuhita",
        evolves_to: {
            "0": {
                name: "hariyama",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "147": {
        is_baby: false,
        name: "nosepass",
        evolves_to: {
            "0": {
                name: "probopass",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "148": {
        is_baby: false,
        name: "skitty",
        evolves_to: {
            "0": {
                name: "delcatty",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "149": {
        is_baby: false,
        name: "sableye",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "150": {
        is_baby: false,
        name: "mawile",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "151": {
        is_baby: false,
        name: "aron",
        evolves_to: {
            "0": {
                name: "lairon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "aggron",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "152": {
        is_baby: false,
        name: "meditite",
        evolves_to: {
            "0": {
                name: "medicham",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "153": {
        is_baby: false,
        name: "electrike",
        evolves_to: {
            "0": {
                name: "manectric",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "154": {
        is_baby: false,
        name: "plusle",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "155": {
        is_baby: false,
        name: "minun",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "156": {
        is_baby: false,
        name: "volbeat",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "157": {
        is_baby: false,
        name: "illumise",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "158": {
        is_baby: true,
        name: "budew",
        evolves_to: {
            "0": {
                name: "roselia",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "roserade",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: "rose-incense",
    },
    "159": {
        is_baby: false,
        name: "gulpin",
        evolves_to: {
            "0": {
                name: "swalot",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "160": {
        is_baby: false,
        name: "carvanha",
        evolves_to: {
            "0": {
                name: "sharpedo",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "161": {
        is_baby: false,
        name: "wailmer",
        evolves_to: {
            "0": {
                name: "wailord",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "162": {
        is_baby: false,
        name: "numel",
        evolves_to: {
            "0": {
                name: "camerupt",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "163": {
        is_baby: false,
        name: "torkoal",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "164": {
        is_baby: false,
        name: "spoink",
        evolves_to: {
            "0": {
                name: "grumpig",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "165": {
        is_baby: false,
        name: "spinda",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "166": {
        is_baby: false,
        name: "trapinch",
        evolves_to: {
            "0": {
                name: "vibrava",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "flygon",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "167": {
        is_baby: false,
        name: "cacnea",
        evolves_to: {
            "0": {
                name: "cacturne",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "168": {
        is_baby: false,
        name: "swablu",
        evolves_to: {
            "0": {
                name: "altaria",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "169": {
        is_baby: false,
        name: "zangoose",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "170": {
        is_baby: false,
        name: "seviper",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "171": {
        is_baby: false,
        name: "lunatone",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "172": {
        is_baby: false,
        name: "solrock",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "173": {
        is_baby: false,
        name: "barboach",
        evolves_to: {
            "0": {
                name: "whiscash",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "174": {
        is_baby: false,
        name: "corphish",
        evolves_to: {
            "0": {
                name: "crawdaunt",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "175": {
        is_baby: false,
        name: "baltoy",
        evolves_to: {
            "0": {
                name: "claydol",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "176": {
        is_baby: false,
        name: "lileep",
        evolves_to: {
            "0": {
                name: "cradily",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "177": {
        is_baby: false,
        name: "anorith",
        evolves_to: {
            "0": {
                name: "armaldo",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "178": {
        is_baby: false,
        name: "feebas",
        evolves_to: {
            "0": {
                name: "milotic",
                is_baby: false,
                evolution_triggers: [1, 2],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "179": {
        is_baby: false,
        name: "castform",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "180": {
        is_baby: false,
        name: "kecleon",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "181": {
        is_baby: false,
        name: "shuppet",
        evolves_to: {
            "0": {
                name: "banette",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "182": {
        is_baby: false,
        name: "duskull",
        evolves_to: {
            "0": {
                name: "dusclops",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "dusknoir",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "183": {
        is_baby: false,
        name: "tropius",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "184": {
        is_baby: true,
        name: "chingling",
        evolves_to: {
            "0": {
                name: "chimecho",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: "pure-incense",
    },
    "185": {
        is_baby: false,
        name: "absol",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "186": {
        is_baby: false,
        name: "snorunt",
        evolves_to: {
            "0": {
                name: "glalie",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "1": {
                name: "froslass",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "187": {
        is_baby: false,
        name: "spheal",
        evolves_to: {
            "0": {
                name: "sealeo",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "walrein",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "188": {
        is_baby: false,
        name: "clamperl",
        evolves_to: {
            "0": {
                name: "huntail",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {},
            },
            "1": {
                name: "gorebyss",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "189": {
        is_baby: false,
        name: "relicanth",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "190": {
        is_baby: false,
        name: "luvdisc",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "191": {
        is_baby: false,
        name: "bagon",
        evolves_to: {
            "0": {
                name: "shelgon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "salamence",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "192": {
        is_baby: false,
        name: "beldum",
        evolves_to: {
            "0": {
                name: "metang",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "metagross",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "193": {
        is_baby: false,
        name: "regirock",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "194": {
        is_baby: false,
        name: "regice",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "195": {
        is_baby: false,
        name: "registeel",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "196": {
        is_baby: false,
        name: "latias",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "197": {
        is_baby: false,
        name: "latios",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "198": {
        is_baby: false,
        name: "kyogre",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "199": {
        is_baby: false,
        name: "groudon",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "200": {
        is_baby: false,
        name: "rayquaza",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "201": {
        is_baby: false,
        name: "jirachi",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "202": {
        is_baby: false,
        name: "deoxys",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "203": {
        is_baby: false,
        name: "turtwig",
        evolves_to: {
            "0": {
                name: "grotle",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "torterra",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "204": {
        is_baby: false,
        name: "chimchar",
        evolves_to: {
            "0": {
                name: "monferno",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "infernape",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "205": {
        is_baby: false,
        name: "piplup",
        evolves_to: {
            "0": {
                name: "prinplup",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "empoleon",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "206": {
        is_baby: false,
        name: "starly",
        evolves_to: {
            "0": {
                name: "staravia",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "staraptor",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "207": {
        is_baby: false,
        name: "bidoof",
        evolves_to: {
            "0": {
                name: "bibarel",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "208": {
        is_baby: false,
        name: "kricketot",
        evolves_to: {
            "0": {
                name: "kricketune",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "209": {
        is_baby: false,
        name: "shinx",
        evolves_to: {
            "0": {
                name: "luxio",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "luxray",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "211": {
        is_baby: false,
        name: "cranidos",
        evolves_to: {
            "0": {
                name: "rampardos",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "212": {
        is_baby: false,
        name: "shieldon",
        evolves_to: {
            "0": {
                name: "bastiodon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "213": {
        is_baby: false,
        name: "burmy",
        evolves_to: {
            "0": {
                name: "wormadam",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "1": {
                name: "mothim",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "214": {
        is_baby: false,
        name: "combee",
        evolves_to: {
            "0": {
                name: "vespiquen",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "215": {
        is_baby: false,
        name: "pachirisu",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "216": {
        is_baby: false,
        name: "buizel",
        evolves_to: {
            "0": {
                name: "floatzel",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "217": {
        is_baby: false,
        name: "cherubi",
        evolves_to: {
            "0": {
                name: "cherrim",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "218": {
        is_baby: false,
        name: "shellos",
        evolves_to: {
            "0": {
                name: "gastrodon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "219": {
        is_baby: false,
        name: "drifloon",
        evolves_to: {
            "0": {
                name: "drifblim",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "220": {
        is_baby: false,
        name: "buneary",
        evolves_to: {
            "0": {
                name: "lopunny",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "221": {
        is_baby: false,
        name: "glameow",
        evolves_to: {
            "0": {
                name: "purugly",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "223": {
        is_baby: false,
        name: "stunky",
        evolves_to: {
            "0": {
                name: "skuntank",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "224": {
        is_baby: false,
        name: "bronzor",
        evolves_to: {
            "0": {
                name: "bronzong",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "228": {
        is_baby: false,
        name: "chatot",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "229": {
        is_baby: false,
        name: "spiritomb",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "230": {
        is_baby: false,
        name: "gible",
        evolves_to: {
            "0": {
                name: "gabite",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "garchomp",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "232": {
        is_baby: true,
        name: "riolu",
        evolves_to: {
            "0": {
                name: "lucario",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "233": {
        is_baby: false,
        name: "hippopotas",
        evolves_to: {
            "0": {
                name: "hippowdon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "234": {
        is_baby: false,
        name: "skorupi",
        evolves_to: {
            "0": {
                name: "drapion",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "235": {
        is_baby: false,
        name: "croagunk",
        evolves_to: {
            "0": {
                name: "toxicroak",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "236": {
        is_baby: false,
        name: "carnivine",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "237": {
        is_baby: false,
        name: "finneon",
        evolves_to: {
            "0": {
                name: "lumineon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "239": {
        is_baby: false,
        name: "snover",
        evolves_to: {
            "0": {
                name: "abomasnow",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "240": {
        is_baby: false,
        name: "rotom",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "241": {
        is_baby: false,
        name: "uxie",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "242": {
        is_baby: false,
        name: "mesprit",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "243": {
        is_baby: false,
        name: "azelf",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "244": {
        is_baby: false,
        name: "dialga",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "245": {
        is_baby: false,
        name: "palkia",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "246": {
        is_baby: false,
        name: "heatran",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "247": {
        is_baby: false,
        name: "regigigas",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "248": {
        is_baby: false,
        name: "giratina",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "249": {
        is_baby: false,
        name: "cresselia",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "250": {
        is_baby: false,
        name: "phione",
        evolves_to: {
            "0": {
                name: "manaphy",
                is_baby: false,
                evolution_triggers: [],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "252": {
        is_baby: false,
        name: "darkrai",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "253": {
        is_baby: false,
        name: "shaymin",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "254": {
        is_baby: false,
        name: "arceus",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "255": {
        is_baby: false,
        name: "victini",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "256": {
        is_baby: false,
        name: "snivy",
        evolves_to: {
            "0": {
                name: "servine",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "serperior",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "257": {
        is_baby: false,
        name: "tepig",
        evolves_to: {
            "0": {
                name: "pignite",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "emboar",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "258": {
        is_baby: false,
        name: "oshawott",
        evolves_to: {
            "0": {
                name: "dewott",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "samurott",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "259": {
        is_baby: false,
        name: "patrat",
        evolves_to: {
            "0": {
                name: "watchog",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "260": {
        is_baby: false,
        name: "lillipup",
        evolves_to: {
            "0": {
                name: "herdier",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "stoutland",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "261": {
        is_baby: false,
        name: "purrloin",
        evolves_to: {
            "0": {
                name: "liepard",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "262": {
        is_baby: false,
        name: "pansage",
        evolves_to: {
            "0": {
                name: "simisage",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "263": {
        is_baby: false,
        name: "pansear",
        evolves_to: {
            "0": {
                name: "simisear",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "264": {
        is_baby: false,
        name: "panpour",
        evolves_to: {
            "0": {
                name: "simipour",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "265": {
        is_baby: false,
        name: "munna",
        evolves_to: {
            "0": {
                name: "musharna",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "266": {
        is_baby: false,
        name: "pidove",
        evolves_to: {
            "0": {
                name: "tranquill",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "unfezant",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "267": {
        is_baby: false,
        name: "blitzle",
        evolves_to: {
            "0": {
                name: "zebstrika",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "268": {
        is_baby: false,
        name: "roggenrola",
        evolves_to: {
            "0": {
                name: "boldore",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "gigalith",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "269": {
        is_baby: false,
        name: "woobat",
        evolves_to: {
            "0": {
                name: "swoobat",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "270": {
        is_baby: false,
        name: "drilbur",
        evolves_to: {
            "0": {
                name: "excadrill",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "271": {
        is_baby: false,
        name: "audino",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "272": {
        is_baby: false,
        name: "timburr",
        evolves_to: {
            "0": {
                name: "gurdurr",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "conkeldurr",
                        is_baby: false,
                        evolution_triggers: [2],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "273": {
        is_baby: false,
        name: "tympole",
        evolves_to: {
            "0": {
                name: "palpitoad",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "seismitoad",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "274": {
        is_baby: false,
        name: "throh",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "275": {
        is_baby: false,
        name: "sawk",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "276": {
        is_baby: false,
        name: "sewaddle",
        evolves_to: {
            "0": {
                name: "swadloon",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "leavanny",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "277": {
        is_baby: false,
        name: "venipede",
        evolves_to: {
            "0": {
                name: "whirlipede",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "scolipede",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "278": {
        is_baby: false,
        name: "cottonee",
        evolves_to: {
            "0": {
                name: "whimsicott",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "279": {
        is_baby: false,
        name: "petilil",
        evolves_to: {
            "0": {
                name: "lilligant",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "280": {
        is_baby: false,
        name: "basculin",
        evolves_to: {
            "0": {
                name: "basculegion",
                is_baby: false,
                evolution_triggers: [13],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "281": {
        is_baby: false,
        name: "sandile",
        evolves_to: {
            "0": {
                name: "krokorok",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "krookodile",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "282": {
        is_baby: false,
        name: "darumaka",
        evolves_to: {
            "0": {
                name: "darmanitan",
                is_baby: false,
                evolution_triggers: [1, 3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "283": {
        is_baby: false,
        name: "maractus",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "284": {
        is_baby: false,
        name: "dwebble",
        evolves_to: {
            "0": {
                name: "crustle",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "285": {
        is_baby: false,
        name: "scraggy",
        evolves_to: {
            "0": {
                name: "scrafty",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "286": {
        is_baby: false,
        name: "sigilyph",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "287": {
        is_baby: false,
        name: "yamask",
        evolves_to: {
            "0": {
                name: "cofagrigus",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
            "1": {
                name: "runerigus",
                is_baby: false,
                evolution_triggers: [9],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "288": {
        is_baby: false,
        name: "tirtouga",
        evolves_to: {
            "0": {
                name: "carracosta",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "289": {
        is_baby: false,
        name: "archen",
        evolves_to: {
            "0": {
                name: "archeops",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "290": {
        is_baby: false,
        name: "trubbish",
        evolves_to: {
            "0": {
                name: "garbodor",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "291": {
        is_baby: false,
        name: "zorua",
        evolves_to: {
            "0": {
                name: "zoroark",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "292": {
        is_baby: false,
        name: "minccino",
        evolves_to: {
            "0": {
                name: "cinccino",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "293": {
        is_baby: false,
        name: "gothita",
        evolves_to: {
            "0": {
                name: "gothorita",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "gothitelle",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "294": {
        is_baby: false,
        name: "solosis",
        evolves_to: {
            "0": {
                name: "duosion",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "reuniclus",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "295": {
        is_baby: false,
        name: "ducklett",
        evolves_to: {
            "0": {
                name: "swanna",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "296": {
        is_baby: false,
        name: "vanillite",
        evolves_to: {
            "0": {
                name: "vanillish",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "vanilluxe",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "297": {
        is_baby: false,
        name: "deerling",
        evolves_to: {
            "0": {
                name: "sawsbuck",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "298": {
        is_baby: false,
        name: "emolga",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "299": {
        is_baby: false,
        name: "karrablast",
        evolves_to: {
            "0": {
                name: "escavalier",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "300": {
        is_baby: false,
        name: "foongus",
        evolves_to: {
            "0": {
                name: "amoonguss",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "301": {
        is_baby: false,
        name: "frillish",
        evolves_to: {
            "0": {
                name: "jellicent",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "302": {
        is_baby: false,
        name: "alomomola",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "303": {
        is_baby: false,
        name: "joltik",
        evolves_to: {
            "0": {
                name: "galvantula",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "304": {
        is_baby: false,
        name: "ferroseed",
        evolves_to: {
            "0": {
                name: "ferrothorn",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "305": {
        is_baby: false,
        name: "klink",
        evolves_to: {
            "0": {
                name: "klang",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "klinklang",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "306": {
        is_baby: false,
        name: "tynamo",
        evolves_to: {
            "0": {
                name: "eelektrik",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "eelektross",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "307": {
        is_baby: false,
        name: "elgyem",
        evolves_to: {
            "0": {
                name: "beheeyem",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "308": {
        is_baby: false,
        name: "litwick",
        evolves_to: {
            "0": {
                name: "lampent",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "chandelure",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "309": {
        is_baby: false,
        name: "axew",
        evolves_to: {
            "0": {
                name: "fraxure",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "haxorus",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "310": {
        is_baby: false,
        name: "cubchoo",
        evolves_to: {
            "0": {
                name: "beartic",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "311": {
        is_baby: false,
        name: "cryogonal",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "312": {
        is_baby: false,
        name: "shelmet",
        evolves_to: {
            "0": {
                name: "accelgor",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "313": {
        is_baby: false,
        name: "stunfisk",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "314": {
        is_baby: false,
        name: "mienfoo",
        evolves_to: {
            "0": {
                name: "mienshao",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "315": {
        is_baby: false,
        name: "druddigon",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "316": {
        is_baby: false,
        name: "golett",
        evolves_to: {
            "0": {
                name: "golurk",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "317": {
        is_baby: false,
        name: "pawniard",
        evolves_to: {
            "0": {
                name: "bisharp",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "kingambit",
                        is_baby: false,
                        evolution_triggers: [10],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "318": {
        is_baby: false,
        name: "bouffalant",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "319": {
        is_baby: false,
        name: "rufflet",
        evolves_to: {
            "0": {
                name: "braviary",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "320": {
        is_baby: false,
        name: "vullaby",
        evolves_to: {
            "0": {
                name: "mandibuzz",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "321": {
        is_baby: false,
        name: "heatmor",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "322": {
        is_baby: false,
        name: "durant",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "323": {
        is_baby: false,
        name: "deino",
        evolves_to: {
            "0": {
                name: "zweilous",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "hydreigon",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "324": {
        is_baby: false,
        name: "larvesta",
        evolves_to: {
            "0": {
                name: "volcarona",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "325": {
        is_baby: false,
        name: "cobalion",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "326": {
        is_baby: false,
        name: "terrakion",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "327": {
        is_baby: false,
        name: "virizion",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "328": {
        is_baby: false,
        name: "tornadus",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "329": {
        is_baby: false,
        name: "thundurus",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "330": {
        is_baby: false,
        name: "reshiram",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "331": {
        is_baby: false,
        name: "zekrom",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "332": {
        is_baby: false,
        name: "landorus",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "333": {
        is_baby: false,
        name: "kyurem",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "334": {
        is_baby: false,
        name: "keldeo",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "335": {
        is_baby: false,
        name: "meloetta",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "336": {
        is_baby: false,
        name: "genesect",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "337": {
        is_baby: false,
        name: "chespin",
        evolves_to: {
            "0": {
                name: "quilladin",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "chesnaught",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "338": {
        is_baby: false,
        name: "fennekin",
        evolves_to: {
            "0": {
                name: "braixen",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "delphox",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "339": {
        is_baby: false,
        name: "froakie",
        evolves_to: {
            "0": {
                name: "frogadier",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "greninja",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "340": {
        is_baby: false,
        name: "bunnelby",
        evolves_to: {
            "0": {
                name: "diggersby",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "341": {
        is_baby: false,
        name: "fletchling",
        evolves_to: {
            "0": {
                name: "fletchinder",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "talonflame",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "342": {
        is_baby: false,
        name: "scatterbug",
        evolves_to: {
            "0": {
                name: "spewpa",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "vivillon",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "343": {
        is_baby: false,
        name: "litleo",
        evolves_to: {
            "0": {
                name: "pyroar",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "344": {
        is_baby: false,
        name: "flabebe",
        evolves_to: {
            "0": {
                name: "floette",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "florges",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "345": {
        is_baby: false,
        name: "skiddo",
        evolves_to: {
            "0": {
                name: "gogoat",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "346": {
        is_baby: false,
        name: "pancham",
        evolves_to: {
            "0": {
                name: "pangoro",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "347": {
        is_baby: false,
        name: "furfrou",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "348": {
        is_baby: false,
        name: "espurr",
        evolves_to: {
            "0": {
                name: "meowstic",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "349": {
        is_baby: false,
        name: "honedge",
        evolves_to: {
            "0": {
                name: "doublade",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "aegislash",
                        is_baby: false,
                        evolution_triggers: [3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "350": {
        is_baby: false,
        name: "spritzee",
        evolves_to: {
            "0": {
                name: "aromatisse",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "351": {
        is_baby: false,
        name: "swirlix",
        evolves_to: {
            "0": {
                name: "slurpuff",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "352": {
        is_baby: false,
        name: "inkay",
        evolves_to: {
            "0": {
                name: "malamar",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "353": {
        is_baby: false,
        name: "binacle",
        evolves_to: {
            "0": {
                name: "barbaracle",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "354": {
        is_baby: false,
        name: "skrelp",
        evolves_to: {
            "0": {
                name: "dragalge",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "355": {
        is_baby: false,
        name: "clauncher",
        evolves_to: {
            "0": {
                name: "clawitzer",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "356": {
        is_baby: false,
        name: "helioptile",
        evolves_to: {
            "0": {
                name: "heliolisk",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "357": {
        is_baby: false,
        name: "tyrunt",
        evolves_to: {
            "0": {
                name: "tyrantrum",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "358": {
        is_baby: false,
        name: "amaura",
        evolves_to: {
            "0": {
                name: "aurorus",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "359": {
        is_baby: false,
        name: "hawlucha",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "360": {
        is_baby: false,
        name: "dedenne",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "361": {
        is_baby: false,
        name: "carbink",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "362": {
        is_baby: false,
        name: "goomy",
        evolves_to: {
            "0": {
                name: "sliggoo",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "goodra",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "363": {
        is_baby: false,
        name: "klefki",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "364": {
        is_baby: false,
        name: "phantump",
        evolves_to: {
            "0": {
                name: "trevenant",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "365": {
        is_baby: false,
        name: "pumpkaboo",
        evolves_to: {
            "0": {
                name: "gourgeist",
                is_baby: false,
                evolution_triggers: [2],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "366": {
        is_baby: false,
        name: "bergmite",
        evolves_to: {
            "0": {
                name: "avalugg",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "367": {
        is_baby: false,
        name: "noibat",
        evolves_to: {
            "0": {
                name: "noivern",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "368": {
        is_baby: false,
        name: "xerneas",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "369": {
        is_baby: false,
        name: "yveltal",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "370": {
        is_baby: false,
        name: "zygarde",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "371": {
        is_baby: false,
        name: "diancie",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "372": {
        is_baby: false,
        name: "hoopa",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "373": {
        is_baby: false,
        name: "volcanion",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "374": {
        is_baby: false,
        name: "rowlet",
        evolves_to: {
            "0": {
                name: "dartrix",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "decidueye",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "375": {
        is_baby: false,
        name: "litten",
        evolves_to: {
            "0": {
                name: "torracat",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "incineroar",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "376": {
        is_baby: false,
        name: "popplio",
        evolves_to: {
            "0": {
                name: "brionne",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "primarina",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "377": {
        is_baby: false,
        name: "pikipek",
        evolves_to: {
            "0": {
                name: "trumbeak",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "toucannon",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "378": {
        is_baby: false,
        name: "yungoos",
        evolves_to: {
            "0": {
                name: "gumshoos",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "379": {
        is_baby: false,
        name: "grubbin",
        evolves_to: {
            "0": {
                name: "charjabug",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "vikavolt",
                        is_baby: false,
                        evolution_triggers: [1, 3],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "380": {
        is_baby: false,
        name: "crabrawler",
        evolves_to: {
            "0": {
                name: "crabominable",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "381": {
        is_baby: false,
        name: "oricorio",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "382": {
        is_baby: false,
        name: "cutiefly",
        evolves_to: {
            "0": {
                name: "ribombee",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "383": {
        is_baby: false,
        name: "rockruff",
        evolves_to: {
            "0": {
                name: "lycanroc",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "384": {
        is_baby: false,
        name: "wishiwashi",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "385": {
        is_baby: false,
        name: "mareanie",
        evolves_to: {
            "0": {
                name: "toxapex",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "386": {
        is_baby: false,
        name: "mudbray",
        evolves_to: {
            "0": {
                name: "mudsdale",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "387": {
        is_baby: false,
        name: "dewpider",
        evolves_to: {
            "0": {
                name: "araquanid",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "388": {
        is_baby: false,
        name: "fomantis",
        evolves_to: {
            "0": {
                name: "lurantis",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "389": {
        is_baby: false,
        name: "morelull",
        evolves_to: {
            "0": {
                name: "shiinotic",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "390": {
        is_baby: false,
        name: "salandit",
        evolves_to: {
            "0": {
                name: "salazzle",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "391": {
        is_baby: false,
        name: "stufful",
        evolves_to: {
            "0": {
                name: "bewear",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "392": {
        is_baby: false,
        name: "bounsweet",
        evolves_to: {
            "0": {
                name: "steenee",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "tsareena",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "393": {
        is_baby: false,
        name: "comfey",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "394": {
        is_baby: false,
        name: "oranguru",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "395": {
        is_baby: false,
        name: "passimian",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "396": {
        is_baby: false,
        name: "wimpod",
        evolves_to: {
            "0": {
                name: "golisopod",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "397": {
        is_baby: false,
        name: "sandygast",
        evolves_to: {
            "0": {
                name: "palossand",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "398": {
        is_baby: false,
        name: "pyukumuku",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "399": {
        is_baby: false,
        name: "type-null",
        evolves_to: {
            "0": {
                name: "silvally",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "400": {
        is_baby: false,
        name: "minior",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "401": {
        is_baby: false,
        name: "komala",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "402": {
        is_baby: false,
        name: "turtonator",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "403": {
        is_baby: false,
        name: "togedemaru",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "404": {
        is_baby: false,
        name: "mimikyu",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "405": {
        is_baby: false,
        name: "bruxish",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "406": {
        is_baby: false,
        name: "drampa",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "407": {
        is_baby: false,
        name: "dhelmise",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "408": {
        is_baby: false,
        name: "jangmo-o",
        evolves_to: {
            "0": {
                name: "hakamo-o",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "kommo-o",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "409": {
        is_baby: false,
        name: "tapu-koko",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "410": {
        is_baby: false,
        name: "tapu-lele",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "411": {
        is_baby: false,
        name: "tapu-bulu",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "412": {
        is_baby: false,
        name: "tapu-fini",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "413": {
        is_baby: false,
        name: "cosmog",
        evolves_to: {
            "0": {
                name: "cosmoem",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "solgaleo",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                    "1": {
                        name: "lunala",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "414": {
        is_baby: false,
        name: "nihilego",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "415": {
        is_baby: false,
        name: "buzzwole",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "416": {
        is_baby: false,
        name: "pheromosa",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "417": {
        is_baby: false,
        name: "xurkitree",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "418": {
        is_baby: false,
        name: "celesteela",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "419": {
        is_baby: false,
        name: "kartana",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "420": {
        is_baby: false,
        name: "guzzlord",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "421": {
        is_baby: false,
        name: "necrozma",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "422": {
        is_baby: false,
        name: "magearna",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "423": {
        is_baby: false,
        name: "marshadow",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "424": {
        is_baby: false,
        name: "poipole",
        evolves_to: {
            "0": {
                name: "naganadel",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "425": {
        is_baby: false,
        name: "stakataka",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "426": {
        is_baby: false,
        name: "blacephalon",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "427": {
        is_baby: false,
        name: "zeraora",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "428": {
        is_baby: false,
        name: "meltan",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "429": {
        is_baby: false,
        name: "melmetal",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "430": {
        is_baby: false,
        name: "grookey",
        evolves_to: {
            "0": {
                name: "thwackey",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "rillaboom",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "431": {
        is_baby: false,
        name: "scorbunny",
        evolves_to: {
            "0": {
                name: "raboot",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "cinderace",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "432": {
        is_baby: false,
        name: "sobble",
        evolves_to: {
            "0": {
                name: "drizzile",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "inteleon",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "433": {
        is_baby: false,
        name: "skwovet",
        evolves_to: {
            "0": {
                name: "greedent",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "434": {
        is_baby: false,
        name: "rookidee",
        evolves_to: {
            "0": {
                name: "corvisquire",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "corviknight",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "435": {
        is_baby: false,
        name: "blipbug",
        evolves_to: {
            "0": {
                name: "dottler",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "orbeetle",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "436": {
        is_baby: false,
        name: "nickit",
        evolves_to: {
            "0": {
                name: "thievul",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "437": {
        is_baby: false,
        name: "gossifleur",
        evolves_to: {
            "0": {
                name: "eldegoss",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "438": {
        is_baby: false,
        name: "wooloo",
        evolves_to: {
            "0": {
                name: "dubwool",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "439": {
        is_baby: false,
        name: "chewtle",
        evolves_to: {
            "0": {
                name: "drednaw",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "440": {
        is_baby: false,
        name: "yamper",
        evolves_to: {
            "0": {
                name: "boltund",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "441": {
        is_baby: false,
        name: "rolycoly",
        evolves_to: {
            "0": {
                name: "carkol",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "coalossal",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "442": {
        is_baby: false,
        name: "applin",
        evolves_to: {
            "0": {
                name: "flapple",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
            "1": {
                name: "appletun",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "443": {
        is_baby: false,
        name: "silicobra",
        evolves_to: {
            "0": {
                name: "sandaconda",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "444": {
        is_baby: false,
        name: "cramorant",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "445": {
        is_baby: false,
        name: "arrokuda",
        evolves_to: {
            "0": {
                name: "barraskewda",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "446": {
        is_baby: true,
        name: "toxel",
        evolves_to: {
            "0": {
                name: "toxtricity",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "447": {
        is_baby: false,
        name: "sizzlipede",
        evolves_to: {
            "0": {
                name: "centiskorch",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "448": {
        is_baby: false,
        name: "clobbopus",
        evolves_to: {
            "0": {
                name: "grapploct",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "449": {
        is_baby: false,
        name: "sinistea",
        evolves_to: {
            "0": {
                name: "polteageist",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "450": {
        is_baby: false,
        name: "hatenna",
        evolves_to: {
            "0": {
                name: "hattrem",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "hatterene",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "451": {
        is_baby: false,
        name: "impidimp",
        evolves_to: {
            "0": {
                name: "morgrem",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "grimmsnarl",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "452": {
        is_baby: false,
        name: "milcery",
        evolves_to: {
            "0": {
                name: "alcremie",
                is_baby: false,
                evolution_triggers: [5],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "453": {
        is_baby: false,
        name: "falinks",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "454": {
        is_baby: false,
        name: "pincurchin",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "455": {
        is_baby: false,
        name: "snom",
        evolves_to: {
            "0": {
                name: "frosmoth",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "456": {
        is_baby: false,
        name: "stonjourner",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "457": {
        is_baby: false,
        name: "eiscue",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "458": {
        is_baby: false,
        name: "indeedee",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "459": {
        is_baby: false,
        name: "morpeko",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "460": {
        is_baby: false,
        name: "cufant",
        evolves_to: {
            "0": {
                name: "copperajah",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "461": {
        is_baby: false,
        name: "dracozolt",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "462": {
        is_baby: false,
        name: "arctozolt",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "463": {
        is_baby: false,
        name: "dracovish",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "464": {
        is_baby: false,
        name: "arctovish",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "465": {
        is_baby: false,
        name: "duraludon",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "466": {
        is_baby: false,
        name: "dreepy",
        evolves_to: {
            "0": {
                name: "drakloak",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "dragapult",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "467": {
        is_baby: false,
        name: "zacian",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "468": {
        is_baby: false,
        name: "zamazenta",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "469": {
        is_baby: false,
        name: "eternatus",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "470": {
        is_baby: false,
        name: "kubfu",
        evolves_to: {
            "0": {
                name: "urshifu",
                is_baby: false,
                evolution_triggers: [6, 7],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "471": {
        is_baby: false,
        name: "zarude",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "472": {
        is_baby: false,
        name: "regieleki",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "473": {
        is_baby: false,
        name: "regidrago",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "474": {
        is_baby: false,
        name: "glastrier",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "475": {
        is_baby: false,
        name: "spectrier",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "476": {
        is_baby: false,
        name: "calyrex",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "477": {
        is_baby: false,
        name: "enamorus",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "478": {
        is_baby: false,
        name: "sprigatito",
        evolves_to: {
            "0": {
                name: "floragato",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "meowscarada",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "479": {
        is_baby: false,
        name: "fuecoco",
        evolves_to: {
            "0": {
                name: "crocalor",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "skeledirge",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "480": {
        is_baby: false,
        name: "quaxly",
        evolves_to: {
            "0": {
                name: "quaxwell",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "quaquaval",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "481": {
        is_baby: false,
        name: "lechonk",
        evolves_to: {
            "0": {
                name: "oinkologne",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "482": {
        is_baby: false,
        name: "tarountula",
        evolves_to: {
            "0": {
                name: "spidops",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "483": {
        is_baby: false,
        name: "nymble",
        evolves_to: {
            "0": {
                name: "lokix",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "484": {
        is_baby: false,
        name: "pawmi",
        evolves_to: {
            "0": {
                name: "pawmo",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "pawmot",
                        is_baby: false,
                        evolution_triggers: [10],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "485": {
        is_baby: false,
        name: "tandemaus",
        evolves_to: {
            "0": {
                name: "maushold",
                is_baby: false,
                evolution_triggers: [10],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "486": {
        is_baby: false,
        name: "fidough",
        evolves_to: {
            "0": {
                name: "dachsbun",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "487": {
        is_baby: false,
        name: "smoliv",
        evolves_to: {
            "0": {
                name: "dolliv",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "arboliva",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "488": {
        is_baby: false,
        name: "squawkabilly",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "489": {
        is_baby: false,
        name: "nacli",
        evolves_to: {
            "0": {
                name: "naclstack",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "garganacl",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "490": {
        is_baby: false,
        name: "charcadet",
        evolves_to: {
            "0": {
                name: "armarouge",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
            "1": {
                name: "ceruledge",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "491": {
        is_baby: false,
        name: "tadbulb",
        evolves_to: {
            "0": {
                name: "bellibolt",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "492": {
        is_baby: false,
        name: "wattrel",
        evolves_to: {
            "0": {
                name: "kilowattrel",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "493": {
        is_baby: false,
        name: "maschiff",
        evolves_to: {
            "0": {
                name: "mabosstiff",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "494": {
        is_baby: false,
        name: "shroodle",
        evolves_to: {
            "0": {
                name: "grafaiai",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "495": {
        is_baby: false,
        name: "bramblin",
        evolves_to: {
            "0": {
                name: "brambleghast",
                is_baby: false,
                evolution_triggers: [10],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "496": {
        is_baby: false,
        name: "toedscool",
        evolves_to: {
            "0": {
                name: "toedscruel",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "497": {
        is_baby: false,
        name: "klawf",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "498": {
        is_baby: false,
        name: "capsakid",
        evolves_to: {
            "0": {
                name: "scovillain",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "499": {
        is_baby: false,
        name: "rellor",
        evolves_to: {
            "0": {
                name: "rabsca",
                is_baby: false,
                evolution_triggers: [10],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "500": {
        is_baby: false,
        name: "flittle",
        evolves_to: {
            "0": {
                name: "espathra",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "501": {
        is_baby: false,
        name: "tinkatink",
        evolves_to: {
            "0": {
                name: "tinkatuff",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "tinkaton",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "502": {
        is_baby: false,
        name: "wiglett",
        evolves_to: {
            "0": {
                name: "wugtrio",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "503": {
        is_baby: false,
        name: "bombirdier",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "504": {
        is_baby: false,
        name: "finizen",
        evolves_to: {
            "0": {
                name: "palafin",
                is_baby: false,
                evolution_triggers: [10],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "505": {
        is_baby: false,
        name: "varoom",
        evolves_to: {
            "0": {
                name: "revavroom",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "506": {
        is_baby: false,
        name: "cyclizar",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "507": {
        is_baby: false,
        name: "orthworm",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "508": {
        is_baby: false,
        name: "glimmet",
        evolves_to: {
            "0": {
                name: "glimmora",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "509": {
        is_baby: false,
        name: "greavard",
        evolves_to: {
            "0": {
                name: "houndstone",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "510": {
        is_baby: false,
        name: "flamigo",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "511": {
        is_baby: false,
        name: "cetoddle",
        evolves_to: {
            "0": {
                name: "cetitan",
                is_baby: false,
                evolution_triggers: [3],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "512": {
        is_baby: false,
        name: "veluza",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "513": {
        is_baby: false,
        name: "dondozo",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "514": {
        is_baby: false,
        name: "tatsugiri",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "515": {
        is_baby: false,
        name: "great-tusk",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "516": {
        is_baby: false,
        name: "scream-tail",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "517": {
        is_baby: false,
        name: "brute-bonnet",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "518": {
        is_baby: false,
        name: "flutter-mane",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "519": {
        is_baby: false,
        name: "slither-wing",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "520": {
        is_baby: false,
        name: "sandy-shocks",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "521": {
        is_baby: false,
        name: "iron-treads",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "522": {
        is_baby: false,
        name: "iron-bundle",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "523": {
        is_baby: false,
        name: "iron-hands",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "524": {
        is_baby: false,
        name: "iron-jugulis",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "525": {
        is_baby: false,
        name: "iron-moth",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "526": {
        is_baby: false,
        name: "iron-thorns",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "527": {
        is_baby: false,
        name: "frigibax",
        evolves_to: {
            "0": {
                name: "arctibax",
                is_baby: false,
                evolution_triggers: [1],
                evolves_to: {
                    "0": {
                        name: "baxcalibur",
                        is_baby: false,
                        evolution_triggers: [1],
                        evolves_to: {},
                    },
                },
            },
        },
        baby_trigger_item: null,
    },
    "528": {
        is_baby: false,
        name: "gimmighoul",
        evolves_to: {
            "0": {
                name: "gholdengo",
                is_baby: false,
                evolution_triggers: [10],
                evolves_to: {},
            },
        },
        baby_trigger_item: null,
    },
    "529": {
        is_baby: false,
        name: "wo-chien",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "530": {
        is_baby: false,
        name: "chien-pao",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "531": {
        is_baby: false,
        name: "ting-lu",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "532": {
        is_baby: false,
        name: "chi-yu",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "533": {
        is_baby: false,
        name: "roaring-moon",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "534": {
        is_baby: false,
        name: "iron-valiant",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "535": {
        is_baby: false,
        name: "koraidon",
        evolves_to: {},
        baby_trigger_item: null,
    },
    "536": {
        is_baby: false,
        name: "miraidon",
        evolves_to: {},
        baby_trigger_item: null,
    },
};
