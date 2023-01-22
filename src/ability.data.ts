let abilityData: AbilityData = {
  "1": {
    id: 1,
    name: "stench",
    names: "Stench",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat im Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no effect in battle.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Has a 10% chance of making target Pokémon flinch with each hit.",
    },
    pokemon: [
      "gloom",
      "grimer",
      "muk",
      "koffing",
      "weezing",
      "stunky",
      "skuntank",
      "trubbish",
      "garbodor",
      "garbodor-gmax",
    ],
  },
  "2": {
    id: 2,
    name: "drizzle",
    names: "Drizzle",
    effect_changes: [],
    effect_entries: {
      effect:
        "The weather changes to rain when this Pokémon enters battle and does not end unless replaced by another weather condition.\n\nIf multiple Pokémon with this ability, drought, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Summons rain that lasts indefinitely upon entering battle.",
    },
    pokemon: ["politoed", "pelipper", "kyogre"],
  },
  "3": {
    id: 3,
    name: "speed-boost",
    names: "Speed Boost",
    effect_changes: [],
    effect_entries: {
      effect: "This Pokémon's Speed rises one stage after each turn.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Raises Speed one stage after each turn.",
    },
    pokemon: [
      "yanma",
      "torchic",
      "combusken",
      "blaziken",
      "ninjask",
      "carvanha",
      "sharpedo",
      "yanmega",
      "venipede",
      "whirlipede",
      "scolipede",
      "flittle",
      "espathra",
      "blaziken-mega",
    ],
  },
  "4": {
    id: 4,
    name: "battle-armor",
    names: "Battle Armor",
    effect_changes: [],
    effect_entries: {
      effect:
        "Moves cannot score critical hits against this Pokémon.\n\nThis ability functions identically to shell armor.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Protects against critical hits.",
    },
    pokemon: [
      "cubone",
      "marowak",
      "kabuto",
      "kabutops",
      "anorith",
      "armaldo",
      "skorupi",
      "drapion",
      "type-null",
      "perrserker",
      "falinks",
    ],
  },
  "5": {
    id: 5,
    name: "sturdy",
    names: "Sturdy",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Verhindert keine regulären K.O. bei vollen hp.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Does not prevent regular KOs from full HP.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "When this Pokémon is at full HP, any hit that would knock it out will instead leave it with 1 HP.  Regardless of its current HP, it is also immune to the one-hit KO moves: fissure, guillotine, horn drill, and sheer cold.\n\nIf this Pokémon is holding a focus sash, this ability takes precedence and the item will not be consumed.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Prevents being KOed from full HP, leaving 1 HP instead.  Protects against the one-hit KO moves regardless of HP.",
    },
    pokemon: [
      "geodude",
      "graveler",
      "golem",
      "magnemite",
      "magneton",
      "onix",
      "sudowoodo",
      "pineco",
      "forretress",
      "steelix",
      "shuckle",
      "skarmory",
      "donphan",
      "nosepass",
      "aron",
      "lairon",
      "aggron",
      "relicanth",
      "regirock",
      "shieldon",
      "bastiodon",
      "bonsly",
      "magnezone",
      "probopass",
      "roggenrola",
      "boldore",
      "gigalith",
      "sawk",
      "dwebble",
      "crustle",
      "tirtouga",
      "carracosta",
      "tyrunt",
      "carbink",
      "bergmite",
      "avalugg",
      "togedemaru",
      "cosmoem",
      "nacli",
      "naclstack",
      "garganacl",
      "geodude-alola",
      "graveler-alola",
      "golem-alola",
      "togedemaru-totem",
      "avalugg-hisui",
    ],
  },
  "6": {
    id: 6,
    name: "damp",
    names: "Damp",
    effect_changes: [],
    effect_entries: {
      effect:
        "While this Pokémon is in battle, self destruct and explosion will fail and aftermath will not take effect.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
    },
    pokemon: [
      "paras",
      "parasect",
      "psyduck",
      "golduck",
      "poliwag",
      "poliwhirl",
      "poliwrath",
      "horsea",
      "seadra",
      "politoed",
      "wooper",
      "quagsire",
      "kingdra",
      "mudkip",
      "marshtomp",
      "swampert",
      "frillish",
      "jellicent",
      "tadbulb",
      "bellibolt",
    ],
  },
  "7": {
    id: 7,
    name: "limber",
    names: "Limber",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon cannot be paralyzed.\n\nIf a Pokémon is paralyzed and acquires this ability, its paralysis is healed; this includes when regaining a lost ability upon leaving battle.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents paralysis.",
    },
    pokemon: [
      "persian",
      "hitmonlee",
      "ditto",
      "buneary",
      "lopunny",
      "glameow",
      "purrloin",
      "liepard",
      "stunfisk",
      "hawlucha",
      "mareanie",
      "toxapex",
      "clobbopus",
      "grapploct",
    ],
  },
  "8": {
    id: 8,
    name: "sand-veil",
    names: "Sand Veil",
    effect_changes: [],
    effect_entries: {
      effect:
        "During a sandstorm, this Pokémon has 1.25× its evasion, and it does not take sandstorm damage regardless of type.\n\nThe evasion bonus does not count as a stat modifier.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
    },
    pokemon: [
      "sandshrew",
      "sandslash",
      "diglett",
      "dugtrio",
      "geodude",
      "graveler",
      "golem",
      "gligar",
      "phanpy",
      "donphan",
      "larvitar",
      "cacnea",
      "cacturne",
      "gible",
      "gabite",
      "garchomp",
      "gliscor",
      "stunfisk",
      "helioptile",
      "heliolisk",
      "sandygast",
      "palossand",
      "silicobra",
      "sandaconda",
      "wiglett",
      "wugtrio",
      "orthworm",
      "diglett-alola",
      "dugtrio-alola",
      "sandaconda-gmax",
    ],
  },
  "9": {
    id: 9,
    name: "static",
    names: "Static",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed.\n\nPokémon that are immune to electric-type moves can still be paralyzed by this ability.\n\nOverworld: If the lead Pokémon has this ability, there is a 50% chance that encounters will be with an electric Pokémon, if applicable.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Has a 30% chance of paralyzing attacking Pokémon on contact.",
    },
    pokemon: [
      "pikachu",
      "raichu",
      "voltorb",
      "electrode",
      "electabuzz",
      "zapdos",
      "pichu",
      "mareep",
      "flaaffy",
      "ampharos",
      "elekid",
      "electrike",
      "manectric",
      "emolga",
      "stunfisk",
      "toxel",
      "arctozolt",
      "pawmi",
      "tadbulb",
      "bellibolt",
      "pikachu-rock-star",
      "pikachu-belle",
      "pikachu-pop-star",
      "pikachu-phd",
      "pikachu-libre",
      "pikachu-cosplay",
      "pikachu-original-cap",
      "pikachu-hoenn-cap",
      "pikachu-sinnoh-cap",
      "pikachu-unova-cap",
      "pikachu-kalos-cap",
      "pikachu-alola-cap",
      "pikachu-partner-cap",
      "pikachu-starter",
      "pikachu-world-cap",
      "pikachu-gmax",
      "voltorb-hisui",
      "electrode-hisui",
    ],
  },
  "10": {
    id: 10,
    name: "volt-absorb",
    names: "Volt Absorb",
    effect_changes: [
      {
        effect_entries: [
          {
            effect:
              "electric-Attacken die keinen Schaden anrichten, wie thunder wave, werden nicht absorbiert.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Does not absorb non-damaging electric moves, i.e. thunder wave.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "Whenever an electric-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it.\n\nThis ability will not take effect if this Pokémon is ground-type and thus immune to Electric moves.  Electric moves will ignore this Pokémon's substitute.\n\nThis effect includes non-damaging moves, i.e. thunder wave.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Absorbs electric moves, healing for 1/4 max HP.",
    },
    pokemon: [
      "jolteon",
      "chinchou",
      "lanturn",
      "minun",
      "pachirisu",
      "zeraora",
      "dracozolt",
      "arctozolt",
      "pawmo",
      "pawmot",
      "wattrel",
      "kilowattrel",
      "thundurus-therian",
    ],
  },
  "11": {
    id: 11,
    name: "water-absorb",
    names: "Water Absorb",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever a water-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it.\n\nWater moves will ignore this Pokémon's substitute.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Absorbs water moves, healing for 1/4 max HP.",
    },
    pokemon: [
      "poliwag",
      "poliwhirl",
      "poliwrath",
      "lapras",
      "vaporeon",
      "chinchou",
      "lanturn",
      "politoed",
      "wooper",
      "quagsire",
      "mantine",
      "cacnea",
      "cacturne",
      "mantyke",
      "tympole",
      "palpitoad",
      "seismitoad",
      "maractus",
      "frillish",
      "jellicent",
      "volcanion",
      "dewpider",
      "araquanid",
      "dracovish",
      "arctovish",
      "clodsire",
      "araquanid-totem",
      "lapras-gmax",
      "wooper-paldea",
    ],
  },
  "12": {
    id: 12,
    name: "oblivious",
    names: "Oblivious",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon cannot be infatuated and is immune to captivate.\n\nIf a Pokémon is infatuated and acquires this ability, its infatuation is cleared.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents infatuation and protects against captivate.",
    },
    pokemon: [
      "slowpoke",
      "slowbro",
      "lickitung",
      "jynx",
      "slowking",
      "swinub",
      "piloswine",
      "smoochum",
      "illumise",
      "wailmer",
      "wailord",
      "numel",
      "barboach",
      "whiscash",
      "feebas",
      "spheal",
      "sealeo",
      "walrein",
      "lickilicky",
      "mamoswine",
      "salandit",
      "salazzle",
      "bounsweet",
      "steenee",
      "dondozo",
      "salazzle-totem",
    ],
  },
  "13": {
    id: 13,
    name: "cloud-nine",
    names: "Cloud Nine",
    effect_changes: [],
    effect_entries: {
      effect:
        "While this Pokémon is in battle, weather can still be in play, but will not have any of its effects.\n\nThis ability functions identically to air lock.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Negates all effects of weather, but does not prevent the weather itself.",
    },
    pokemon: [
      "psyduck",
      "golduck",
      "lickitung",
      "swablu",
      "altaria",
      "lickilicky",
      "drampa",
    ],
  },
  "14": {
    id: 14,
    name: "compound-eyes",
    names: "Compound Eyes",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon's moves have 1.3× their accuracy.\n\nThis ability has no effect on the one-hit KO moves (fissure, guillotine, horn drill, and sheer cold).\n\nOverworld: If the first Pokémon in the party has this ability, the chance of a wild Pokémon holding a particular item is raised from 50%, 5%, or 1% to 60%, 20%, or 5%, respectively.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Increases moves' accuracy to 1.3×.",
    },
    pokemon: [
      "butterfree",
      "venonat",
      "yanma",
      "dustox",
      "nincada",
      "joltik",
      "galvantula",
      "scatterbug",
      "vivillon",
      "blipbug",
      "dottler",
      "rellor",
      "butterfree-gmax",
    ],
  },
  "15": {
    id: 15,
    name: "insomnia",
    names: "Insomnia",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon cannot be asleep.\n\nThis causes rest to fail altogether.  If a Pokémon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle.\n\nThis ability functions identically to vital spirit in battle.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents sleep.",
    },
    pokemon: [
      "drowzee",
      "hypno",
      "hoothoot",
      "noctowl",
      "spinarak",
      "ariados",
      "murkrow",
      "delibird",
      "shuppet",
      "banette",
      "honchkrow",
      "pumpkaboo-average",
      "gourgeist-average",
      "tarountula",
      "spidops",
      "capsakid",
      "scovillain",
      "pumpkaboo-small",
      "pumpkaboo-large",
      "pumpkaboo-super",
      "gourgeist-small",
      "gourgeist-large",
      "gourgeist-super",
      "mewtwo-mega-y",
    ],
  },
  "16": {
    id: 16,
    name: "color-change",
    names: "Color Change",
    effect_changes: [
      {
        effect_entries: [
          {
            effect:
              "Löst bei Attacken die mehrmals Treffen bei jedem Treffer aus.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Triggers on every hit of multiple-hit moves.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "Whenever this Pokémon takes damage from a move, the Pokémon's type changes to match the move.\n\nIf the Pokémon has two types, both are overridden.  The Pokémon must directly take damage; for example, moves blocked by a substitute will not trigger this ability, nor will moves that deal damage indirectly, such as spikes.\n\nThis ability takes effect on only the last hit of a multiple-hit attack.\n\nIn Pokémon Colosseum and XD: Gale of Darkness, this ability does not take effect on Shadow-type moves.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Changes type to match when hit by a damaging move.",
    },
    pokemon: ["kecleon"],
  },
  "17": {
    id: 17,
    name: "immunity",
    names: "Immunity",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon cannot be poisoned.  This includes bad poison.\n\nIf a Pokémon is poisoned and acquires this ability, its poison is healed; this includes when regaining a lost ability upon leaving battle.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents poison.",
    },
    pokemon: ["snorlax", "gligar", "zangoose", "snorlax-gmax"],
  },
  "18": {
    id: 18,
    name: "flash-fire",
    names: "Flash Fire",
    effect_changes: [
      {
        effect_entries: [
          {
            effect:
              "will o wisp triggert die Fähigkeit nicht bei Pokémon die immun gegen burn sind.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "will o wisp does not trigger this ability for Pokémon immune to burns.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon is immune to fire-type moves.  Once this Pokémon has been hit by a Fire move, its own Fire moves will inflict 1.5× as much damage until it leaves battle.\n\nThis ability has no effect while the Pokémon is frozen.  The Fire damage bonus is retained even if the Pokémon is frozen and thawed or the ability is lost or disabled.  Fire moves will ignore this Pokémon's substitute.  This ability takes effect even on non-damaging moves, i.e. will o wisp.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Protects against fire moves.  Once one has been blocked, the Pokémon's own Fire moves inflict 1.5× damage until it leaves battle.",
    },
    pokemon: [
      "vulpix",
      "ninetales",
      "growlithe",
      "arcanine",
      "ponyta",
      "rapidash",
      "flareon",
      "cyndaquil",
      "quilava",
      "typhlosion",
      "houndour",
      "houndoom",
      "heatran",
      "litwick",
      "lampent",
      "chandelure",
      "heatmor",
      "rolycoly",
      "carkol",
      "coalossal",
      "sizzlipede",
      "centiskorch",
      "charcadet",
      "armarouge",
      "ceruledge",
      "coalossal-gmax",
      "centiskorch-gmax",
      "growlithe-hisui",
      "arcanine-hisui",
      "typhlosion-hisui",
    ],
  },
  "19": {
    id: 19,
    name: "shield-dust",
    names: "Shield Dust",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon is immune to the extra effects of moves used against it.\n\nAn extra effect is a move's chance, listed as an \"effect chance\", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Protects against incoming moves' extra effects.",
    },
    pokemon: [
      "caterpie",
      "weedle",
      "venomoth",
      "wurmple",
      "dustox",
      "scatterbug",
      "vivillon",
      "cutiefly",
      "ribombee",
      "snom",
      "frosmoth",
      "ribombee-totem",
    ],
  },
  "20": {
    id: 20,
    name: "own-tempo",
    names: "Own Tempo",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon cannot be confused.\n\nIf a Pokémon is confused and acquires this ability, its confusion will immediately be healed.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents confusion.",
    },
    pokemon: [
      "slowpoke",
      "slowbro",
      "lickitung",
      "slowking",
      "smeargle",
      "lotad",
      "lombre",
      "ludicolo",
      "numel",
      "spoink",
      "grumpig",
      "spinda",
      "glameow",
      "purugly",
      "lickilicky",
      "petilil",
      "lilligant",
      "espurr",
      "bergmite",
      "avalugg",
      "mudbray",
      "mudsdale",
      "tandemaus",
      "fidough",
      "tadbulb",
      "tinkatink",
      "tinkatuff",
      "tinkaton",
      "rockruff-own-tempo",
      "slowpoke-galar",
      "slowbro-galar",
      "slowking-galar",
      "indeedee-female",
    ],
  },
  "21": {
    id: 21,
    name: "suction-cups",
    names: "Suction Cups",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon cannot be forced out of battle by moves such as whirlwind.\n\ndragon tail and circle throw still inflict damage against this Pokémon.\n\nOverworld: If the lead Pokémon has this ability, the success rate while fishing is increased.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Prevents being forced out of battle by other Pokémon's moves.",
    },
    pokemon: ["octillery", "lileep", "cradily", "inkay", "malamar"],
  },
  "22": {
    id: 22,
    name: "intimidate",
    names: "Intimidate",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        effect_entries: [
          {
            effect:
              "Hat keinen Effekt, wenn die Fähigkeit nach Kampfbeginn erlangt wurde.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Does not take effect if acquired after entering battle.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "When this Pokémon enters battle, the opponent's Attack is lowered by one stage.  In a double battle, both opponents are affected.\n\nThis ability also takes effect when acquired during a battle, but will not take effect again if lost and reobtained without leaving battle.\n\nThis ability has no effect on an opponent that has a substitute.\n\nOverworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Lowers opponents' Attack one stage upon entering battle.",
    },
    pokemon: [
      "ekans",
      "arbok",
      "growlithe",
      "arcanine",
      "tauros",
      "gyarados",
      "snubbull",
      "granbull",
      "qwilfish",
      "stantler",
      "hitmontop",
      "mightyena",
      "masquerain",
      "mawile",
      "salamence",
      "staravia",
      "staraptor",
      "shinx",
      "luxio",
      "luxray",
      "herdier",
      "stoutland",
      "sandile",
      "krokorok",
      "krookodile",
      "scraggy",
      "scrafty",
      "litten",
      "torracat",
      "incineroar",
      "wyrdeer",
      "overqwil",
      "squawkabilly",
      "maschiff",
      "mabosstiff",
      "landorus-therian",
      "manectric-mega",
      "growlithe-hisui",
      "arcanine-hisui",
      "qwilfish-hisui",
      "tauros-paldea-combat-breed",
      "tauros-paldea-blaze-breed",
      "tauros-paldea-aqua-breed",
      "squawkabilly-blue-plumage",
      "squawkabilly-yellow-plumage",
      "squawkabilly-white-plumage",
    ],
  },
  "23": {
    id: 23,
    name: "shadow-tag",
    names: "Shadow Tag",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Betrifft andere Pokémon mit dieser Fähigkeit.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Affects other Pokémon with this ability.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.\n\nOther Pokémon with this ability are unaffected.  Pokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents opponents from fleeing or switching out.",
    },
    pokemon: [
      "wobbuffet",
      "wynaut",
      "gothita",
      "gothorita",
      "gothitelle",
      "gengar-mega",
    ],
  },
  "24": {
    id: 24,
    name: "rough-skin",
    names: "Rough Skin",
    effect_changes: [
      {
        effect_entries: [
          {
            effect:
              "Verursacht nur 1/16 der maximalen hp des Angreifers Schaden.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Inflicts only 1/16 of the attacker's maximum HP in damage.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "Whenever a move makes contact with this Pokémon, the move's user takes 1/8 of its maximum HP in damage.\n\nThis ability functions identically to iron barbs.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Damages attacking Pokémon for 1/8 their max HP on contact.",
    },
    pokemon: [
      "carvanha",
      "sharpedo",
      "gible",
      "gabite",
      "garchomp",
      "druddigon",
    ],
  },
  "25": {
    id: 25,
    name: "wonder-guard",
    names: "Wonder Guard",
    effect_changes: [
      {
        effect_entries: [
          {
            effect:
              "fire fang und Attacken die typenlosen Schaden verursachen, ignorieren diese Fähigkeit unabhängig von ihrem Typ.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "fire fang and moves that inflict typeless damage ignore this ability regardless of type.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon is immune to damaging moves that are not super effective against it.\n\nMoves that inflict fixed damage, such as night shade or seismic toss, are considered super effective if their types are.  Damage not directly dealt by moves, such as damage from weather, a status ailment, or spikes, is not prevented.\n\nThis ability cannot be copied with role play or traded away with skill swap, but it can be copied with trace, disabled with gastro acid, or changed with worry seed.  This Pokémon can still use Role Play itself to lose this ability, but not Skill Swap.\n\nIf this Pokémon has a substitute, this ability will block moves as usual and any moves not blocked will react to the Substitute as usual.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Protects against damaging moves that are not super effective.",
    },
    pokemon: ["shedinja"],
  },
  "26": {
    id: 26,
    name: "levitate",
    names: "Levitate",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon is immune to ground-type moves, spikes, toxic spikes, and arena trap.\n\nThis ability is disabled during gravity or ingrain, or while holding an iron ball.  This ability is not disabled during roost.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Evades ground moves.",
    },
    pokemon: [
      "gastly",
      "haunter",
      "koffing",
      "weezing",
      "misdreavus",
      "unown",
      "vibrava",
      "flygon",
      "lunatone",
      "solrock",
      "baltoy",
      "claydol",
      "duskull",
      "chimecho",
      "latias",
      "latios",
      "mismagius",
      "chingling",
      "bronzor",
      "bronzong",
      "carnivine",
      "rotom",
      "uxie",
      "mesprit",
      "azelf",
      "cresselia",
      "tynamo",
      "eelektrik",
      "eelektross",
      "cryogonal",
      "hydreigon",
      "vikavolt",
      "giratina-origin",
      "rotom-heat",
      "rotom-wash",
      "rotom-frost",
      "rotom-fan",
      "rotom-mow",
      "latias-mega",
      "latios-mega",
      "vikavolt-totem",
      "weezing-galar",
    ],
  },
  "27": {
    id: 27,
    name: "effect-spore",
    names: "Effect Spore",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.\n\nNothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact.",
    },
    pokemon: [
      "vileplume",
      "paras",
      "parasect",
      "shroomish",
      "breloom",
      "foongus",
      "amoonguss",
      "morelull",
      "shiinotic",
      "gossifleur",
      "eldegoss",
    ],
  },
  "28": {
    id: 28,
    name: "synchronize",
    names: "Synchronize",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        effect_entries: [
          {
            effect:
              "Kann das Wesen von Pokémon mit denen in der Spielwelt interagiert wird nicht verändern.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Cannot influence the natures of Pokémon encountered by interacting with them on the overworld.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        effect_entries: [
          {
            effect: "Gibt schwere poison als normale poison zurück.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Passes back bad poison as regular poison.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "Whenever this Pokémon is burned, paralyzed, or poisoned, the Pokémon who gave this Pokémon that ailment is also given the ailment.\n\nThis ability passes back bad poison when this Pokémon is badly poisoned.  This ability cannot pass on a status ailment that the Pokémon did not directly receive from another Pokémon, such as the poison from toxic spikes or the burn from a flame orb.\n\nOverworld: If the lead Pokémon has this ability, wild Pokémon have a 50% chance of having the lead Pokémon's nature, and a 50% chance of being given a random nature as usual, including the lead Pokémon's nature.  This does not work on Pokémon received outside of battle or roaming legendaries.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them.",
    },
    pokemon: [
      "abra",
      "kadabra",
      "alakazam",
      "mew",
      "natu",
      "xatu",
      "espeon",
      "umbreon",
      "ralts",
      "kirlia",
      "gardevoir",
      "munna",
      "musharna",
      "elgyem",
      "beheeyem",
      "indeedee-male",
      "rabsca",
      "indeedee-female",
    ],
  },
  "29": {
    id: 29,
    name: "clear-body",
    names: "Clear Body",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon cannot have its stats lowered by other Pokémon.\n\nThis ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis.  This Pokémon can still be passed negative stat modifiers through guard swap, heart swap, or power swap.\n\nThis ability functions identically to white smoke in battle.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents stats from being lowered by other Pokémon.",
    },
    pokemon: [
      "tentacool",
      "tentacruel",
      "beldum",
      "metang",
      "metagross",
      "regirock",
      "regice",
      "registeel",
      "klink",
      "klang",
      "klinklang",
      "carbink",
      "diancie",
      "dreepy",
      "drakloak",
      "dragapult",
      "nacli",
      "naclstack",
      "garganacl",
    ],
  },
  "30": {
    id: 30,
    name: "natural-cure",
    names: "Natural Cure",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon is cured of any major status ailment when it is switched out for another Pokémon.\n\nIf this ability is acquired during battle, the Pokémon is cured upon leaving battle before losing the temporary ability.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Cures any major status ailment upon switching out.",
    },
    pokemon: [
      "chansey",
      "staryu",
      "starmie",
      "corsola",
      "blissey",
      "celebi",
      "roselia",
      "swablu",
      "altaria",
      "budew",
      "roserade",
      "happiny",
      "shaymin-land",
      "phantump",
      "trevenant",
      "comfey",
      "pawmi",
      "pawmo",
      "pawmot",
    ],
  },
  "31": {
    id: 31,
    name: "lightning-rod",
    names: "Lightning Rod",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        effect_entries: [
          {
            effect:
              "Betrifft keine electric-Attacken die keinen Schaden anrichten, wie thunder wave. Erhöht die Anzahl an Trainer-Anrufen wenn irgendein Pokémon im Team diese Fähigkeit hat.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Does not affect non-damaging electric moves, i.e. thunder wave.  Increases the frequency of Match Call calls on the overworld if any party Pokémon has this ability.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        effect_entries: [
          {
            effect:
              "Leitet electric-Attacken um, ohne ihre Effekte zu deaktivieren oder einen special attack Bonus zu gewähren. Leitet hidden power nicht um.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Redirects electric moves without negating them or granting any Special Attack boost.  Does not redirect hidden power.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "All other Pokémon's single-target electric-type moves are redirected to this Pokémon if it is an eligible target.  Other Pokémon's Electric moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.\n\nIf the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.\n\nIf the Pokémon is a ground-type and thus immune to Electric moves, its immunity prevents the Special Attack boost.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Redirects single-target electric moves to this Pokémon where possible.  Absorbs Electric moves, raising Special Attack one stage.",
    },
    pokemon: [
      "pikachu",
      "raichu",
      "cubone",
      "marowak",
      "rhyhorn",
      "rhydon",
      "goldeen",
      "seaking",
      "pichu",
      "electrike",
      "manectric",
      "plusle",
      "rhyperior",
      "blitzle",
      "zebstrika",
      "togedemaru",
      "pincurchin",
      "sceptile-mega",
      "pikachu-rock-star",
      "pikachu-belle",
      "pikachu-pop-star",
      "pikachu-phd",
      "pikachu-libre",
      "pikachu-cosplay",
      "pikachu-original-cap",
      "pikachu-hoenn-cap",
      "pikachu-sinnoh-cap",
      "pikachu-unova-cap",
      "pikachu-kalos-cap",
      "pikachu-alola-cap",
      "marowak-alola",
      "pikachu-partner-cap",
      "marowak-totem",
      "togedemaru-totem",
      "pikachu-starter",
      "pikachu-world-cap",
      "pikachu-gmax",
    ],
  },
  "32": {
    id: 32,
    name: "serene-grace",
    names: "Serene Grace",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves have twice their usual effect chance.\n\nAn effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, flamethrower's chance of burning the target is doubled, but protect's chance of success and air cutter's increased critical hit rate are unaffected.\n\nsecret power is unaffected.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles the chance of moves' extra effects occurring.",
    },
    pokemon: [
      "chansey",
      "togepi",
      "togetic",
      "dunsparce",
      "blissey",
      "jirachi",
      "happiny",
      "togekiss",
      "deerling",
      "sawsbuck",
      "meloetta-aria",
      "dudunsparce",
      "shaymin-sky",
      "meloetta-pirouette",
      "dudunsparce-three-segment",
    ],
  },
  "33": {
    id: 33,
    name: "swift-swim",
    names: "Swift Swim",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Speed is doubled during rain.\n\nThis bonus does not count as a stat modifier.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles Speed during rain.",
    },
    pokemon: [
      "psyduck",
      "golduck",
      "poliwag",
      "poliwhirl",
      "poliwrath",
      "horsea",
      "goldeen",
      "seaking",
      "magikarp",
      "omanyte",
      "omastar",
      "kabuto",
      "kabutops",
      "qwilfish",
      "mantine",
      "kingdra",
      "lotad",
      "lombre",
      "ludicolo",
      "surskit",
      "anorith",
      "armaldo",
      "feebas",
      "huntail",
      "gorebyss",
      "relicanth",
      "luvdisc",
      "buizel",
      "floatzel",
      "finneon",
      "lumineon",
      "mantyke",
      "tympole",
      "palpitoad",
      "seismitoad",
      "tirtouga",
      "carracosta",
      "beartic",
      "chewtle",
      "drednaw",
      "arrokuda",
      "barraskewda",
      "overqwil",
      "swampert-mega",
      "drednaw-gmax",
      "qwilfish-hisui",
    ],
  },
  "34": {
    id: 34,
    name: "chlorophyll",
    names: "Chlorophyll",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Speed is doubled during strong sunlight.\n\nThis bonus does not count as a stat modifier.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles Speed during strong sunlight.",
    },
    pokemon: [
      "bulbasaur",
      "ivysaur",
      "venusaur",
      "oddish",
      "gloom",
      "vileplume",
      "bellsprout",
      "weepinbell",
      "victreebel",
      "exeggcute",
      "exeggutor",
      "tangela",
      "bellossom",
      "hoppip",
      "skiploom",
      "jumpluff",
      "sunkern",
      "sunflora",
      "seedot",
      "nuzleaf",
      "shiftry",
      "tropius",
      "cherubi",
      "tangrowth",
      "leafeon",
      "sewaddle",
      "swadloon",
      "leavanny",
      "cottonee",
      "whimsicott",
      "petilil",
      "lilligant",
      "maractus",
      "deerling",
      "sawsbuck",
      "capsakid",
      "scovillain",
      "venusaur-gmax",
      "lilligant-hisui",
    ],
  },
  "35": {
    id: 35,
    name: "illuminate",
    names: "Illuminate",
    effect_changes: [],
    effect_entries: {
      effect:
        "Overworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.\n\nThis ability has no effect in battle.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles the wild encounter rate.",
    },
    pokemon: [
      "staryu",
      "starmie",
      "chinchou",
      "lanturn",
      "volbeat",
      "watchog",
      "morelull",
      "shiinotic",
    ],
  },
  "36": {
    id: 36,
    name: "trace",
    names: "Trace",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Kann flower gift und wonder guard kopieren.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Can copy flower gift and wonder guard.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        effect_entries: [
          {
            effect: "Kann forecast und trace kopieren.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Can copy forecast and trace.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "When this Pokémon enters battle, it copies a random opponent's ability.\n\nThis ability cannot copy flower gift, forecast, illusion, imposter, multitype, trace, wonder guard, or zen mode.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Copies an opponent's ability upon entering battle.",
    },
    pokemon: [
      "porygon",
      "porygon2",
      "ralts",
      "kirlia",
      "gardevoir",
      "alakazam-mega",
    ],
  },
  "37": {
    id: 37,
    name: "huge-power",
    names: "Huge Power",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Attack is doubled while in battle.\n\nThis bonus does not count as a stat modifier.\n\nThis ability functions identically to pure power.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles Attack in battle.",
    },
    pokemon: [
      "marill",
      "azumarill",
      "azurill",
      "bunnelby",
      "diggersby",
      "mawile-mega",
    ],
  },
  "38": {
    id: 38,
    name: "poison-point",
    names: "Poison Point",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Has a 30% chance of poisoning attacking Pokémon on contact.",
    },
    pokemon: [
      "nidoran-f",
      "nidorina",
      "nidoqueen",
      "nidoran-m",
      "nidorino",
      "nidoking",
      "seadra",
      "qwilfish",
      "roselia",
      "budew",
      "roserade",
      "venipede",
      "whirlipede",
      "scolipede",
      "skrelp",
      "dragalge",
      "overqwil",
      "clodsire",
      "qwilfish-hisui",
      "wooper-paldea",
    ],
  },
  "39": {
    id: 39,
    name: "inner-focus",
    names: "Inner Focus",
    effect_changes: [],
    effect_entries: {
      effect: "This Pokémon cannot flinch.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents flinching.",
    },
    pokemon: [
      "zubat",
      "golbat",
      "abra",
      "kadabra",
      "alakazam",
      "farfetchd",
      "drowzee",
      "hypno",
      "hitmonchan",
      "kangaskhan",
      "dragonite",
      "crobat",
      "umbreon",
      "girafarig",
      "sneasel",
      "raikou",
      "entei",
      "suicune",
      "snorunt",
      "glalie",
      "riolu",
      "lucario",
      "throh",
      "sawk",
      "darumaka",
      "mienfoo",
      "mienshao",
      "pawniard",
      "bisharp",
      "mudbray",
      "mudsdale",
      "oranguru",
      "indeedee-male",
      "kubfu",
      "annihilape",
      "gallade-mega",
      "darumaka-galar",
      "sneasel-hisui",
    ],
  },
  "40": {
    id: 40,
    name: "magma-armor",
    names: "Magma Armor",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon cannot be frozen.\n\nIf a Pokémon is frozen and acquires this ability, it will immediately thaw out; this includes when regaining a lost ability upon leaving battle.\n\nOverworld: If any Pokémon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pokémon have this ability or flame body.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents freezing.",
    },
    pokemon: ["slugma", "magcargo", "camerupt"],
  },
  "41": {
    id: 41,
    name: "water-veil",
    names: "Water Veil",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon cannot be burned.\n\nIf a Pokémon is burned and acquires this ability, its burn is healed; this includes when regaining a lost ability upon leaving battle.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents burns.",
    },
    pokemon: [
      "goldeen",
      "seaking",
      "mantine",
      "wailmer",
      "wailord",
      "huntail",
      "buizel",
      "floatzel",
      "finneon",
      "lumineon",
      "mantyke",
      "finizen",
      "finizen",
      "dondozo",
    ],
  },
  "42": {
    id: 42,
    name: "magnet-pull",
    names: "Magnet Pull",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "While this Pokémon is in battle, opposing steel-type Pokémon cannot flee or switch out.\n\nPokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.\n\nOverworld: If the lead Pokémon has this ability, Steel-type Pokémon have a higher encounter rate.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents steel opponents from fleeing or switching out.",
    },
    pokemon: [
      "magnemite",
      "magneton",
      "nosepass",
      "magnezone",
      "probopass",
      "meltan",
      "geodude-alola",
      "graveler-alola",
      "golem-alola",
    ],
  },
  "43": {
    id: 43,
    name: "soundproof",
    names: "Soundproof",
    effect_changes: [
      {
        effect_entries: [
          {
            effect:
              "Hindert heal bell daran, das Pokémon zu heilen, auch außerhalb vom Kampf.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Prevents heal bell from curing the Pokémon, whether or not it is in battle.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon is immune to moves flagged as being sound-based.\n\nheal bell is unaffected.  uproar still prevents this Pokémon from sleeping.  This Pokémon can still receive a Perish Song counter through baton pass, and will retain a Perish Song counter if it acquires this ability after Perish Song is used.\n\nhowl, roar of time, sonic boom, and yawn are not flagged as sound-based.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Protects against sound-based moves.",
    },
    pokemon: [
      "voltorb",
      "electrode",
      "mr-mime",
      "whismur",
      "loudred",
      "exploud",
      "shieldon",
      "bastiodon",
      "mime-jr",
      "snover",
      "abomasnow",
      "bouffalant",
      "jangmo-o",
      "hakamo-o",
      "kommo-o",
      "kommo-o-totem",
      "voltorb-hisui",
      "electrode-hisui",
    ],
  },
  "44": {
    id: 44,
    name: "rain-dish",
    names: "Rain Dish",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon heals for 1/16 of its maximum HP after each turn during rain.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Heals for 1/16 max HP after each turn during rain.",
    },
    pokemon: [
      "squirtle",
      "wartortle",
      "blastoise",
      "tentacool",
      "tentacruel",
      "lotad",
      "lombre",
      "ludicolo",
      "wingull",
      "pelipper",
      "surskit",
      "morelull",
      "shiinotic",
      "blastoise-gmax",
    ],
  },
  "45": {
    id: 45,
    name: "sand-stream",
    names: "Sand Stream",
    effect_changes: [],
    effect_entries: {
      effect:
        "The weather changes to a sandstorm when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, drought, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Summons a sandstorm that lasts indefinitely upon entering battle.",
    },
    pokemon: [
      "tyranitar",
      "hippopotas",
      "hippowdon",
      "gigalith",
      "tyranitar-mega",
    ],
  },
  "46": {
    id: 46,
    name: "pressure",
    names: "Pressure",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        effect_entries: [
          {
            effect:
              "Betrifft keine Attacken von Teammitgliedern die alle anderen Pokémon als Ziel haben. Diese Fähigkeit wird im Kampf nicht angekündigt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Does not affect friendly Pokémon's moves that target all other Pokémon.  This ability's presence is not announced upon entering battle.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "Moves targetting this Pokémon use one extra PP.\n\nThis ability stacks if multiple targets have it.  This ability still affects moves that fail or miss.  This ability does not affect ally moves that target either the entire field or just its side, nor this Pokémon's self-targetted moves; it does, however, affect single-targetted ally moves aimed at this Pokémon, ally moves that target all other Pokémon, and opponents' moves that target the entire field.  If this ability raises a move's PP cost above its remaining PP, it will use all remaining PP.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Increases the PP cost of moves targetting the Pokémon by one.",
    },
    pokemon: [
      "aerodactyl",
      "articuno",
      "zapdos",
      "moltres",
      "mewtwo",
      "raikou",
      "entei",
      "suicune",
      "lugia",
      "ho-oh",
      "wailmer",
      "wailord",
      "dusclops",
      "absol",
      "deoxys-normal",
      "vespiquen",
      "spiritomb",
      "weavile",
      "dusknoir",
      "dialga",
      "palkia",
      "giratina-altered",
      "pawniard",
      "bisharp",
      "kyurem",
      "corviknight",
      "eternatus",
      "sneasler",
      "kingambit",
      "deoxys-attack",
      "deoxys-defense",
      "deoxys-speed",
      "eternatus-eternamax",
      "corviknight-gmax",
      "dialga-origin",
      "palkia-origin",
    ],
  },
  "47": {
    id: 47,
    name: "thick-fat",
    names: "Thick Fat",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon takes half as much damage from fire- and ice-type moves.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Halves damage from fire and ice moves.",
    },
    pokemon: [
      "seel",
      "dewgong",
      "snorlax",
      "marill",
      "azumarill",
      "swinub",
      "piloswine",
      "miltank",
      "makuhita",
      "hariyama",
      "azurill",
      "spoink",
      "grumpig",
      "spheal",
      "sealeo",
      "walrein",
      "purugly",
      "munchlax",
      "mamoswine",
      "tepig",
      "pignite",
      "appletun",
      "lechonk",
      "oinkologne",
      "cetoddle",
      "cetitan",
      "venusaur-mega",
      "rattata-alola",
      "raticate-alola",
      "raticate-totem-alola",
      "snorlax-gmax",
      "appletun-gmax",
      "oinkologne-female",
    ],
  },
  "48": {
    id: 48,
    name: "early-bird",
    names: "Early Bird",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's remaining sleep turn count falls by 2 rather than 1.\n\nIf this Pokémon's sleep counter is at 1, it will fall to 0 and then the Pokémon will wake up.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Makes sleep pass twice as quickly.",
    },
    pokemon: [
      "doduo",
      "dodrio",
      "kangaskhan",
      "ledyba",
      "ledian",
      "natu",
      "xatu",
      "sunkern",
      "sunflora",
      "girafarig",
      "houndour",
      "houndoom",
      "seedot",
      "nuzleaf",
      "shiftry",
      "smoliv",
      "dolliv",
    ],
  },
  "49": {
    id: 49,
    name: "flame-body",
    names: "Flame Body",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being burned.\n\nOverworld: If any Pokémon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pokémon have this ability or magma armor.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Has a 30% chance of burning attacking Pokémon on contact.",
    },
    pokemon: [
      "ponyta",
      "rapidash",
      "magmar",
      "moltres",
      "slugma",
      "magcargo",
      "magby",
      "magmortar",
      "heatran",
      "litwick",
      "lampent",
      "chandelure",
      "larvesta",
      "volcarona",
      "fletchinder",
      "talonflame",
      "carkol",
      "coalossal",
      "sizzlipede",
      "centiskorch",
      "charcadet",
      "coalossal-gmax",
      "centiskorch-gmax",
    ],
  },
  "50": {
    id: 50,
    name: "run-away",
    names: "Run Away",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Ensures success fleeing from wild battles.",
    },
    pokemon: [
      "caterpie",
      "weedle",
      "rattata",
      "raticate",
      "oddish",
      "venonat",
      "ponyta",
      "rapidash",
      "doduo",
      "dodrio",
      "eevee",
      "sentret",
      "furret",
      "aipom",
      "dunsparce",
      "snubbull",
      "poochyena",
      "wurmple",
      "nincada",
      "kricketot",
      "pachirisu",
      "buneary",
      "patrat",
      "lillipup",
      "nickit",
      "thievul",
      "wooloo",
      "tandemaus",
      "maschiff",
      "dudunsparce",
      "eevee-starter",
      "ponyta-galar",
      "rapidash-galar",
      "eevee-gmax",
      "dudunsparce-three-segment",
      "gimmighoul-roaming",
      "gimmighoul-roaming",
    ],
  },
  "51": {
    id: 51,
    name: "keen-eye",
    names: "Keen Eye",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon cannot have its accuracy lowered.\n\nThis ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.\n\nOverworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents accuracy from being lowered.",
    },
    pokemon: [
      "pidgey",
      "pidgeotto",
      "pidgeot",
      "spearow",
      "fearow",
      "farfetchd",
      "hitmonchan",
      "sentret",
      "furret",
      "hoothoot",
      "noctowl",
      "sneasel",
      "skarmory",
      "wingull",
      "pelipper",
      "sableye",
      "starly",
      "glameow",
      "stunky",
      "skuntank",
      "chatot",
      "skorupi",
      "drapion",
      "patrat",
      "watchog",
      "ducklett",
      "swanna",
      "rufflet",
      "braviary",
      "espurr",
      "meowstic-male",
      "pikipek",
      "trumbeak",
      "toucannon",
      "rockruff",
      "lycanroc-midday",
      "rookidee",
      "corvisquire",
      "bombirdier",
      "meowstic-female",
      "lycanroc-midnight",
      "sneasel-hisui",
      "braviary-hisui",
    ],
  },
  "52": {
    id: 52,
    name: "hyper-cutter",
    names: "Hyper Cutter",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        effect_entries: [
          {
            effect:
              "Verdoppelt den Radius in dem cut Gras entfernt, wenn irgendein Pokémon im Team diese Fähigkeit hat.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Doubles cut's grass-cutting radius on the overworld if any party Pokémon has this ability.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon's Attack cannot be lowered by other Pokémon.\n\nThis ability does not prevent any Attack losses other than stat modifiers, such as the Attack cut from a burn.  This Pokémon can still be passed negative Attack modifiers through heart swap or power swap.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents Attack from being lowered by other Pokémon.",
    },
    pokemon: [
      "krabby",
      "kingler",
      "pinsir",
      "gligar",
      "mawile",
      "trapinch",
      "corphish",
      "crawdaunt",
      "gliscor",
      "crabrawler",
      "crabominable",
      "kingler-gmax",
    ],
  },
  "53": {
    id: 53,
    name: "pickup",
    names: "Pickup",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat im Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no effect in battle.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "At the end of each turn, if another Pokémon consumed or Flung a held item that turn, this Pokémon picks up the item if it is not already holding one.  After each battle, this Pokémon has a 10% chance of picking up an item if it is not already holding one.\n\nThe air balloon and eject button cannot be picked up.\n\nThe items that may be found vary by game, and, since Pokémon Emerald, by the Pokémon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
    },
    pokemon: [
      "meowth",
      "aipom",
      "teddiursa",
      "phanpy",
      "zigzagoon",
      "linoone",
      "pachirisu",
      "ambipom",
      "munchlax",
      "lillipup",
      "bunnelby",
      "diggersby",
      "dedenne",
      "pumpkaboo-average",
      "gourgeist-average",
      "pikipek",
      "trumbeak",
      "tandemaus",
      "greavard",
      "pumpkaboo-small",
      "pumpkaboo-large",
      "pumpkaboo-super",
      "gourgeist-small",
      "gourgeist-large",
      "gourgeist-super",
      "meowth-alola",
      "meowth-galar",
      "zigzagoon-galar",
      "linoone-galar",
      "meowth-gmax",
    ],
  },
  "54": {
    id: 54,
    name: "truant",
    names: "Truant",
    effect_changes: [],
    effect_entries: {
      effect:
        'Every second turn on which this Pokémon should attempt to use a move, it will instead do nothing ("loaf around").\n\nLoafing around interrupts moves that take multiple turns the same way paralysis, flinching, etc do.  Most such moves, for example bide or rollout, are simply cut off upon loafing around.  Attacks with a recharge turn, such as hyper beam, do not have to recharge; attacks with a preparation turn, such as fly, do not end up being used.  Moves that are forced over multiple turns and keep going through failure, such as outrage, uproar, or any move forced by encore, keep going as usual.\n\nIf this Pokémon is confused, its confusion is not checked when loafing around; the Pokémon cannot hurt itself, and its confusion does not end or come closer to ending.\n\nIf this Pokémon attempts to move but fails, e.g. because of paralysis or gravity, it still counts as having moved and will loaf around the next turn.  If it does not attempt to move, e.g. because it is asleep or frozen, whatever it would have done will be postponed until its next attempt; that is, it will either loaf around or move as usual, depending on what it last did.\n\nThis ability cannot be changed with worry seed, but it can be disabled with gastro acid, changed with role play, or traded away with skill swap.',
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Skips every second turn.",
    },
    pokemon: ["slakoth", "slaking", "durant"],
  },
  "55": {
    id: 55,
    name: "hustle",
    names: "Hustle",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.\n\nSpecial moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
    },
    pokemon: [
      "rattata",
      "raticate",
      "nidoran-f",
      "nidorina",
      "nidoran-m",
      "nidorino",
      "togepi",
      "togetic",
      "corsola",
      "remoraid",
      "delibird",
      "combee",
      "togekiss",
      "darumaka",
      "rufflet",
      "durant",
      "deino",
      "zweilous",
      "flapple",
      "dracozolt",
      "squawkabilly",
      "rattata-alola",
      "raticate-alola",
      "raticate-totem-alola",
      "darumaka-galar",
      "flapple-gmax",
      "lilligant-hisui",
      "squawkabilly-blue-plumage",
      "squawkabilly-yellow-plumage",
      "squawkabilly-white-plumage",
    ],
  },
  "56": {
    id: 56,
    name: "cute-charm",
    names: "Cute Charm",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.\n\nOverworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Has a 30% chance of infatuating attacking Pokémon on contact.",
    },
    pokemon: [
      "clefairy",
      "clefable",
      "jigglypuff",
      "wigglytuff",
      "cleffa",
      "igglybuff",
      "skitty",
      "delcatty",
      "milotic",
      "lopunny",
      "minccino",
      "cinccino",
      "sylveon",
      "stufful",
      "enamorus-incarnate",
    ],
  },
  "57": {
    id: 57,
    name: "plus",
    names: "Plus",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Funktioniert nur wenn es mit minus kombiniert wird.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Powers up only when paired with minus.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon has 1.5× its Special Attack if any friendly Pokémon has plus or minus.\n\nThis bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus.",
    },
    pokemon: [
      "mareep",
      "flaaffy",
      "ampharos",
      "plusle",
      "klink",
      "klang",
      "klinklang",
      "dedenne",
      "toxtricity-amped",
      "toxtricity-amped-gmax",
    ],
  },
  "58": {
    id: 58,
    name: "minus",
    names: "Minus",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Funktioniert nur wenn es mit plus kombiniert wird.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Powers up only when paired with plus.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon has 1.5× its Special Attack if any friendly Pokémon has plus or minus.\n\nThis bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus.",
    },
    pokemon: [
      "electrike",
      "manectric",
      "minun",
      "klink",
      "klang",
      "klinklang",
      "toxtricity-low-key",
      "toxtricity-low-key-gmax",
    ],
  },
  "59": {
    id: 59,
    name: "forecast",
    names: "Forecast",
    effect_changes: [],
    effect_entries: {
      effect:
        "During rain, strong sunlight, or hail, this Pokémon's type changes to water, fire, or ice, respectively, and its form changes to match.\n\nThis ability has no effect for any Pokémon other than castform.\n\nIf the weather ends or becomes anything that does not trigger this ability, or a Pokémon with air lock or cloud nine enters battle, this Pokémon's type and form revert to their default.  If this ability is lost or disabled, this Pokémon cannot change its current type and form until it regains its ability.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Changes castform's type and form to match the weather.",
    },
    pokemon: ["castform", "castform-sunny", "castform-rainy", "castform-snowy"],
  },
  "60": {
    id: 60,
    name: "sticky-hold",
    names: "Sticky Hold",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon's hold item cannot be removed by other Pokémon.\n\nDamaging moves that would remove this Pokémon's item can still inflict damage against this Pokémon, e.g. knock off or pluck.  This Pokémon can still use moves that involve the loss of its own item, e.g. fling or trick.\n\nOverworld: If the lead Pokémon has this ability, the encounter rate while fishing is increased.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents a held item from being removed by other Pokémon.",
    },
    pokemon: [
      "grimer",
      "muk",
      "gulpin",
      "swalot",
      "shellos",
      "gastrodon",
      "trubbish",
      "accelgor",
    ],
  },
  "61": {
    id: 61,
    name: "shed-skin",
    names: "Shed Skin",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Die Chance, dass der Effekt eintritt, beträgt 30%.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Chance of taking effect is 30%.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        effect_entries: [
          {
            effect: "Die Chance, dass der Effekt eintritt, beträgt 33%.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Chance of taking effect is 33%.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Has a 33% chance of curing any major status ailment after each turn.",
    },
    pokemon: [
      "metapod",
      "kakuna",
      "ekans",
      "arbok",
      "dratini",
      "dragonair",
      "pupitar",
      "silcoon",
      "cascoon",
      "seviper",
      "kricketot",
      "burmy",
      "scraggy",
      "scrafty",
      "karrablast",
      "spewpa",
      "silicobra",
      "sandaconda",
      "rellor",
      "cyclizar",
      "sandaconda-gmax",
    ],
  },
  "62": {
    id: 62,
    name: "guts",
    names: "Guts",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat keinen Effekt während das Pokémon schläft.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Does not take effect during sleep.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "Whenever this Pokémon is asleep, burned, paralyzed, or poisoned, it has 1.5× its Attack.  This Pokémon is not affected by the usual Attack cut from a burn.\n\nThis bonus does not count as a stat modifier.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Increases Attack to 1.5× with a major status ailment.",
    },
    pokemon: [
      "rattata",
      "raticate",
      "machop",
      "machoke",
      "machamp",
      "flareon",
      "heracross",
      "ursaring",
      "tyrogue",
      "larvitar",
      "taillow",
      "swellow",
      "makuhita",
      "hariyama",
      "shinx",
      "luxio",
      "luxray",
      "timburr",
      "gurdurr",
      "conkeldurr",
      "throh",
      "obstagoon",
      "ursaluna",
      "squawkabilly",
      "machamp-gmax",
      "squawkabilly-blue-plumage",
    ],
  },
  "63": {
    id: 63,
    name: "marvel-scale",
    names: "Marvel Scale",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever this Pokémon has a major status ailment, it has 1.5× its Defense.\n\nThis bonus does not count as a stat modifier.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Increases Defense to 1.5× with a major status ailment.",
    },
    pokemon: ["dratini", "dragonair", "milotic"],
  },
  "64": {
    id: 64,
    name: "liquid-ooze",
    names: "Liquid Ooze",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever a Pokémon would heal after hitting this Pokémon with a leeching move like absorb, it instead loses as many HP as it would usually gain.\n\ndream eater is unaffected.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Damages opponents using leeching moves for as much as they would heal.",
    },
    pokemon: ["tentacool", "tentacruel", "gulpin", "swalot"],
  },
  "65": {
    id: 65,
    name: "overgrow",
    names: "Overgrow",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
    },
    pokemon: [
      "bulbasaur",
      "ivysaur",
      "venusaur",
      "chikorita",
      "bayleef",
      "meganium",
      "treecko",
      "grovyle",
      "sceptile",
      "turtwig",
      "grotle",
      "torterra",
      "snivy",
      "servine",
      "serperior",
      "pansage",
      "simisage",
      "chespin",
      "quilladin",
      "chesnaught",
      "rowlet",
      "dartrix",
      "decidueye",
      "grookey",
      "thwackey",
      "rillaboom",
      "sprigatito",
      "floragato",
      "meowscarada",
      "venusaur-gmax",
      "rillaboom-gmax",
      "decidueye-hisui",
    ],
  },
  "66": {
    id: 66,
    name: "blaze",
    names: "Blaze",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.",
    },
    pokemon: [
      "charmander",
      "charmeleon",
      "charizard",
      "cyndaquil",
      "quilava",
      "typhlosion",
      "torchic",
      "combusken",
      "blaziken",
      "chimchar",
      "monferno",
      "infernape",
      "tepig",
      "pignite",
      "emboar",
      "pansear",
      "simisear",
      "fennekin",
      "braixen",
      "delphox",
      "litten",
      "torracat",
      "incineroar",
      "scorbunny",
      "raboot",
      "cinderace",
      "fuecoco",
      "crocalor",
      "skeledirge",
      "charizard-gmax",
      "cinderace-gmax",
      "typhlosion-hisui",
    ],
  },
  "67": {
    id: 67,
    name: "torrent",
    names: "Torrent",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less.",
    },
    pokemon: [
      "squirtle",
      "wartortle",
      "blastoise",
      "totodile",
      "croconaw",
      "feraligatr",
      "mudkip",
      "marshtomp",
      "swampert",
      "piplup",
      "prinplup",
      "empoleon",
      "oshawott",
      "dewott",
      "samurott",
      "panpour",
      "simipour",
      "froakie",
      "frogadier",
      "greninja",
      "popplio",
      "brionne",
      "primarina",
      "sobble",
      "drizzile",
      "inteleon",
      "quaxly",
      "quaxwell",
      "quaquaval",
      "blastoise-gmax",
      "inteleon-gmax",
      "samurott-hisui",
    ],
  },
  "68": {
    id: 68,
    name: "swarm",
    names: "Swarm",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        effect_entries: [
          {
            effect:
              "Erhöht die Anzahl an Rufen die man außerhalb vom Kampf hört, wenn irgendein Pokémon im Team diese Fähigkeit hat.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Increases the frequency of cries heard on the overworld if any party Pokémon has this ability.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
    ],
    effect_entries: {
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its bug-type moves inflict 1.5× as much regular damage.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is increased.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
    },
    pokemon: [
      "beedrill",
      "scyther",
      "ledyba",
      "ledian",
      "spinarak",
      "ariados",
      "scizor",
      "heracross",
      "beautifly",
      "volbeat",
      "kricketune",
      "mothim",
      "sewaddle",
      "leavanny",
      "venipede",
      "whirlipede",
      "scolipede",
      "karrablast",
      "escavalier",
      "joltik",
      "galvantula",
      "durant",
      "larvesta",
      "volcarona",
      "grubbin",
      "blipbug",
      "dottler",
      "orbeetle",
      "kleavor",
      "nymble",
      "lokix",
      "orbeetle-gmax",
    ],
  },
  "69": {
    id: 69,
    name: "rock-head",
    names: "Rock Head",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon does not receive recoil damage from its recoil moves.\n\nstruggle's recoil is unaffected.  This ability does not prevent crash damage from missing with jump kick or high jump kick.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Protects against recoil damage.",
    },
    pokemon: [
      "geodude",
      "graveler",
      "golem",
      "onix",
      "cubone",
      "marowak",
      "rhyhorn",
      "rhydon",
      "aerodactyl",
      "sudowoodo",
      "steelix",
      "aron",
      "lairon",
      "aggron",
      "relicanth",
      "bagon",
      "shelgon",
      "bonsly",
      "tyrantrum",
      "basculin-blue-striped",
      "marowak-alola",
      "marowak-totem",
    ],
  },
  "70": {
    id: 70,
    name: "drought",
    names: "Drought",
    effect_changes: [],
    effect_entries: {
      effect:
        "The weather changes to strong sunlight when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Summons strong sunlight that lasts indefinitely upon entering battle.",
    },
    pokemon: ["vulpix", "ninetales", "torkoal", "groudon", "charizard-mega-y"],
  },
  "71": {
    id: 71,
    name: "arena-trap",
    names: "Arena Trap",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.  flying-type Pokémon and Pokémon in the air, e.g. due to levitate or magnet rise, are unaffected.\n\nPokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Prevents opponents from fleeing or switching out.  Eluded by flying-types and Pokémon in the air.",
    },
    pokemon: ["diglett", "dugtrio", "trapinch"],
  },
  "72": {
    id: 72,
    name: "vital-spirit",
    names: "Vital Spirit",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon cannot be asleep.\n\nThis causes rest to fail altogether.  If a Pokémon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle.\n\nThis ability functions identically to insomnia in battle.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents sleep.",
    },
    pokemon: [
      "mankey",
      "primeape",
      "electabuzz",
      "magmar",
      "delibird",
      "tyrogue",
      "elekid",
      "magby",
      "vigoroth",
      "electivire",
      "magmortar",
      "lillipup",
      "rockruff",
      "annihilape",
      "lycanroc-midnight",
      "mr-mime-galar",
    ],
  },
  "73": {
    id: 73,
    name: "white-smoke",
    names: "White Smoke",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Hat außerhalb vom Kampf keinen Effekt.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Has no overworld effect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon cannot have its stats lowered by other Pokémon.\n\nThis ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis; nor self-inflicted stat drops, such as the Special Attack drop from overheat; nor opponent-triggered stat boosts, such as the Attack boost from swagger.  This Pokémon can still be passed negative stat modifiers through guard swap, heart swap, or power swap.\n\nThis ability functions identically to clear body in battle.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents stats from being lowered by other Pokémon.",
    },
    pokemon: [
      "torkoal",
      "heatmor",
      "sizzlipede",
      "centiskorch",
      "centiskorch-gmax",
    ],
  },
  "74": {
    id: 74,
    name: "pure-power",
    names: "Pure Power",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Attack is doubled in battle.\n\nThis bonus does not count as a stat modifier.\n\nThis ability functions identically to huge power.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles Attack in battle.",
    },
    pokemon: ["meditite", "medicham", "medicham-mega"],
  },
  "75": {
    id: 75,
    name: "shell-armor",
    names: "Shell Armor",
    effect_changes: [],
    effect_entries: {
      effect:
        "Moves cannot score critical hits against this Pokémon.\n\nThis ability functions identically to battle armor.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Protects against critical hits.",
    },
    pokemon: [
      "shellder",
      "cloyster",
      "krabby",
      "kingler",
      "lapras",
      "omanyte",
      "omastar",
      "torkoal",
      "corphish",
      "crawdaunt",
      "clamperl",
      "turtwig",
      "grotle",
      "torterra",
      "oshawott",
      "dewott",
      "samurott",
      "dwebble",
      "crustle",
      "escavalier",
      "shelmet",
      "turtonator",
      "chewtle",
      "drednaw",
      "klawf",
      "slowbro-mega",
      "kingler-gmax",
      "lapras-gmax",
      "drednaw-gmax",
      "samurott-hisui",
    ],
  },
  "76": {
    id: 76,
    name: "air-lock",
    names: "Air Lock",
    effect_changes: [],
    effect_entries: {
      effect:
        "While this Pokémon is in battle, weather can still be in play, but will not have any of its effects.\n\nThis ability functions identically to cloud nine.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Negates all effects of weather, but does not prevent the weather itself.",
    },
    pokemon: ["rayquaza"],
  },
  "77": {
    id: 77,
    name: "tangled-feet",
    names: "Tangled Feet",
    effect_changes: [],
    effect_entries: {
      effect: "When this Pokémon is confused, it has twice its evasion.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles evasion when confused.",
    },
    pokemon: [
      "pidgey",
      "pidgeotto",
      "pidgeot",
      "doduo",
      "dodrio",
      "spinda",
      "chatot",
      "mr-rime",
      "flamigo",
    ],
  },
  "78": {
    id: 78,
    name: "motor-drive",
    names: "Motor Drive",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever an electric-type move hits this Pokémon, its Speed rises one stage, negating any other effect on it.\n\nThis ability will not take effect if this Pokémon is immune to Electric moves.  Electric moves will ignore this Pokémon's substitute.\n\nThis effect includes non-damaging moves, i.e. thunder wave.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Absorbs electric moves, raising Speed one stage.",
    },
    pokemon: ["electivire", "blitzle", "zebstrika", "emolga"],
  },
  "79": {
    id: 79,
    name: "rivalry",
    names: "Rivalry",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.\n\nIf either Pokémon is genderless, damage is unaffected.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender.",
    },
    pokemon: [
      "nidoran-f",
      "nidorina",
      "nidoqueen",
      "nidoran-m",
      "nidorino",
      "nidoking",
      "beautifly",
      "shinx",
      "luxio",
      "luxray",
      "pidove",
      "tranquill",
      "unfezant",
      "axew",
      "fraxure",
      "haxorus",
      "litleo",
      "pyroar",
    ],
  },
  "80": {
    id: 80,
    name: "steadfast",
    names: "Steadfast",
    effect_changes: [],
    effect_entries: {
      effect: "Whenever this Pokémon flinches, its Speed rises one stage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Raises Speed one stage upon flinching.",
    },
    pokemon: [
      "machop",
      "machoke",
      "machamp",
      "scyther",
      "tyrogue",
      "hitmontop",
      "riolu",
      "lucario",
      "gallade",
      "rockruff",
      "lycanroc-midday",
      "dubwool",
      "sirfetchd",
      "kleavor",
      "mewtwo-mega-x",
      "farfetchd-galar",
      "machamp-gmax",
    ],
  },
  "81": {
    id: 81,
    name: "snow-cloak",
    names: "Snow Cloak",
    effect_changes: [],
    effect_entries: {
      effect:
        "During hail, this Pokémon has 1.25× its evasion, and it does not take hail damage regardless of type.\n\nThe evasion bonus does not count as a stat modifier.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in snow.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Increases evasion to 1.25× during hail.  Protects against hail damage.",
    },
    pokemon: [
      "articuno",
      "swinub",
      "piloswine",
      "glaceon",
      "mamoswine",
      "froslass",
      "vanillite",
      "vanillish",
      "cubchoo",
      "beartic",
      "cetoddle",
      "sandshrew-alola",
      "sandslash-alola",
      "vulpix-alola",
      "ninetales-alola",
    ],
  },
  "82": {
    id: 82,
    name: "gluttony",
    names: "Gluttony",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon eats any held Berry triggered by low HP when it falls below 50% of its HP, regardless of the Berry's usual threshold.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
    },
    pokemon: [
      "bellsprout",
      "weepinbell",
      "victreebel",
      "snorlax",
      "shuckle",
      "zigzagoon",
      "linoone",
      "gulpin",
      "swalot",
      "spoink",
      "grumpig",
      "munchlax",
      "pansage",
      "simisage",
      "pansear",
      "simisear",
      "panpour",
      "simipour",
      "heatmor",
      "skwovet",
      "greedent",
      "applin",
      "flapple",
      "appletun",
      "lechonk",
      "oinkologne",
      "rattata-alola",
      "raticate-alola",
      "raticate-totem-alola",
      "grimer-alola",
      "muk-alola",
      "slowpoke-galar",
      "zigzagoon-galar",
      "linoone-galar",
      "snorlax-gmax",
      "flapple-gmax",
      "appletun-gmax",
      "oinkologne-female",
    ],
  },
  "83": {
    id: 83,
    name: "anger-point",
    names: "Anger Point",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever this Pokémon receives a critical hit, its Attack rises to the maximum of 6 stages.\n\nThis ability will still take effect if the critical hit is received by a substitute.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises Attack to the maximum of six stages upon receiving a critical hit.",
    },
    pokemon: [
      "mankey",
      "primeape",
      "tauros",
      "camerupt",
      "sandile",
      "krokorok",
      "krookodile",
      "crabrawler",
      "crabominable",
      "tauros-paldea-combat-breed",
      "tauros-paldea-blaze-breed",
      "tauros-paldea-aqua-breed",
    ],
  },
  "84": {
    id: 84,
    name: "unburden",
    names: "Unburden",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon uses or loses its held item, its Speed is doubled.  If it gains another item or leaves battle, this bonus is lost.\n\nThis includes when the Pokémon drops its item because of knock off.  This bonus does not count as a stat modifier.  There is no notification when this ability takes effect.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles Speed upon using or losing a held item.",
    },
    pokemon: [
      "hitmonlee",
      "treecko",
      "grovyle",
      "sceptile",
      "drifloon",
      "drifblim",
      "purrloin",
      "liepard",
      "accelgor",
      "swirlix",
      "slurpuff",
      "hawlucha",
      "nickit",
      "thievul",
      "shroodle",
      "grafaiai",
    ],
  },
  "85": {
    id: 85,
    name: "heatproof",
    names: "Heatproof",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon takes half as much damage from fire-type moves and burns.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Halves damage from fire moves and burns.",
    },
    pokemon: ["bronzor", "bronzong", "rolycoly"],
  },
  "86": {
    id: 86,
    name: "simple",
    names: "Simple",
    effect_changes: [],
    effect_entries: {
      effect:
        "Each stage of this Pokémon's stat modifiers acts as two stages.  These doubled stages are still limited to a minimum of -6 and a maximum of 6.\n\nThis Pokémon can still accumulate less than -3 or more than 3 stages of stat modifiers, even though the extra ones have no effect after doubling.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Doubles the Pokémon's stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages.",
    },
    pokemon: ["numel", "bidoof", "bibarel", "woobat", "swoobat"],
  },
  "87": {
    id: 87,
    name: "dry-skin",
    names: "Dry Skin",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon takes 1/8 of its maximum HP in damage after each turn during strong sunlight, but it heals for 1/8 of its HP each turn during rain.  This Pokémon takes 1.25× as much damage from fire-type moves, but whenever a water move hits it, it heals for 1/4 its maximum HP instead.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain.  Increases damage from fire moves to 1.25×, but absorbs water moves, healing for 1/4 max HP.",
    },
    pokemon: [
      "paras",
      "parasect",
      "jynx",
      "croagunk",
      "toxicroak",
      "helioptile",
      "heliolisk",
    ],
  },
  "88": {
    id: 88,
    name: "download",
    names: "Download",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle, its Attack or Special Attack, whichever corresponds to its opponents' weaker total defensive stat, rises one stage.  In the event of a tie, Special Attack is raised.\n\nThis ability also takes effect when acquired during a battle.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises the attack stat corresponding to the opponents' weaker defense one stage upon entering battle.",
    },
    pokemon: ["porygon", "porygon2", "porygon-z", "genesect"],
  },
  "89": {
    id: 89,
    name: "iron-fist",
    names: "Iron Fist",
    effect_changes: [],
    effect_entries: {
      effect:
        'Moves flagged as being punch-based have 1.2× their base power for this Pokémon.\n\nsucker punch is not flagged as punch-based; its original, Japanese name only means "surprise attack".',
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Strengthens punch-based moves to 1.2× their power.",
    },
    pokemon: [
      "hitmonchan",
      "ledian",
      "chimchar",
      "monferno",
      "infernape",
      "timburr",
      "gurdurr",
      "conkeldurr",
      "golett",
      "golurk",
      "pancham",
      "pangoro",
      "crabrawler",
      "crabominable",
      "melmetal",
      "pawmi",
      "pawmo",
      "pawmot",
      "melmetal-gmax",
    ],
  },
  "90": {
    id: 90,
    name: "poison-heal",
    names: "Poison Heal",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "poison schadet dem Pokémon außerhalb vom Kampf.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Poison still damages the Pokémon outside of battle.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "If this Pokémon is poisoned, it will heal for 1/8 of its maximum HP after each turn rather than taking damage.  This includes bad poison.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Heals for 1/8 max HP after each turn when poisoned in place of damage.",
    },
    pokemon: ["shroomish", "breloom", "gliscor"],
  },
  "91": {
    id: 91,
    name: "adaptability",
    names: "Adaptability",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon inflicts twice as much damage with moves whose types match its own, rather than the usual same-type attack bonus of 1.5×.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Increases the same-type attack bonus from 1.5× to 2×.",
    },
    pokemon: [
      "eevee",
      "corphish",
      "crawdaunt",
      "feebas",
      "porygon-z",
      "basculin-red-striped",
      "skrelp",
      "dragalge",
      "yungoos",
      "gumshoos",
      "basculegion-male",
      "basculin-blue-striped",
      "lucario-mega",
      "beedrill-mega",
      "gumshoos-totem",
      "eevee-starter",
      "eevee-gmax",
      "basculin-white-striped",
      "basculegion-female",
    ],
  },
  "92": {
    id: 92,
    name: "skill-link",
    names: "Skill Link",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "triple kick wird nicht beeinflusst.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "triple kick is unaffected.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon always hits five times with two-to-five-hit moves, such as icicle spear.  It also bypasses the accuracy checks on triple kick's second and third hits.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Extends two-to-five-hit moves and triple kick to their full length every time.",
    },
    pokemon: [
      "shellder",
      "cloyster",
      "aipom",
      "ambipom",
      "minccino",
      "cinccino",
      "pikipek",
      "trumbeak",
      "toucannon",
      "heracross-mega",
    ],
  },
  "93": {
    id: 93,
    name: "hydration",
    names: "Hydration",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon is cured of any major status ailment after each turn during rain.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Cures any major status ailment after each turn during rain.",
    },
    pokemon: [
      "seel",
      "dewgong",
      "lapras",
      "vaporeon",
      "smoochum",
      "wingull",
      "barboach",
      "whiscash",
      "gorebyss",
      "luvdisc",
      "phione",
      "manaphy",
      "tympole",
      "palpitoad",
      "ducklett",
      "swanna",
      "alomomola",
      "shelmet",
      "accelgor",
      "goomy",
      "sliggoo",
      "goodra",
      "lapras-gmax",
    ],
  },
  "94": {
    id: 94,
    name: "solar-power",
    names: "Solar Power",
    effect_changes: [],
    effect_entries: {
      effect:
        "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight.",
    },
    pokemon: [
      "charmander",
      "charmeleon",
      "charizard",
      "sunkern",
      "sunflora",
      "tropius",
      "helioptile",
      "heliolisk",
      "houndoom-mega",
      "charizard-gmax",
    ],
  },
  "95": {
    id: 95,
    name: "quick-feet",
    names: "Quick Feet",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever this Pokémon has a major status ailment, it has 1.5× its Speed.  This Pokémon is not affected by the usual Speed cut from paralysis.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Increases Speed to 1.5× with a major status ailment.",
    },
    pokemon: [
      "jolteon",
      "granbull",
      "teddiursa",
      "ursaring",
      "poochyena",
      "mightyena",
      "zigzagoon",
      "linoone",
      "shroomish",
      "zigzagoon-galar",
      "linoone-galar",
    ],
  },
  "96": {
    id: 96,
    name: "normalize",
    names: "Normalize",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves all act as if they were normal-type.\n\nMoves that inflict typeless damage do so as usual.  Moves of variable type, such as hidden power, are affected.  They otherwise work as usual, however; weather ball, for example, is always forced to be Normal, but it still has doubled power and looks different during weather.\n\nAs thunder wave is prevented by immunities, unlike most non-damaging moves, it does not affect ghost-type Pokémon under the effect of this ability.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Makes the Pokémon's moves all act normal-type.",
    },
    pokemon: ["skitty", "delcatty"],
  },
  "97": {
    id: 97,
    name: "sniper",
    names: "Sniper",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens critical hits to inflict 3× damage rather than 2×.",
    },
    pokemon: [
      "beedrill",
      "spearow",
      "fearow",
      "horsea",
      "seadra",
      "spinarak",
      "ariados",
      "remoraid",
      "octillery",
      "kingdra",
      "skorupi",
      "drapion",
      "binacle",
      "barbaracle",
      "sobble",
      "drizzile",
      "inteleon",
      "inteleon-gmax",
    ],
  },
  "98": {
    id: 98,
    name: "magic-guard",
    names: "Magic Guard",
    effect_changes: [
      {
        effect_entries: [
          {
            effect:
              "paralysis hindert das Pokémon nicht daran sich zu bewegen, aber der speed Malus bleibt. poison schadet dem Pokémon außerhalb vom Kampf.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Paralysis cannot prevent the Pokémon from moving, though the Speed cut is unaffected.  Poison still damages the Pokémon outside of battle.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon is immune to damage not directly caused by a move.\n\nFor example, this Pokémon takes no damage from from weather, recoil, status ailments, or spikes, but it still suffers from the Attack cut when burned, and a life orb will still power up this Pokémon's moves without damaging it.  Anything that directly depends on such damage will also not happen; for example, leech seed will neither hurt this Pokémon nor heal the opponent, and Pokémon with a jaboca berry or rowap berry will not consume the berry when hit by this Pokémon.\n\nThe following are unaffected: struggle, pain split (whether used by or against this Pokémon), belly drum, substitute, curse, moves that knock the user out, and damage from confusion.\n\nThis Pokémon will neither lose nor regain HP if it drains HP from a Pokémon with liquid ooze.\n\nIf this Pokémon is badly poisoned, the poison counter is still increased each turn; if the Pokémon loses this ability, it will begin taking as much damage as it would be if it had been taking increasing damage each turn.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Protects against damage not directly caused by a move.",
    },
    pokemon: [
      "clefairy",
      "clefable",
      "abra",
      "kadabra",
      "alakazam",
      "cleffa",
      "sigilyph",
      "solosis",
      "duosion",
      "reuniclus",
    ],
  },
  "99": {
    id: 99,
    name: "no-guard",
    names: "No Guard",
    effect_changes: [
      {
        effect_entries: [
          {
            effect:
              "Wegen eines Glitches haben Attacken die von dieser Fähigkeit beeinflusst sind eine (100 - Genauigkeit)% Chance durch den detect oder protect zu treffen.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Due to a glitch, moves affected by this ability have a (100 - accuracy)% chance to hit through detect or protect.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
    ],
    effect_entries: {
      effect:
        "Moves used by or against this Pokémon never miss.\n\nOne-hit KO moves are unaffected.  Moves affected by this ability can hit Pokémon during the preparation turn of moves like dig or fly.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Ensures all moves used by and against the Pokémon hit.",
    },
    pokemon: [
      "machop",
      "machoke",
      "machamp",
      "karrablast",
      "golett",
      "golurk",
      "honedge",
      "doublade",
      "pidgeot-mega",
      "lycanroc-midnight",
      "machamp-gmax",
    ],
  },
  "100": {
    id: 100,
    name: "stall",
    names: "Stall",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon moves last within its priority bracket.\n\nMultiple Pokémon with this ability move in order of Speed amongst themselves.\n\nThe full incense and lagging tail take precedence over this ability; that is, Pokémon with these items move after Pokémon with this ability.  Pokémon with both this ability and one of these items are delayed as much as if they had only the item.\n\nThis ability works as usual during trick room: Pokémon with this ability will move in reverse order of Speed after Pokémon without it.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Makes the Pokémon move last within its move's priority bracket.",
    },
    pokemon: ["sableye"],
  },
  "101": {
    id: 101,
    name: "technician",
    names: "Technician",
    effect_changes: [
      {
        effect_entries: [
          {
            effect:
              "struggle wird nicht beeinflusst. helping hand und defense curl werden nicht beachtet.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "struggle is unaffected.  helping hand and defense curl are not taken into account.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon's moves have 1.5× their power if their base power is 60 or less.\n\nThis includes moves of variable power, such as hidden power and magnitude, when their power is 60 or less.  helping hand's power boost is taken into account for any move, as is defense curl's power boost for rollout.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens moves of 60 base power or less to 1.5× their power.",
    },
    pokemon: [
      "meowth",
      "persian",
      "mr-mime",
      "scyther",
      "scizor",
      "smeargle",
      "hitmontop",
      "breloom",
      "kricketune",
      "roserade",
      "ambipom",
      "mime-jr",
      "minccino",
      "cinccino",
      "marshadow",
      "toxtricity-amped",
      "clobbopus",
      "grapploct",
      "maushold",
      "scizor-mega",
      "meowth-alola",
      "persian-alola",
      "toxtricity-low-key",
      "meowth-gmax",
      "toxtricity-amped-gmax",
      "toxtricity-low-key-gmax",
      "maushold-family-of-three",
    ],
  },
  "102": {
    id: 102,
    name: "leaf-guard",
    names: "Leaf Guard",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "rest funktioniert normal bei starkem Sonnenlicht.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "rest works as usual during strong sunlight.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "This Pokémon cannot be given a major status ailment during strong sunlight.\n\nThis ability does not heal prior status ailments.  rest will fail altogether with this ability in effect.  yawn will immediately fail if used on this Pokémon during strong sunlight, and an already-used Yawn will fail if the weather turns to strong sunlight in the meantime.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Protects against major status ailments during strong sunlight.",
    },
    pokemon: [
      "tangela",
      "chikorita",
      "bayleef",
      "meganium",
      "hoppip",
      "skiploom",
      "jumpluff",
      "roselia",
      "budew",
      "tangrowth",
      "leafeon",
      "swadloon",
      "petilil",
      "lilligant",
      "fomantis",
      "lurantis",
      "bounsweet",
      "steenee",
      "tsareena",
      "zarude",
      "lurantis-totem",
      "zarude-dada",
      "lilligant-hisui",
    ],
  },
  "103": {
    id: 103,
    name: "klutz",
    names: "Klutz",
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "fling kann normal benutzt werden.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "fling can be used as usual.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "In battle, this Pokémon cannot use its held item, nor will the item have any passive effect on the battle, positive or negative.  This Pokémon also cannot use fling.\n\nThe Speed cut from the iron ball and the effort items (the macho brace, power weight, power bracer, power belt, power lens, power band, and power anklet) is unaffected.  Items that do not directly affect the battle, such as the exp share, the amulet coin, or the soothe bell, work as usual.  All held items work as usual out of battle.\n\nOther moves that use the held item, such as natural gift and switcheroo, work as usual.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents the Pokémon from using its held item in battle.",
    },
    pokemon: [
      "buneary",
      "lopunny",
      "woobat",
      "swoobat",
      "audino",
      "golett",
      "golurk",
      "stufful",
      "bewear",
      "toxel",
      "fidough",
      "capsakid",
    ],
  },
  "104": {
    id: 104,
    name: "mold-breaker",
    names: "Mold Breaker",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to teravolt and turboblaze.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Bypasses targets' abilities if they could hinder or prevent a move.",
    },
    pokemon: [
      "pinsir",
      "cranidos",
      "rampardos",
      "drilbur",
      "excadrill",
      "throh",
      "sawk",
      "basculin-red-striped",
      "axew",
      "fraxure",
      "haxorus",
      "druddigon",
      "pancham",
      "pangoro",
      "hawlucha",
      "basculegion-male",
      "tinkatink",
      "tinkatuff",
      "tinkaton",
      "veluza",
      "basculin-blue-striped",
      "gyarados-mega",
      "ampharos-mega",
      "basculin-white-striped",
      "basculegion-female",
    ],
  },
  "105": {
    id: 105,
    name: "super-luck",
    names: "Super Luck",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves have critical hit rates one stage higher than normal.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Raises moves' critical hit rates one stage.",
    },
    pokemon: [
      "togepi",
      "togetic",
      "murkrow",
      "absol",
      "honchkrow",
      "togekiss",
      "pidove",
      "tranquill",
      "unfezant",
    ],
  },
  "106": {
    id: 106,
    name: "aftermath",
    names: "Aftermath",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon is knocked out by a move that makes contact, the move's user takes 1/4 its maximum HP in damage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Damages the attacker for 1/4 its max HP when knocked out by a contact move.",
    },
    pokemon: [
      "voltorb",
      "electrode",
      "drifloon",
      "drifblim",
      "stunky",
      "skuntank",
      "trubbish",
      "garbodor",
      "garbodor-gmax",
      "voltorb-hisui",
      "electrode-hisui",
    ],
  },
  "107": {
    id: 107,
    name: "anticipation",
    names: "Anticipation",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle, if one of its opponents has a move that is super effective against it, self destruct, explosion, or a one-hit knockout move, all participating trainers are notified.\n\nThe move itself is not revealed; only that there is such a move.  Moves that inflict typeless damage, such as future sight, and moves of variable type, such as hidden power, count as their listed types.  counter, metal burst, mirror coat, and one-hit KO moves to which this Pokémon is immune do not trigger this ability.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move.",
    },
    pokemon: [
      "eevee",
      "barboach",
      "whiscash",
      "wormadam-plant",
      "croagunk",
      "toxicroak",
      "ferrothorn",
      "hatenna",
      "hattrem",
      "hatterene",
      "flittle",
      "wormadam-sandy",
      "wormadam-trash",
      "eevee-starter",
      "ponyta-galar",
      "rapidash-galar",
      "eevee-gmax",
      "hatterene-gmax",
    ],
  },
  "108": {
    id: 108,
    name: "forewarn",
    names: "Forewarn",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle, it reveals the move with the highest base power known by any opposing Pokémon to all participating trainers.\n\nIn the event of a tie, one is chosen at random.\n\nMoves without a listed base power are assigned one as follows:\n\nPower | Moves\n----: | -----\n  160 | One-hit KO moves: fissure, guillotine, horn drill, and sheer cold\n  120 | Counter moves: counter, metal burst, and mirror coat\n   80 | Variable power or set damage: crush grip, dragon rage, electro ball, endeavor, final gambit, flail, frustration, grass knot, gyro ball, heat crash, heavy slam, hidden power, low kick, natural gift, night shade, psywave, return, reversal, seismic toss, sonic boom, trump card, and wring out\n    0 | Any such move not listed\n",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Reveals the opponents' strongest move upon entering battle.",
    },
    pokemon: ["drowzee", "hypno", "jynx", "smoochum", "munna", "musharna"],
  },
  "109": {
    id: 109,
    name: "unaware",
    names: "Unaware",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon ignores other Pokémon's stat modifiers for the purposes of damage and accuracy calculation.\n\nEffectively, this affects modifiers of every stat except Speed.\n\nThe power of punishment and stored power is calculated as usual.  When this Pokémon hurts itself in confusion, its stat modifiers affect damage as usual.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Ignores other Pokémon's stat modifiers for damage and accuracy calculation.",
    },
    pokemon: [
      "clefable",
      "wooper",
      "quagsire",
      "bidoof",
      "bibarel",
      "woobat",
      "swoobat",
      "pyukumuku",
      "cosmog",
      "fuecoco",
      "crocalor",
      "skeledirge",
      "dondozo",
      "clodsire",
      "wooper-paldea",
    ],
  },
  "110": {
    id: 110,
    name: "tinted-lens",
    names: "Tinted Lens",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon deals twice as much damage with moves that are not very effective against the target.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles damage inflicted with not-very-effective moves.",
    },
    pokemon: [
      "butterfree",
      "venonat",
      "venomoth",
      "hoothoot",
      "noctowl",
      "illumise",
      "mothim",
      "yanmega",
      "sigilyph",
      "nymble",
      "lokix",
      "butterfree-gmax",
    ],
  },
  "111": {
    id: 111,
    name: "filter",
    names: "Filter",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon takes 0.75× as much damage from moves that are super effective against it.\n\nThis ability functions identically to solid rock.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Decreases damage taken from super-effective moves by 1/4.",
    },
    pokemon: ["mr-mime", "mime-jr", "revavroom", "aggron-mega"],
  },
  "112": {
    id: 112,
    name: "slow-start",
    names: "Slow Start",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Attack and Speed are halved for five turns upon entering battle.\n\nThis ability also takes effect when acquired during battle.  If this Pokémon loses its ability before the five turns are up, its Attack and Speed return to normal; if it then regains this ability without leaving battle, its Attack and Speed are halved again, but the counter keeps counting from where it was.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Halves Attack and Speed for five turns upon entering battle.",
    },
    pokemon: ["regigigas", "varoom"],
  },
  "113": {
    id: 113,
    name: "scrappy",
    names: "Scrappy",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon ignores ghost-type Pokémon's immunity to normal- and fighting-type moves.\n\nGhost Pokémon's other types affect damage as usual.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Lets the Pokémon's normal and fighting moves hit ghost Pokémon.",
    },
    pokemon: [
      "kangaskhan",
      "miltank",
      "taillow",
      "swellow",
      "loudred",
      "exploud",
      "herdier",
      "stoutland",
      "pancham",
      "pangoro",
      "sirfetchd",
      "flamigo",
      "lopunny-mega",
      "farfetchd-galar",
    ],
  },
  "114": {
    id: 114,
    name: "storm-drain",
    names: "Storm Drain",
    effect_changes: [
      {
        effect_entries: [
          {
            effect:
              "Leitet water-Attacken um ohne den special attack Bonus zu gewähren. Leitet hidden power nicht um.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect:
              "Redirects water moves without negating them or granting any Special Attack boost.  Does not redirect hidden power.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
    effect_entries: {
      effect:
        "All other Pokémon's single-target water-type moves are redirected to this Pokémon, if it is an eligible target.  Other Pokémon's Water moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.\n\nIf the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Redirects single-target water moves to this Pokémon where possible.  Absorbs Water moves, raising Special Attack one stage.",
    },
    pokemon: [
      "lileep",
      "cradily",
      "shellos",
      "gastrodon",
      "finneon",
      "lumineon",
      "maractus",
      "tatsugiri",
      "tatsugiri-droopy",
      "tatsugiri-stretchy",
    ],
  },
  "115": {
    id: 115,
    name: "ice-body",
    names: "Ice Body",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon heals for 1/16 of its maximum HP after each turn during hail, and it does not take hail damage regardless of type.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage.",
    },
    pokemon: [
      "seel",
      "dewgong",
      "snorunt",
      "glalie",
      "spheal",
      "sealeo",
      "walrein",
      "regice",
      "glaceon",
      "vanillite",
      "vanillish",
      "vanilluxe",
      "bergmite",
      "avalugg",
      "mr-rime",
      "arctovish",
      "frigibax",
      "arctibax",
      "baxcalibur",
      "mr-mime-galar",
      "avalugg-hisui",
    ],
  },
  "116": {
    id: 116,
    name: "solid-rock",
    names: "Solid Rock",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon takes 0.75× as much damage from moves that are super effective against it.\n\nThis ability functions identically to filter.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Decreases damage taken from super-effective moves by 1/4.",
    },
    pokemon: ["camerupt", "rhyperior", "tirtouga", "carracosta"],
  },
  "117": {
    id: 117,
    name: "snow-warning",
    names: "Snow Warning",
    effect_changes: [],
    effect_entries: {
      effect:
        "The weather changes to hail when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, drought, or sand stream are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Summons hail that lasts indefinitely upon entering battle.",
    },
    pokemon: [
      "snover",
      "abomasnow",
      "vanilluxe",
      "amaura",
      "aurorus",
      "abomasnow-mega",
      "vulpix-alola",
      "ninetales-alola",
    ],
  },
  "118": {
    id: 118,
    name: "honey-gather",
    names: "Honey Gather",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon has a chance of picking up honey after each battle.  This chance starts at 5% and rises another 5% after every tenth level: 5% from level 1–10, 10% from 11–20, and so on, up to 50% from 91–100.\n\nThis ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "The Pokémon may pick up honey after battle.",
    },
    pokemon: ["teddiursa", "combee", "cutiefly", "ribombee", "ribombee-totem"],
  },
  "119": {
    id: 119,
    name: "frisk",
    names: "Frisk",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle, it reveals an opposing Pokémon's held item to all participating trainers.\n\nIn a double battle, if one opponent has an item, this Pokémon will Frisk that Pokémon; if both have an item, it will Frisk one at random.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Reveals an opponent's held item upon entering battle.",
    },
    pokemon: [
      "wigglytuff",
      "sentret",
      "furret",
      "yanma",
      "stantler",
      "shuppet",
      "banette",
      "duskull",
      "dusclops",
      "yanmega",
      "dusknoir",
      "gothita",
      "gothorita",
      "gothitelle",
      "phantump",
      "trevenant",
      "pumpkaboo-average",
      "gourgeist-average",
      "noibat",
      "noivern",
      "orbeetle",
      "impidimp",
      "morgrem",
      "grimmsnarl",
      "wyrdeer",
      "flittle",
      "espathra",
      "pumpkaboo-small",
      "pumpkaboo-large",
      "pumpkaboo-super",
      "gourgeist-small",
      "gourgeist-large",
      "gourgeist-super",
      "exeggutor-alola",
      "orbeetle-gmax",
      "grimmsnarl-gmax",
    ],
  },
  "120": {
    id: 120,
    name: "reckless",
    names: "Reckless",
    effect_changes: [],
    effect_entries: {
      effect:
        'This Pokémon\'s recoil moves and crash moves have 1.2× their base power.\n\nstruggle is unaffected.\n\nThe "crash moves" are the moves that damage the user upon missing: jump kick and high jump kick.',
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Strengthens recoil moves to 1.2× their power.",
    },
    pokemon: [
      "hitmonlee",
      "rhyhorn",
      "rhydon",
      "starly",
      "staravia",
      "staraptor",
      "rhyperior",
      "emboar",
      "basculin-red-striped",
      "mienfoo",
      "mienshao",
      "bouffalant",
      "obstagoon",
    ],
  },
  "121": {
    id: 121,
    name: "multitype",
    names: "Multitype",
    effect_changes: [],
    effect_entries: {
      effect:
        "If this Pokémon is holding an elemental Plate, its type and form change to match the Plate.\n\nThis Pokémon's held item, whether or not it is a Plate, cannot be taken by covet or thief, nor removed by knock off, nor traded by switcheroo or trick.  Covet, Thief, and Knock Off still inflict damage against this Pokémon.  Unlike with sticky hold, this Pokémon cannot use fling, Switcheroo, or Trick to lose its item itself, nor gain an item through Switcheroo or Trick if it does not have one.\n\nThis ability has no effect for any Pokémon other than arceus.  This ability cannot be traded with skill swap, nor copied with role play or trace, nor disabled with gastro acid, nor changed with worry seed.  This Pokémon cannot use Skill Swap or Role Play to lose its ability itself.  mold breaker cannot ignore this ability.\n\nIf a Pokémon Transforms into an Arceus with this ability, it will Transform into Arceus's default, normal-type form.  If the Transforming Pokémon is holding a Plate, this ability will then activate and change the Pokémon into the corresponding form.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Changes arceus's type and form to match its held Plate.",
    },
    pokemon: ["arceus"],
  },
  "122": {
    id: 122,
    name: "flower-gift",
    names: "Flower Gift",
    effect_changes: [],
    effect_entries: {
      effect:
        "Friendly Pokémon have 1.5× their Attack and Special Defense during strong sunlight if any friendly Pokémon has this ability.\n\nUnlike forecast, multitype, and zen mode, this ability is not tied to its Pokémon's form change; cherrim will switch between its forms even if it loses this ability.  As such, this ability also works if obtained by a Pokémon other than Cherrim.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Increases friendly Pokémon's Attack and Special Defense to 1.5× during strong sunlight.",
    },
    pokemon: ["cherrim"],
  },
  "123": {
    id: 123,
    name: "bad-dreams",
    names: "Bad Dreams",
    effect_changes: [],
    effect_entries: {
      effect:
        "Opposing Pokémon take 1/8 of their maximum HP in damage after each turn while they are asleep.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Damages sleeping opponents for 1/8 their max HP after each turn.",
    },
    pokemon: ["darkrai"],
  },
  "124": {
    id: 124,
    name: "pickpocket",
    names: "Pickpocket",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever a move makes contact with this Pokémon, if it does not have a held item, it steals the attacker's held item.\n\nThis Pokémon cannot steal upon being knocked out.  It can steal if the attacker has a substitute, but cannot steal when its own Substitute is hit.  If a move hits multiple times, only the last hit triggers this ability.  If this Pokémon is wild, it cannot steal from a trained Pokémon.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Steals attacking Pokémon's held items on contact.",
    },
    pokemon: [
      "sneasel",
      "seedot",
      "nuzleaf",
      "shiftry",
      "weavile",
      "binacle",
      "barbaracle",
      "impidimp",
      "morgrem",
      "grimmsnarl",
      "shroodle",
      "tinkatink",
      "tinkatuff",
      "tinkaton",
      "grimmsnarl-gmax",
    ],
  },
  "125": {
    id: 125,
    name: "sheer-force",
    names: "Sheer Force",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves with extra effects have 1.3× their power, but lose their extra effects.\n\nAn effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect. For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.\n\nMoves that lower the user's stats are unaffected.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens moves with extra effects to 1.3× their power, but prevents their extra effects.",
    },
    pokemon: [
      "nidoqueen",
      "nidoking",
      "krabby",
      "kingler",
      "tauros",
      "totodile",
      "croconaw",
      "feraligatr",
      "steelix",
      "makuhita",
      "hariyama",
      "mawile",
      "trapinch",
      "bagon",
      "cranidos",
      "rampardos",
      "timburr",
      "gurdurr",
      "conkeldurr",
      "darmanitan-standard",
      "druddigon",
      "rufflet",
      "braviary",
      "landorus-incarnate",
      "toucannon",
      "cufant",
      "copperajah",
      "kleavor",
      "cetoddle",
      "cetitan",
      "darmanitan-zen",
      "camerupt-mega",
      "kingler-gmax",
      "copperajah-gmax",
      "braviary-hisui",
      "squawkabilly-yellow-plumage",
      "squawkabilly-white-plumage",
    ],
  },
  "126": {
    id: 126,
    name: "contrary",
    names: "Contrary",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever this Pokémon's stats would be raised, they are instead lowered by the same amount, and vice versa.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Inverts stat changes.",
    },
    pokemon: [
      "shuckle",
      "spinda",
      "snivy",
      "servine",
      "serperior",
      "inkay",
      "malamar",
      "fomantis",
      "lurantis",
      "enamorus-incarnate",
      "lurantis-totem",
    ],
  },
  "127": {
    id: 127,
    name: "unnerve",
    names: "Unnerve",
    effect_changes: [],
    effect_entries: {
      effect:
        "Opposing Pokémon cannot eat held Berries while this Pokémon is in battle.\n\nAffected Pokémon can still use bug bite or pluck to eat a target's Berry.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents opposing Pokémon from eating held Berries.",
    },
    pokemon: [
      "ekans",
      "arbok",
      "meowth",
      "persian",
      "aerodactyl",
      "mewtwo",
      "ursaring",
      "houndour",
      "houndoom",
      "tyranitar",
      "masquerain",
      "vespiquen",
      "joltik",
      "galvantula",
      "axew",
      "fraxure",
      "haxorus",
      "litleo",
      "pyroar",
      "bewear",
      "rookidee",
      "corvisquire",
      "corviknight",
      "calyrex",
      "ursaluna",
      "meowth-galar",
      "meowth-gmax",
      "corviknight-gmax",
    ],
  },
  "128": {
    id: 128,
    name: "defiant",
    names: "Defiant",
    effect_changes: [],
    effect_entries: {
      effect:
        "When any of this Pokémon's stats are lowered, its Attack rises by two stages.\n\nIf multiple stats are lowered at once, this ability takes effect with each stat lowered.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Raises Attack two stages upon having any stat lowered.",
    },
    pokemon: [
      "mankey",
      "primeape",
      "farfetchd",
      "piplup",
      "prinplup",
      "empoleon",
      "purugly",
      "pawniard",
      "bisharp",
      "braviary",
      "tornadus-incarnate",
      "thundurus-incarnate",
      "passimian",
      "obstagoon",
      "falinks",
      "annihilape",
      "kingambit",
      "zapdos-galar",
      "braviary-hisui",
    ],
  },
  "129": {
    id: 129,
    name: "defeatist",
    names: "Defeatist",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Attack and Special Attack are halved when it has half its HP or less.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Halves Attack and Special Attack at 50% max HP or less.",
    },
    pokemon: ["archen", "archeops"],
  },
  "130": {
    id: 130,
    name: "cursed-body",
    names: "Cursed Body",
    effect_changes: [],
    effect_entries: {
      effect:
        "Moves that hit this Pokémon have a 30% chance of being Disabled afterward.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Has a 30% chance of Disabling any move that hits the Pokémon.",
    },
    pokemon: [
      "gengar",
      "shuppet",
      "banette",
      "froslass",
      "frillish",
      "jellicent",
      "sinistea",
      "polteageist",
      "dreepy",
      "drakloak",
      "dragapult",
      "marowak-alola",
      "marowak-totem",
      "corsola-galar",
      "gengar-gmax",
    ],
  },
  "131": {
    id: 131,
    name: "healer",
    names: "Healer",
    effect_changes: [],
    effect_entries: {
      effect:
        "Friendly Pokémon next to this Pokémon in double and triple battles each have a 30% chance of being cured of any major status ailment after each turn.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
    },
    pokemon: [
      "chansey",
      "bellossom",
      "blissey",
      "audino",
      "alomomola",
      "spritzee",
      "aromatisse",
      "hatenna",
      "hattrem",
      "hatterene",
      "audino-mega",
      "hatterene-gmax",
    ],
  },
  "132": {
    id: 132,
    name: "friend-guard",
    names: "Friend Guard",
    effect_changes: [],
    effect_entries: {
      effect:
        "All friendly Pokémon take 0.75× as much direct damage from moves while this Pokémon is in battle.\n\nThis effect stacks if multiple allied Pokémon have it.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Decreases all direct damage taken by friendly Pokémon to 0.75×.",
    },
    pokemon: [
      "clefairy",
      "jigglypuff",
      "cleffa",
      "igglybuff",
      "happiny",
      "scatterbug",
      "spewpa",
      "vivillon",
      "maushold",
      "maushold-family-of-three",
    ],
  },
  "133": {
    id: 133,
    name: "weak-armor",
    names: "Weak Armor",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever a physical move hits this Pokémon, its Speed rises one stage and its Defense falls one stage.\n\nThis ability triggers on every hit of a multiple-hit move.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
    },
    pokemon: [
      "onix",
      "omanyte",
      "omastar",
      "kabuto",
      "kabutops",
      "slugma",
      "magcargo",
      "skarmory",
      "roggenrola",
      "boldore",
      "dwebble",
      "crustle",
      "garbodor",
      "vanillite",
      "vanillish",
      "vanilluxe",
      "vullaby",
      "mandibuzz",
      "sinistea",
      "polteageist",
      "cursola",
      "armarouge",
      "ceruledge",
      "corsola-galar",
      "garbodor-gmax",
    ],
  },
  "134": {
    id: 134,
    name: "heavy-metal",
    names: "Heavy Metal",
    effect_changes: [],
    effect_entries: {
      effect: "This Pokémon has double the usual weight for its species.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles the Pokémon's weight.",
    },
    pokemon: [
      "aron",
      "lairon",
      "aggron",
      "bronzor",
      "bronzong",
      "cufant",
      "copperajah",
      "duraludon",
      "copperajah-gmax",
      "duraludon-gmax",
    ],
  },
  "135": {
    id: 135,
    name: "light-metal",
    names: "Light Metal",
    effect_changes: [],
    effect_entries: {
      effect: "This Pokémon has half the usual weight for its species.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Halves the Pokémon's weight.",
    },
    pokemon: [
      "scizor",
      "beldum",
      "metang",
      "metagross",
      "registeel",
      "duraludon",
      "duraludon-gmax",
    ],
  },
  "136": {
    id: 136,
    name: "multiscale",
    names: "Multiscale",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon takes half as much damage when it is hit having full HP.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Halves damage taken from full HP.",
    },
    pokemon: ["dragonite", "lugia"],
  },
  "137": {
    id: 137,
    name: "toxic-boost",
    names: "Toxic Boost",
    effect_changes: [],
    effect_entries: {
      effect: "This Pokémon has 1.5× its Attack when poisoned.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Increases Attack to 1.5× when poisoned.",
    },
    pokemon: ["zangoose"],
  },
  "138": {
    id: 138,
    name: "flare-boost",
    names: "Flare Boost",
    effect_changes: [],
    effect_entries: {
      effect: "This Pokémon has 1.5× its Special Attack when burned.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Increases Special Attack to 1.5× when burned.",
    },
    pokemon: ["drifloon", "drifblim"],
  },
  "139": {
    id: 139,
    name: "harvest",
    names: "Harvest",
    effect_changes: [],
    effect_entries: {
      effect:
        "After each turn, if the last item this Pokémon consumed was a Berry and it is not currently holding an item, it has a 50% chance of regaining that Berry, or a 100% chance during strong sunlight.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Has a 50% chance of restoring a used Berry after each turn if the Pokémon has held no items in the meantime.",
    },
    pokemon: [
      "exeggcute",
      "exeggutor",
      "tropius",
      "phantump",
      "trevenant",
      "smoliv",
      "dolliv",
      "arboliva",
      "exeggutor-alola",
    ],
  },
  "140": {
    id: 140,
    name: "telepathy",
    names: "Telepathy",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon does not take damage from friendly Pokémon's moves, including single-target moves aimed at it.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Protects against friendly Pokémon's damaging moves.",
    },
    pokemon: [
      "wobbuffet",
      "ralts",
      "kirlia",
      "gardevoir",
      "meditite",
      "medicham",
      "wynaut",
      "dialga",
      "palkia",
      "giratina-altered",
      "munna",
      "musharna",
      "elgyem",
      "beheeyem",
      "noibat",
      "noivern",
      "oranguru",
      "tapu-koko",
      "tapu-lele",
      "tapu-bulu",
      "tapu-fini",
      "blipbug",
      "dottler",
      "orbeetle",
      "rabsca",
      "orbeetle-gmax",
      "dialga-origin",
      "palkia-origin",
    ],
  },
  "141": {
    id: 141,
    name: "moody",
    names: "Moody",
    effect_changes: [],
    effect_entries: {
      effect:
        "After each turn, one of this Pokémon's stats at random rises two stages, and another falls one stage.\n\nIf a stat is already at 6 or -6 stages, it will not be chosen to be increased or decreased, respectively.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises a random stat two stages and lowers another one stage after each turn.",
    },
    pokemon: [
      "remoraid",
      "octillery",
      "smeargle",
      "snorunt",
      "glalie",
      "bidoof",
      "bibarel",
      "scovillain",
    ],
  },
  "142": {
    id: 142,
    name: "overcoat",
    names: "Overcoat",
    effect_changes: [],
    effect_entries: {
      effect: "This Pokémon does not take damage from weather.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Protects against damage from weather.",
    },
    pokemon: [
      "shellder",
      "cloyster",
      "pineco",
      "forretress",
      "shelgon",
      "burmy",
      "wormadam-plant",
      "sewaddle",
      "swadloon",
      "leavanny",
      "solosis",
      "duosion",
      "reuniclus",
      "escavalier",
      "shelmet",
      "vullaby",
      "mandibuzz",
      "jangmo-o",
      "hakamo-o",
      "kommo-o",
      "varoom",
      "revavroom",
      "wormadam-sandy",
      "wormadam-trash",
      "kommo-o-totem",
      "sliggoo-hisui",
      "goodra-hisui",
      "enamorus-therian",
    ],
  },
  "143": {
    id: 143,
    name: "poison-touch",
    names: "Poison Touch",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's contact moves have a 30% chance of poisoning the target with each hit.\n\nThis counts as an extra effect for the purposes of shield dust.  This ability takes effect before mummy.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Has a 30% chance of poisoning target Pokémon upon contact.",
    },
    pokemon: [
      "grimer",
      "muk",
      "croagunk",
      "toxicroak",
      "seismitoad",
      "skrelp",
      "dragalge",
      "sneasler",
      "grafaiai",
      "grimer-alola",
      "muk-alola",
      "sneasel-hisui",
    ],
  },
  "144": {
    id: 144,
    name: "regenerator",
    names: "Regenerator",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon regains 1/3 of its maximum HP when it is switched out for another Pokémon under any circumstances other than having fainted.\n\nThis ability does not take effect when a battle ends.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Heals for 1/3 max HP upon switching out.",
    },
    pokemon: [
      "slowpoke",
      "slowbro",
      "tangela",
      "slowking",
      "corsola",
      "ho-oh",
      "tangrowth",
      "audino",
      "solosis",
      "duosion",
      "reuniclus",
      "foongus",
      "amoonguss",
      "alomomola",
      "mienfoo",
      "mienshao",
      "mareanie",
      "toxapex",
      "gossifleur",
      "eldegoss",
      "klawf",
      "cyclizar",
      "tornadus-therian",
      "slowpoke-galar",
      "slowbro-galar",
      "slowking-galar",
    ],
  },
  "145": {
    id: 145,
    name: "big-pecks",
    names: "Big Pecks",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Defense cannot be lowered by other Pokémon.\n\nThis Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Protects against Defense drops.",
    },
    pokemon: [
      "pidgey",
      "pidgeotto",
      "pidgeot",
      "chatot",
      "pidove",
      "tranquill",
      "unfezant",
      "ducklett",
      "swanna",
      "vullaby",
      "mandibuzz",
      "fletchling",
      "rookidee",
      "corvisquire",
      "bombirdier",
    ],
  },
  "146": {
    id: 146,
    name: "sand-rush",
    names: "Sand Rush",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Speed is doubled during a sandstorm, and it does not take sandstorm damage, regardless of type.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Doubles Speed during a sandstorm.  Protects against sandstorm damage.",
    },
    pokemon: [
      "sandshrew",
      "sandslash",
      "herdier",
      "stoutland",
      "drilbur",
      "excadrill",
      "lycanroc-midday",
      "dracozolt",
      "dracovish",
      "houndstone",
    ],
  },
  "147": {
    id: 147,
    name: "wonder-skin",
    names: "Wonder Skin",
    effect_changes: [],
    effect_entries: {
      effect:
        "Non-damaging moves have exactly 50% base accuracy against this Pokémon.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Lowers incoming non-damaging moves' base accuracy to exactly 50%.",
    },
    pokemon: ["venomoth", "skitty", "delcatty", "sigilyph", "bruxish"],
  },
  "148": {
    id: 148,
    name: "analytic",
    names: "Analytic",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves have 1.3× their power when it moves last in a turn.\n\nfuture sight and doom desire are unaffected.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Strengthens moves to 1.3× their power when moving last.",
    },
    pokemon: [
      "magnemite",
      "magneton",
      "staryu",
      "starmie",
      "porygon",
      "porygon2",
      "magnezone",
      "porygon-z",
      "patrat",
      "watchog",
      "elgyem",
      "beheeyem",
    ],
  },
  "149": {
    id: 149,
    name: "illusion",
    names: "Illusion",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon, upon being sent out, appears to have the species, nickname, and Poké Ball of the last Pokémon in the party that is able to battle.  This illusion breaks upon being hit by a damaging move.\n\nOther damage, e.g. from weather or spikes, does not break the illusion, nor does damage done to a substitute.\n\nIf the party order becomes temporarily shuffled around as Pokémon are switched out in battle, this ability chooses the last Pokémon according to that shuffled order.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move.",
    },
    pokemon: ["zorua", "zoroark", "zorua-hisui", "zoroark-hisui"],
  },
  "150": {
    id: 150,
    name: "imposter",
    names: "Imposter",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon transforms into a random opponent upon entering battle.  This effect is identical to the move transform.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Transforms upon entering battle.",
    },
    pokemon: ["ditto"],
  },
  "151": {
    id: 151,
    name: "infiltrator",
    names: "Infiltrator",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves ignore light screen, reflect, and safeguard.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Bypasses light screen, reflect, and safeguard.",
    },
    pokemon: [
      "zubat",
      "golbat",
      "crobat",
      "hoppip",
      "skiploom",
      "jumpluff",
      "ninjask",
      "seviper",
      "spiritomb",
      "cottonee",
      "whimsicott",
      "litwick",
      "lampent",
      "chandelure",
      "espurr",
      "meowstic-male",
      "inkay",
      "malamar",
      "noibat",
      "noivern",
      "dreepy",
      "drakloak",
      "dragapult",
      "bramblin",
      "brambleghast",
      "meowstic-female",
    ],
  },
  "152": {
    id: 152,
    name: "mummy",
    names: "Mummy",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever a contact move hits this Pokémon, the attacking Pokémon's ability changes to Mummy.\n\nmultitype is unaffected.  If a Pokémon with moxie knocks this Pokémon out, the former's ability will change without taking effect.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Changes attacking Pokémon's abilities to Mummy on contact.",
    },
    pokemon: ["yamask", "cofagrigus"],
  },
  "153": {
    id: 153,
    name: "moxie",
    names: "Moxie",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Attack rises one stage upon knocking out another Pokémon, even a friendly Pokémon.\n\nThis ability does not take effect when the Pokémon indirectly causes another Pokémon to faint, e.g. through poison or spikes.\n\nIf this Pokémon knocks out a Pokémon with mummy, the former's ability will change without taking effect.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Raises Attack one stage upon KOing a Pokémon.",
    },
    pokemon: [
      "pinsir",
      "gyarados",
      "heracross",
      "mightyena",
      "salamence",
      "honchkrow",
      "sandile",
      "krokorok",
      "krookodile",
      "scraggy",
      "scrafty",
      "litleo",
      "pyroar",
      "quaxly",
      "quaxwell",
      "quaquaval",
    ],
  },
  "154": {
    id: 154,
    name: "justified",
    names: "Justified",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever a dark-type move hits this Pokémon, its Attack rises one stage.\n\nThe move is not negated in any way.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises Attack one stage upon taking damage from a dark move.",
    },
    pokemon: [
      "growlithe",
      "arcanine",
      "absol",
      "lucario",
      "gallade",
      "cobalion",
      "terrakion",
      "virizion",
      "keldeo-ordinary",
      "keldeo-resolute",
      "growlithe-hisui",
      "arcanine-hisui",
    ],
  },
  "155": {
    id: 155,
    name: "rattled",
    names: "Rattled",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Speed rises one stage with each hit from a damaging dark-, ghost-, or bug-type move.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
    },
    pokemon: [
      "magikarp",
      "ledyba",
      "sudowoodo",
      "dunsparce",
      "snubbull",
      "granbull",
      "poochyena",
      "whismur",
      "clamperl",
      "bonsly",
      "cubchoo",
      "yamper",
      "toxel",
      "basculegion-male",
      "wiglett",
      "wugtrio",
      "dudunsparce",
      "gimmighoul",
      "gimmighoul",
      "meowth-alola",
      "persian-alola",
      "basculin-white-striped",
      "basculegion-female",
      "dudunsparce-three-segment",
    ],
  },
  "156": {
    id: 156,
    name: "magic-bounce",
    names: "Magic Bounce",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon is targeted by a move flagged as being reflectable, the move is redirected to its user.\n\nAll reflectable moves are non-damaging, and most non-damaging moves that target other Pokémon are reflectable.\n\nA move reflected by this ability or magic coat cannot be reflected back.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Reflects most non-damaging moves back at their user.",
    },
    pokemon: [
      "natu",
      "xatu",
      "espeon",
      "hatenna",
      "hattrem",
      "hatterene",
      "absol-mega",
      "sableye-mega",
      "diancie-mega",
      "hatterene-gmax",
    ],
  },
  "157": {
    id: 157,
    name: "sap-sipper",
    names: "Sap Sipper",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever a grass-type move hits this Pokémon, its Attack rises one stage, negating any other effect on it.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Absorbs grass moves, raising Attack one stage.",
    },
    pokemon: [
      "marill",
      "azumarill",
      "girafarig",
      "stantler",
      "miltank",
      "azurill",
      "blitzle",
      "zebstrika",
      "deerling",
      "sawsbuck",
      "bouffalant",
      "skiddo",
      "gogoat",
      "goomy",
      "sliggoo",
      "goodra",
      "drampa",
      "wyrdeer",
      "farigiraf",
      "sliggoo-hisui",
      "goodra-hisui",
    ],
  },
  "158": {
    id: 158,
    name: "prankster",
    names: "Prankster",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's non-damaging moves have their priority increased by one stage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Raises non-damaging moves' priority by one stage.",
    },
    pokemon: [
      "murkrow",
      "sableye",
      "volbeat",
      "illumise",
      "riolu",
      "purrloin",
      "liepard",
      "cottonee",
      "whimsicott",
      "tornadus-incarnate",
      "thundurus-incarnate",
      "meowstic-male",
      "klefki",
      "impidimp",
      "morgrem",
      "grimmsnarl",
      "shroodle",
      "grafaiai",
      "banette-mega",
      "grimmsnarl-gmax",
    ],
  },
  "159": {
    id: 159,
    name: "sand-force",
    names: "Sand Force",
    effect_changes: [],
    effect_entries: {
      effect:
        "During a sandstorm, this Pokémon's rock-, ground-, and steel-type moves have 1.3× their base power.  This Pokémon does not take sandstorm damage, regardless of type.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
    },
    pokemon: [
      "diglett",
      "dugtrio",
      "nosepass",
      "shellos",
      "gastrodon",
      "hippopotas",
      "hippowdon",
      "probopass",
      "roggenrola",
      "boldore",
      "gigalith",
      "drilbur",
      "excadrill",
      "landorus-incarnate",
      "garchomp-mega",
      "steelix-mega",
      "diglett-alola",
      "dugtrio-alola",
    ],
  },
  "160": {
    id: 160,
    name: "iron-barbs",
    names: "Iron Barbs",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever a move makes contact with this Pokémon, the move's user takes 1/8 of its maximum HP in damage.\n\nThis ability functions identically to rough skin.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Damages attacking Pokémon for 1/8 their max HP on contact.",
    },
    pokemon: ["ferroseed", "ferrothorn", "togedemaru", "togedemaru-totem"],
  },
  "161": {
    id: 161,
    name: "zen-mode",
    names: "Zen Mode",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon switches between Standard Mode and Zen Mode after each turn depending on its HP.  Below 50% of its maximum HP, it switches to Zen Mode, and at 50% or above, it switches to Standard Mode.\n\nThis Pokémon returns to Standard Mode upon leaving battle or losing this ability.  This ability has no effect if this Pokémon is not a darmanitan.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Changes darmanitan's form after each turn depending on its HP: Zen Mode below 50% max HP, and Standard Mode otherwise.",
    },
    pokemon: [
      "darmanitan-standard",
      "darmanitan-zen",
      "darmanitan-galar-standard",
      "darmanitan-galar-zen",
    ],
  },
  "162": {
    id: 162,
    name: "victory-star",
    names: "Victory Star",
    effect_changes: [],
    effect_entries: {
      effect:
        "All friendly Pokémon's moves, including this Pokémon's own moves, have 1.1× their usual accuracy while this Pokémon is in battle.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Increases moves' accuracy to 1.1× for friendly Pokémon.",
    },
    pokemon: ["victini"],
  },
  "163": {
    id: 163,
    name: "turboblaze",
    names: "Turboblaze",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to mold breaker and teravolt.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Bypasses targets' abilities if they could hinder or prevent moves.",
    },
    pokemon: ["reshiram", "kyurem-white"],
  },
  "164": {
    id: 164,
    name: "teravolt",
    names: "Teravolt",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to mold breaker and turboblaze.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Bypasses targets' abilities if they could hinder or prevent moves.",
    },
    pokemon: ["zekrom", "kyurem-black"],
  },
  "165": {
    id: 165,
    name: "aroma-veil",
    names: "Aroma Veil",
    effect_changes: [],
    effect_entries: {
      effect: "Protects allies against moves that affect their mental state.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Protects allies against moves that affect their mental state.",
    },
    pokemon: [
      "spritzee",
      "aromatisse",
      "milcery",
      "alcremie",
      "lechonk",
      "dachsbun",
      "alcremie-gmax",
      "oinkologne-female",
    ],
  },
  "166": {
    id: 166,
    name: "flower-veil",
    names: "Flower Veil",
    effect_changes: [],
    effect_entries: {
      effect:
        "Protects friendly grass Pokémon from having their stats lowered by other Pokémon.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Protects friendly grass Pokémon from having their stats lowered by other Pokémon.",
    },
    pokemon: ["flabebe", "floette", "florges", "comfey", "floette-eternal"],
  },
  "167": {
    id: 167,
    name: "cheek-pouch",
    names: "Cheek Pouch",
    effect_changes: [],
    effect_entries: {
      effect:
        "Restores HP upon eating a Berry, in addition to the Berry's effect.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Restores HP upon eating a Berry, in addition to the Berry's effect.",
    },
    pokemon: [
      "bunnelby",
      "diggersby",
      "dedenne",
      "skwovet",
      "greedent",
      "maushold",
      "maushold-family-of-three",
    ],
  },
  "168": {
    id: 168,
    name: "protean",
    names: "Protean",
    effect_changes: [],
    effect_entries: {
      effect:
        "Changes the bearer's type to match each move it uses.\n\nThe type change takes place just before the move is used.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Changes the bearer's type to match each move it uses.",
    },
    pokemon: [
      "kecleon",
      "froakie",
      "frogadier",
      "greninja",
      "sprigatito",
      "floragato",
      "meowscarada",
    ],
  },
  "169": {
    id: 169,
    name: "fur-coat",
    names: "Fur Coat",
    effect_changes: [],
    effect_entries: {
      effect: "Halves damage from physical attacks.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Halves damage from physical attacks.",
    },
    pokemon: ["furfrou", "persian-alola"],
  },
  "170": {
    id: 170,
    name: "magician",
    names: "Magician",
    effect_changes: [],
    effect_entries: {
      effect:
        "Steals the target's held item when the bearer uses a damaging move.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Steals the target's held item when the bearer uses a damaging move.",
    },
    pokemon: [
      "fennekin",
      "braixen",
      "delphox",
      "klefki",
      "hoopa",
      "hoopa-unbound",
    ],
  },
  "171": {
    id: 171,
    name: "bulletproof",
    names: "Bulletproof",
    effect_changes: [],
    effect_entries: {
      effect: "Protects against bullet, ball, and bomb-based moves.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Protects against bullet, ball, and bomb-based moves.",
    },
    pokemon: [
      "chespin",
      "quilladin",
      "chesnaught",
      "jangmo-o",
      "hakamo-o",
      "kommo-o",
      "wooloo",
      "dubwool",
      "applin",
      "ursaluna",
      "kommo-o-totem",
    ],
  },
  "172": {
    id: 172,
    name: "competitive",
    names: "Competitive",
    effect_changes: [],
    effect_entries: {
      effect:
        "Raises Special Attack by two stages upon having any stat lowered.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises Special Attack by two stages upon having any stat lowered.",
    },
    pokemon: [
      "jigglypuff",
      "wigglytuff",
      "igglybuff",
      "milotic",
      "gothita",
      "gothorita",
      "gothitelle",
      "boltund",
      "wattrel",
      "kilowattrel",
      "meowstic-female",
      "articuno-galar",
    ],
  },
  "173": {
    id: 173,
    name: "strong-jaw",
    names: "Strong Jaw",
    effect_changes: [],
    effect_entries: {
      effect: "Strengthens biting moves to 1.5× their power.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Strengthens biting moves to 1.5× their power.",
    },
    pokemon: [
      "tyrunt",
      "tyrantrum",
      "yungoos",
      "gumshoos",
      "bruxish",
      "chewtle",
      "drednaw",
      "boltund",
      "dracovish",
      "sharpedo-mega",
      "gumshoos-totem",
      "drednaw-gmax",
      "avalugg-hisui",
    ],
  },
  "174": {
    id: 174,
    name: "refrigerate",
    names: "Refrigerate",
    effect_changes: [],
    effect_entries: {
      effect:
        "Turns the bearer's normal-type moves into ice-type moves.  Moves changed by this ability have 1.3× their power.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Turns the bearer's normal moves into ice moves and strengthens them to 1.3× their power.",
    },
    pokemon: ["amaura", "aurorus", "glalie-mega"],
  },
  "175": {
    id: 175,
    name: "sweet-veil",
    names: "Sweet Veil",
    effect_changes: [],
    effect_entries: {
      effect: "Prevents friendly Pokémon from sleeping.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents friendly Pokémon from sleeping.",
    },
    pokemon: [
      "swirlix",
      "slurpuff",
      "cutiefly",
      "ribombee",
      "bounsweet",
      "steenee",
      "tsareena",
      "milcery",
      "alcremie",
      "ribombee-totem",
      "alcremie-gmax",
    ],
  },
  "176": {
    id: 176,
    name: "stance-change",
    names: "Stance Change",
    effect_changes: [],
    effect_entries: {
      effect:
        "Changes aegislash to Blade Forme before using a damaging move, or Shield Forme before using kings shield.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Changes aegislash to Blade Forme before using a damaging move, or Shield Forme before using kings shield.",
    },
    pokemon: ["aegislash-shield", "aegislash-blade"],
  },
  "177": {
    id: 177,
    name: "gale-wings",
    names: "Gale Wings",
    effect_changes: [],
    effect_entries: {
      effect: "Raises flying moves' priority by one stage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Raises flying moves' priority by one stage.",
    },
    pokemon: ["fletchling", "fletchinder", "talonflame"],
  },
  "178": {
    id: 178,
    name: "mega-launcher",
    names: "Mega Launcher",
    effect_changes: [],
    effect_entries: {
      effect: "Strengthens aura and pulse moves to 1.5× their power.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Strengthens aura and pulse moves to 1.5× their power.",
    },
    pokemon: ["clauncher", "clawitzer", "blastoise-mega"],
  },
  "179": {
    id: 179,
    name: "grass-pelt",
    names: "Grass Pelt",
    effect_changes: [],
    effect_entries: {
      effect: "Boosts Defense while grassy terrain is in effect.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Boosts Defense while grassy terrain is in effect.",
    },
    pokemon: ["skiddo", "gogoat"],
  },
  "180": {
    id: 180,
    name: "symbiosis",
    names: "Symbiosis",
    effect_changes: [],
    effect_entries: {
      effect:
        "Passes the bearer's held item to an ally when the ally uses up its item.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Passes the bearer's held item to an ally when the ally uses up its item.",
    },
    pokemon: ["flabebe", "floette", "florges", "oranguru", "floette-eternal"],
  },
  "181": {
    id: 181,
    name: "tough-claws",
    names: "Tough Claws",
    effect_changes: [],
    effect_entries: {
      effect: "Strengthens moves that make contact to 1.33× their power.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Strengthens moves that make contact to 1.33× their power.",
    },
    pokemon: [
      "binacle",
      "barbaracle",
      "perrserker",
      "charizard-mega-x",
      "aerodactyl-mega",
      "metagross-mega",
      "lycanroc-dusk",
      "meowth-galar",
    ],
  },
  "182": {
    id: 182,
    name: "pixilate",
    names: "Pixilate",
    effect_changes: [],
    effect_entries: {
      effect:
        "Turns the bearer's normal-type moves into fairy moves.  Moves changed by this ability have 1.3× their power.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Turns the bearer's normal moves into fairy moves and strengthens them to 1.3× their power.",
    },
    pokemon: ["sylveon", "gardevoir-mega", "altaria-mega"],
  },
  "183": {
    id: 183,
    name: "gooey",
    names: "Gooey",
    effect_changes: [],
    effect_entries: {
      effect: "Lowers attacking Pokémon's Speed by one stage on contact.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Lowers attacking Pokémon's Speed by one stage on contact.",
    },
    pokemon: [
      "goomy",
      "sliggoo",
      "goodra",
      "wiglett",
      "wugtrio",
      "sliggoo-hisui",
      "goodra-hisui",
    ],
  },
  "184": {
    id: 184,
    name: "aerilate",
    names: "Aerilate",
    effect_changes: [],
    effect_entries: {
      effect:
        "Turns the bearer's normal-type moves into flying-type moves.  Moves changed by this ability have 1.3× their power.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Turns the bearer's normal moves into flying moves and strengthens them to 1.3× their power.",
    },
    pokemon: ["pinsir-mega", "salamence-mega"],
  },
  "185": {
    id: 185,
    name: "parental-bond",
    names: "Parental Bond",
    effect_changes: [],
    effect_entries: {
      effect:
        "Lets the bearer hit twice with damaging moves.  The second hit has half power.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Lets the bearer hit twice with damaging moves.  The second hit has half power.",
    },
    pokemon: ["kangaskhan-mega"],
  },
  "186": {
    id: 186,
    name: "dark-aura",
    names: "Dark Aura",
    effect_changes: [],
    effect_entries: {
      effect: "Strengthens dark moves for all friendly and opposing Pokémon.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens dark moves to 1.33× their power for all friendly and opposing Pokémon.",
    },
    pokemon: ["yveltal"],
  },
  "187": {
    id: 187,
    name: "fairy-aura",
    names: "Fairy Aura",
    effect_changes: [],
    effect_entries: {
      effect: "Strengthens fairy moves for all friendly and opposing Pokémon.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens fairy moves to 1.33× their power for all friendly and opposing Pokémon.",
    },
    pokemon: ["xerneas"],
  },
  "188": {
    id: 188,
    name: "aura-break",
    names: "Aura Break",
    effect_changes: [],
    effect_entries: {
      effect:
        "While this Pokémon is on the field, dark aura and fairy aura weaken moves of their respective types to 2/3 their power, rather than strengthening them.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Makes dark aura and fairy aura weaken moves of their respective types.",
    },
    pokemon: ["zygarde-50", "zygarde-10"],
  },
  "189": {
    id: 189,
    name: "primordial-sea",
    names: "Primordial Sea",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle or gains this ability, the weather becomes heavy rain.  Heavy rain has all the properties of rain dance and also causes damaging Fire moves to fail.\n\nHeavy rain ends when this Pokémon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of delta stream and desolate land.\n\nair lock and cloud nine will prevent the effects of heavy rain, including allowing Fire moves to work, but will not allow the weather to be changed.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Creates heavy rain, which has all the properties of Rain Dance, cannot be replaced, and causes damaging Fire moves to fail.",
    },
    pokemon: ["kyogre-primal"],
  },
  "190": {
    id: 190,
    name: "desolate-land",
    names: "Desolate Land",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle or gains this ability, the weather becomes extremely harsh sunlight.  Extremely harsh sunlight has all the properties of sunny day and also causes damaging Water moves to fail.\n\nExtremely harsh sunlight ends when this Pokémon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of delta stream and primordial sea.\n\nair lock and cloud nine will prevent the effects of extremely harsh sunlight, including allowing Water moves to work, but will not allow the weather to be changed.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Creates extremely harsh sunlight, which has all the properties of Sunny Day, cannot be replaced, and causes damaging Water moves to fail.",
    },
    pokemon: ["groudon-primal"],
  },
  "191": {
    id: 191,
    name: "delta-stream",
    names: "Delta Stream",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle or gains this ability, the weather becomes a mysterious air current.  A mysterious air current causes moves to not be super effective against Flying; they do neutral damage instead.  anticipation and stealth rock are not affected.\n\nThe mysterious air current ends when this Pokémon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of desolate land and primordial sea.\n\nair lock and cloud nine will prevent the effect of a mysterious air current, but will not allow the weather to be changed.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Creates a mysterious air current, which cannot be replaced and causes moves to never be super effective against Flying Pokémon.",
    },
    pokemon: ["rayquaza-mega"],
  },
  "192": {
    id: 192,
    name: "stamina",
    names: "Stamina",
    effect_changes: [],
    effect_entries: {
      effect:
        "Raises this Pokémon's Defense by one stage when it takes damage from a move.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises this Pokémon's Defense by one stage when it takes damage from a move.",
    },
    pokemon: ["mudbray", "mudsdale"],
  },
  "193": {
    id: 193,
    name: "wimp-out",
    names: "Wimp Out",
    effect_changes: [],
    effect_entries: {
      effect:
        "After this Pokémon is hit by a move, if that move caused this Pokémon's HP to drop below half, it switches out.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "This Pokémon automatically switches out when its HP drops below half.",
    },
    pokemon: ["wimpod"],
  },
  "194": {
    id: 194,
    name: "emergency-exit",
    names: "Emergency Exit",
    effect_changes: [],
    effect_entries: {
      effect:
        "After this Pokémon is hit by a move, if that move caused this Pokémon's HP to drop below half, it switches out.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "This Pokémon automatically switches out when its HP drops below half.",
    },
    pokemon: ["golisopod"],
  },
  "195": {
    id: 195,
    name: "water-compaction",
    names: "Water Compaction",
    effect_changes: [],
    effect_entries: {
      effect:
        "Raises this Pokémon's Defense by two stages when it's hit by a Water move.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises this Pokémon's Defense by two stages when it's hit by a Water move.",
    },
    pokemon: ["sandygast", "palossand"],
  },
  "196": {
    id: 196,
    name: "merciless",
    names: "Merciless",
    effect_changes: [],
    effect_entries: {
      effect: "This Pokémon's moves critical hit against poisoned targets.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "This Pokémon's moves critical hit against poisoned targets.",
    },
    pokemon: ["mareanie", "toxapex"],
  },
  "197": {
    id: 197,
    name: "shields-down",
    names: "Shields Down",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle and at the end of each turn, if its HP is 50% or above, it changes into Meteor Form; otherwise, it changes into Core Form.  In Meteor Form, it cannot be given a major status ailment (though existing ones are not cured), cannot become drowsy from yawn, and cannot use rest (which will simply fail).\n\nThis ability cannot be copied, replaced, or nullified.  This ability only takes effect for Minior.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Transforms this Minior between Core Form and Meteor Form.  Prevents major status ailments and drowsiness while in Meteor Form.",
    },
    pokemon: [
      "minior-red-meteor",
      "minior-orange-meteor",
      "minior-yellow-meteor",
      "minior-green-meteor",
      "minior-blue-meteor",
      "minior-indigo-meteor",
      "minior-violet-meteor",
      "minior-red",
      "minior-orange",
      "minior-yellow",
      "minior-green",
      "minior-blue",
      "minior-indigo",
      "minior-violet",
    ],
  },
  "198": {
    id: 198,
    name: "stakeout",
    names: "Stakeout",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves have double power against Pokémon that switched in this turn.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "This Pokémon's moves have double power against Pokémon that switched in this turn.",
    },
    pokemon: [
      "yungoos",
      "gumshoos",
      "nickit",
      "thievul",
      "tarountula",
      "spidops",
      "maschiff",
      "mabosstiff",
      "gumshoos-totem",
    ],
  },
  "199": {
    id: 199,
    name: "water-bubble",
    names: "Water Bubble",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon is hit by a Fire move, the damage is halved.  When this Pokémon uses a Water move, the power is doubled. This Pokémon cannot be burned, and if it becomes burned, the burn is immediately cured.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Halves damage from Fire moves, doubles damage of Water moves, and prevents burns.",
    },
    pokemon: ["dewpider", "araquanid", "araquanid-totem"],
  },
  "200": {
    id: 200,
    name: "steelworker",
    names: "Steelworker",
    effect_changes: [],
    effect_entries: {
      effect: "This Pokémon's Steel moves have 1.5× power.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "This Pokémon's Steel moves have 1.5× power.",
    },
    pokemon: ["dhelmise"],
  },
  "201": {
    id: 201,
    name: "berserk",
    names: "Berserk",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever this Pokémon takes damage from a move that causes its HP to drop below 50%, its Special Attack rises by one stage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises this Pokémon's Special Attack by one stage every time its HP drops below half.",
    },
    pokemon: ["drampa", "moltres-galar"],
  },
  "202": {
    id: 202,
    name: "slush-rush",
    names: "Slush Rush",
    effect_changes: [],
    effect_entries: {
      effect: "During Hail, this Pokémon has double Speed.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "During Hail, this Pokémon has double Speed.",
    },
    pokemon: [
      "cubchoo",
      "beartic",
      "arctozolt",
      "arctovish",
      "cetitan",
      "sandshrew-alola",
      "sandslash-alola",
    ],
  },
  "203": {
    id: 203,
    name: "long-reach",
    names: "Long Reach",
    effect_changes: [],
    effect_entries: {
      effect: "A move used by this Pokémon will not make contact.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "This Pokémon's moves do not make contact.",
    },
    pokemon: ["rowlet", "dartrix", "decidueye", "decidueye-hisui"],
  },
  "204": {
    id: 204,
    name: "liquid-voice",
    names: "Liquid Voice",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon uses a move that is sound-based, that move's type is Water.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Sound-based moves become Water-type.",
    },
    pokemon: ["popplio", "brionne", "primarina"],
  },
  "205": {
    id: 205,
    name: "triage",
    names: "Triage",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's healing moves have their priority increased by 3.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "This Pokémon's healing moves have their priority increased by 3.",
    },
    pokemon: ["comfey"],
  },
  "206": {
    id: 206,
    name: "galvanize",
    names: "Galvanize",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon uses a Normal moves, that move is Electric its power is 1.2×.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "This Pokémon's Normal moves are Electric and have their power increased to 1.2×.",
    },
    pokemon: ["geodude-alola", "graveler-alola", "golem-alola"],
  },
  "207": {
    id: 207,
    name: "surge-surfer",
    names: "Surge Surfer",
    effect_changes: [],
    effect_entries: {
      effect: "Doubles this Pokémon's Speed on Electric Terrain.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Doubles this Pokémon's Speed on Electric Terrain.",
    },
    pokemon: ["raichu-alola"],
  },
  "208": {
    id: 208,
    name: "schooling",
    names: "Schooling",
    effect_changes: [],
    effect_entries: {
      effect:
        "If this Pokémon is a wishiwashi and level 20 or above, then when it enters battle and at the start of each turn, it becomes Schooling Form if its HP is 25% or higher and Solo Form otherwise.\n\nThis ability cannot be replaced, copied, or nullified.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Wishiwashi becomes Schooling Form when its HP is 25% or higher.",
    },
    pokemon: ["wishiwashi-solo", "wishiwashi-school"],
  },
  "209": {
    id: 209,
    name: "disguise",
    names: "Disguise",
    effect_changes: [],
    effect_entries: {
      effect:
        "If this Pokémon is in its Disguised Form and takes damage from a move, it switches to its Busted Form and the damage is prevented.  Other effects are not prevented.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Mimikyu.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Prevents the first instance of battle damage.",
    },
    pokemon: [
      "mimikyu-disguised",
      "mimikyu-busted",
      "mimikyu-totem-disguised",
      "mimikyu-totem-busted",
    ],
  },
  "210": {
    id: 210,
    name: "battle-bond",
    names: "Battle Bond",
    effect_changes: [],
    effect_entries: {
      effect:
        "Transforms this Pokémon into Ash-Greninja after fainting an opponent.  Water Shuriken's power is 20 and always hits three times.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Greninja.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Transforms this Pokémon into Ash-Greninja after fainting an opponent.  Water Shuriken's power is 20 and always hits three times.",
    },
    pokemon: ["greninja-battle-bond", "greninja-ash"],
  },
  "211": {
    id: 211,
    name: "power-construct",
    names: "Power Construct",
    effect_changes: [],
    effect_entries: {
      effect:
        "Transforms 10% or 50% Zygarde into Complete Forme when its HP is below 50%.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Zygarde.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Transforms 10% or 50% Zygarde into Complete Forme when its HP is below 50%.",
    },
    pokemon: [
      "zygarde-10-power-construct",
      "zygarde-50-power-construct",
      "zygarde-complete",
    ],
  },
  "212": {
    id: 212,
    name: "corrosion",
    names: "Corrosion",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's moves and item ignore the usual immunity of Poison and Steel Pokémon when attempting to inflict poison.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "This Pokémon can inflict poison on Poison and Steel Pokémon.",
    },
    pokemon: ["salandit", "salazzle", "glimmet", "glimmora", "salazzle-totem"],
  },
  "213": {
    id: 213,
    name: "comatose",
    names: "Comatose",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon always acts as though it were Asleep.  It cannot be given another status ailment; it's unaffected by yawn; it can use sleep talk; and so on.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "This Pokémon always  acts as though it were Asleep.",
    },
    pokemon: ["komala"],
  },
  "214": {
    id: 214,
    name: "queenly-majesty",
    names: "Queenly Majesty",
    effect_changes: [],
    effect_entries: {
      effect:
        "When an opposing Pokémon attempts to use a move that targets this Pokémon or an ally, and that move has priority, it will fail.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Opposing Pokémon cannot use priority attacks.",
    },
    pokemon: ["tsareena"],
  },
  "215": {
    id: 215,
    name: "innards-out",
    names: "Innards Out",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon faints from an opponent's move, that opponent takes damage equal to the HP this Pokémon had remaining.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "When this Pokémon faints from an opponent's move, that opponent takes damage equal to the HP this Pokémon had remaining.",
    },
    pokemon: ["pyukumuku"],
  },
  "216": {
    id: 216,
    name: "dancer",
    names: "Dancer",
    effect_changes: [],
    effect_entries: {
      effect:
        "Whenever another Pokémon uses a dance move, this Pokémon will use the same move immediately afterwards.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Whenever another Pokémon uses a dance move, this Pokémon will use the same move immediately afterwards.",
    },
    pokemon: [
      "oricorio-baile",
      "oricorio-pom-pom",
      "oricorio-pau",
      "oricorio-sensu",
    ],
  },
  "217": {
    id: 217,
    name: "battery",
    names: "Battery",
    effect_changes: [],
    effect_entries: {
      effect: "Ally Pokémon's moves have their power increased to 1.3×.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Ally Pokémon's moves have their power increased to 1.3×.",
    },
    pokemon: ["charjabug"],
  },
  "218": {
    id: 218,
    name: "fluffy",
    names: "Fluffy",
    effect_changes: [],
    effect_entries: {
      effect:
        "Damage from contact moves is halved.  Damage from Fire moves is doubled.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Damage from contact moves is halved.  Damage from Fire moves is doubled.",
    },
    pokemon: [
      "stufful",
      "bewear",
      "wooloo",
      "dubwool",
      "greavard",
      "houndstone",
    ],
  },
  "219": {
    id: 219,
    name: "dazzling",
    names: "Dazzling",
    effect_changes: [],
    effect_entries: {
      effect:
        "When an opposing Pokémon attempts to use a move that targets this Pokémon or an ally, and that move has priority, it will fail.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Opposing Pokémon cannot use priority attacks.",
    },
    pokemon: ["bruxish"],
  },
  "220": {
    id: 220,
    name: "soul-heart",
    names: "Soul-Heart",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's Special Attack rises by one stage every time any Pokémon faints.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "This Pokémon's Special Attack rises by one stage every time any Pokémon faints.",
    },
    pokemon: ["magearna", "magearna-original"],
  },
  "221": {
    id: 221,
    name: "tangling-hair",
    names: "Tangling Hair",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon takes regular damage from a contact move, the attacking Pokémon's Speed lowers by one stage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "When this Pokémon takes regular damage from a contact move, the attacking Pokémon's Speed lowers by one stage.",
    },
    pokemon: ["diglett-alola", "dugtrio-alola"],
  },
  "222": {
    id: 222,
    name: "receiver",
    names: "Receiver",
    effect_changes: [],
    effect_entries: {
      effect: "When an ally faints, this Pokémon gains its Ability.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "When an ally faints, this Pokémon gains its Ability.",
    },
    pokemon: ["passimian"],
  },
  "223": {
    id: 223,
    name: "power-of-alchemy",
    names: "Power of Alchemy",
    effect_changes: [],
    effect_entries: {
      effect: "When an ally faints, this Pokémon gains its Ability.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "When an ally faints, this Pokémon gains its Ability.",
    },
    pokemon: ["grimer-alola", "muk-alola"],
  },
  "224": {
    id: 224,
    name: "beast-boost",
    names: "Beast Boost",
    effect_changes: [],
    effect_entries: {
      effect:
        "Raises this Pokémon's highest stat by one stage when it faints another Pokémon.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Raises this Pokémon's highest stat by one stage when it faints another Pokémon.",
    },
    pokemon: [
      "nihilego",
      "buzzwole",
      "pheromosa",
      "xurkitree",
      "celesteela",
      "kartana",
      "guzzlord",
      "poipole",
      "naganadel",
      "stakataka",
      "blacephalon",
    ],
  },
  "225": {
    id: 225,
    name: "rks-system",
    names: "RKS System",
    effect_changes: [],
    effect_entries: {
      effect:
        "Changes this Pokémon's type to match its held Memory.\n\nThis ability cannot be copied, replaced, or nullified.  This ability only takes effect for Silvally.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Changes this Pokémon's type to match its held Memory.",
    },
    pokemon: ["silvally"],
  },
  "226": {
    id: 226,
    name: "electric-surge",
    names: "Electric Surge",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle, it changes the terrain to electric terrain.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "When this Pokémon enters battle, it changes the terrain to Electric Terrain.",
    },
    pokemon: ["tapu-koko", "pincurchin"],
  },
  "227": {
    id: 227,
    name: "psychic-surge",
    names: "Psychic Surge",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle, it changes the terrain to psychic terrain.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "When this Pokémon enters battle, it changes the terrain to Psychic Terrain.",
    },
    pokemon: ["tapu-lele", "indeedee-male", "indeedee-female"],
  },
  "228": {
    id: 228,
    name: "misty-surge",
    names: "Misty Surge",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle, it changes the terrain to misty terrain.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "When this Pokémon enters battle, it changes the terrain to Misty Terrain.",
    },
    pokemon: ["tapu-fini", "weezing-galar"],
  },
  "229": {
    id: 229,
    name: "grassy-surge",
    names: "Grassy Surge",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon enters battle, it changes the terrain to grassy terrain.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "When this Pokémon enters battle, it changes the terrain to Grassy Terrain.",
    },
    pokemon: [
      "tapu-bulu",
      "grookey",
      "thwackey",
      "rillaboom",
      "rillaboom-gmax",
    ],
  },
  "230": {
    id: 230,
    name: "full-metal-body",
    names: "Full Metal Body",
    effect_changes: [],
    effect_entries: {
      effect:
        "This Pokémon's stats cannot be lowered by other Pokémon's moves or abilities.  This effect only applies to normal stat modifications and not more exotic effects such as topsy turvy or power swap.\n\nThis Ability is not bypassed by mold breaker, teravolt, or turboblaze.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Other Pokémon cannot lower this Pokémon's stats.",
    },
    pokemon: ["solgaleo"],
  },
  "231": {
    id: 231,
    name: "shadow-shield",
    names: "Shadow Shield",
    effect_changes: [],
    effect_entries: {
      effect:
        "When this Pokémon has full HP, regular damage (not fixed damage!) from moves is halved.\n\nThis ability cannot be nullified.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "When this Pokémon has full HP, regular damage from moves is halved.",
    },
    pokemon: ["lunala"],
  },
  "232": {
    id: 232,
    name: "prism-armor",
    names: "Prism Armor",
    effect_changes: [],
    effect_entries: {
      effect:
        "Super-effective damage this Pokémon takes is reduced to 0.75×.\n\nThis Ability is not bypassed by mold breaker, teravolt, or turboblaze.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Reduces super-effective damage to 0.75×.",
    },
    pokemon: ["necrozma", "necrozma-dusk", "necrozma-dawn"],
  },
  "233": {
    id: 233,
    name: "neuroforce",
    names: "Neuroforce",
    effect_changes: [],
    effect_entries: {
      effect: "Increases super-effective damage dealt to 1.25×.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect: "Increases super-effective damage dealt to 1.25×.",
    },
    pokemon: ["necrozma-ultra"],
  },
  "234": {
    id: 234,
    name: "intrepid-sword",
    names: "Intrepid Sword",
    effect_changes: [],
    pokemon: ["zacian", "zacian-crowned"],
  },
  "235": {
    id: 235,
    name: "dauntless-shield",
    names: "Dauntless Shield",
    effect_changes: [],
    pokemon: ["zamazenta", "zamazenta-crowned"],
  },
  "236": {
    id: 236,
    name: "libero",
    names: "Libero",
    effect_changes: [],
    pokemon: ["scorbunny", "raboot", "cinderace", "cinderace-gmax"],
  },
  "237": {
    id: 237,
    name: "ball-fetch",
    names: "Ball Fetch",
    effect_changes: [],
    pokemon: ["yamper"],
  },
  "238": {
    id: 238,
    name: "cotton-down",
    names: "Cotton Down",
    effect_changes: [],
    pokemon: ["gossifleur", "eldegoss"],
  },
  "239": {
    id: 239,
    name: "propeller-tail",
    names: "Propeller Tail",
    effect_changes: [],
    pokemon: ["arrokuda", "barraskewda"],
  },
  "240": {
    id: 240,
    name: "mirror-armor",
    names: "Mirror Armor",
    effect_changes: [],
    pokemon: ["corviknight", "corviknight-gmax"],
  },
  "241": {
    id: 241,
    name: "gulp-missile",
    names: "Gulp Missile",
    effect_changes: [],
    pokemon: ["cramorant", "cramorant-gulping", "cramorant-gorging"],
  },
  "242": {
    id: 242,
    name: "stalwart",
    names: "Stalwart",
    effect_changes: [],
    pokemon: ["duraludon", "duraludon-gmax"],
  },
  "243": {
    id: 243,
    name: "steam-engine",
    names: "Steam Engine",
    effect_changes: [],
    pokemon: ["rolycoly", "carkol", "coalossal", "coalossal-gmax"],
  },
  "244": {
    id: 244,
    name: "punk-rock",
    names: "Punk Rock",
    effect_changes: [],
    pokemon: [
      "toxtricity-amped",
      "toxtricity-low-key",
      "toxtricity-amped-gmax",
      "toxtricity-low-key-gmax",
    ],
  },
  "245": {
    id: 245,
    name: "sand-spit",
    names: "Sand Spit",
    effect_changes: [],
    pokemon: ["silicobra", "sandaconda", "sandaconda-gmax"],
  },
  "246": {
    id: 246,
    name: "ice-scales",
    names: "Ice Scales",
    effect_changes: [],
    pokemon: ["snom", "frosmoth"],
  },
  "247": {
    id: 247,
    name: "ripen",
    names: "Ripen",
    effect_changes: [],
    pokemon: ["applin", "flapple", "appletun", "flapple-gmax", "appletun-gmax"],
  },
  "248": {
    id: 248,
    name: "ice-face",
    names: "Ice Face",
    effect_changes: [],
    pokemon: ["eiscue-ice", "eiscue-noice"],
  },
  "249": {
    id: 249,
    name: "power-spot",
    names: "Power Spot",
    effect_changes: [],
    pokemon: ["stonjourner"],
  },
  "250": {
    id: 250,
    name: "mimicry",
    names: "Mimicry",
    effect_changes: [],
    pokemon: ["stunfisk-galar"],
  },
  "251": {
    id: 251,
    name: "screen-cleaner",
    names: "Screen Cleaner",
    effect_changes: [],
    pokemon: ["mr-rime", "mr-mime-galar"],
  },
  "252": {
    id: 252,
    name: "steely-spirit",
    names: "Steely Spirit",
    effect_changes: [],
    pokemon: ["perrserker"],
  },
  "253": {
    id: 253,
    name: "perish-body",
    names: "Perish Body",
    effect_changes: [],
    pokemon: ["cursola"],
  },
  "254": {
    id: 254,
    name: "wandering-spirit",
    names: "Wandering Spirit",
    effect_changes: [],
    pokemon: ["runerigus", "yamask-galar"],
  },
  "255": {
    id: 255,
    name: "gorilla-tactics",
    names: "Gorilla Tactics",
    effect_changes: [],
    pokemon: ["darmanitan-galar-standard", "darmanitan-galar-zen"],
  },
  "256": {
    id: 256,
    name: "neutralizing-gas",
    names: "Neutralizing Gas",
    effect_changes: [],
    pokemon: ["koffing", "weezing", "weezing-galar"],
  },
  "257": {
    id: 257,
    name: "pastel-veil",
    names: "Pastel Veil",
    effect_changes: [],
    pokemon: ["ponyta-galar", "rapidash-galar"],
  },
  "258": {
    id: 258,
    name: "hunger-switch",
    names: "Hunger Switch",
    effect_changes: [],
    pokemon: ["morpeko-full-belly", "morpeko-hangry"],
  },
  "259": {
    id: 259,
    name: "quick-draw",
    names: "Quick Draw",
    effect_changes: [],
    pokemon: ["slowbro-galar"],
  },
  "260": {
    id: 260,
    name: "unseen-fist",
    names: "Unseen Fist",
    effect_changes: [],
    pokemon: [
      "urshifu-single-strike",
      "urshifu-rapid-strike",
      "urshifu-single-strike-gmax",
      "urshifu-rapid-strike-gmax",
    ],
  },
  "261": {
    id: 261,
    name: "curious-medicine",
    names: "Curious Medicine",
    effect_changes: [],
    pokemon: ["slowking-galar"],
  },
  "262": {
    id: 262,
    name: "transistor",
    names: "Transistor",
    effect_changes: [],
    pokemon: ["regieleki"],
  },
  "263": {
    id: 263,
    name: "dragons-maw",
    names: "Dragon’s Maw",
    effect_changes: [],
    pokemon: ["regidrago"],
  },
  "264": {
    id: 264,
    name: "chilling-neigh",
    names: "Chilling Neigh",
    effect_changes: [],
    pokemon: ["glastrier"],
  },
  "265": {
    id: 265,
    name: "grim-neigh",
    names: "Grim Neigh",
    effect_changes: [],
    pokemon: ["spectrier"],
  },
  "266": {
    id: 266,
    name: "as-one-glastrier",
    names: "As One",
    effect_changes: [],
    pokemon: ["calyrex-ice"],
  },
  "267": {
    id: 267,
    name: "as-one-spectrier",
    names: "As One",
    effect_changes: [],
    pokemon: ["calyrex-shadow"],
  },
  "268": {
    id: 268,
    name: "lingering-aroma",
    names: "Lingering Aroma",
    effect_changes: [],
    pokemon: ["oinkologne"],
  },
  "269": {
    id: 269,
    name: "seed-sower",
    names: "Seed Sower",
    effect_changes: [],
    pokemon: ["arboliva"],
  },
  "270": {
    id: 270,
    name: "thermal-exchange",
    names: "Thermal Exchange",
    effect_changes: [],
    pokemon: ["frigibax", "arctibax", "baxcalibur"],
  },
  "271": {
    id: 271,
    name: "anger-shell",
    names: "Anger Shell",
    effect_changes: [],
    pokemon: ["klawf"],
  },
  "272": {
    id: 272,
    name: "purifying-salt",
    names: "Purifying Salt",
    effect_changes: [],
    pokemon: ["nacli", "naclstack", "garganacl"],
  },
  "273": {
    id: 273,
    name: "well-baked-body",
    names: "Well-Baked Body",
    effect_changes: [],
    pokemon: ["dachsbun"],
  },
  "274": {
    id: 274,
    name: "wind-rider",
    names: "Wind Rider",
    effect_changes: [],
    pokemon: ["bramblin", "brambleghast"],
  },
  "275": {
    id: 275,
    name: "guard-dog",
    names: "Guard Dog",
    effect_changes: [],
    pokemon: ["mabosstiff"],
  },
  "276": {
    id: 276,
    name: "rocky-payload",
    names: "Rocky Payload",
    effect_changes: [],
    pokemon: ["bombirdier"],
  },
  "277": {
    id: 277,
    name: "wind-power",
    names: "Wind Power",
    effect_changes: [],
    pokemon: ["wattrel", "kilowattrel"],
  },
  "278": {
    id: 278,
    name: "zero-to-hero",
    names: "Zero to Hero",
    effect_changes: [],
    pokemon: ["palafin", "palafin", "palafin-hero", "palafin-hero"],
  },
  "279": {
    id: 279,
    name: "commander",
    names: "Commander",
    effect_changes: [],
    pokemon: ["tatsugiri", "tatsugiri-droopy", "tatsugiri-stretchy"],
  },
  "280": {
    id: 280,
    name: "electromorphosis",
    names: "Electromorphosis",
    effect_changes: [],
    pokemon: ["bellibolt"],
  },
  "281": {
    id: 281,
    name: "protosynthesis",
    names: "Protosynthesis",
    effect_changes: [],
    pokemon: [
      "great-tusk",
      "great-tusk",
      "scream-tail",
      "scream-tail",
      "brute-bonnet",
      "brute-bonnet",
      "flutter-mane",
      "flutter-mane",
      "slither-wing",
      "slither-wing",
      "sandy-shocks",
      "sandy-shocks",
      "roaring-moon",
      "roaring-moon",
    ],
  },
  "282": {
    id: 282,
    name: "quark-drive",
    names: "Quark Drive",
    effect_changes: [],
    pokemon: [
      "iron-treads",
      "iron-treads",
      "iron-bundle",
      "iron-bundle",
      "iron-hands",
      "iron-hands",
      "iron-jugulis",
      "iron-jugulis",
      "iron-moth",
      "iron-moth",
      "iron-thorns",
      "iron-thorns",
      "iron-valiant",
      "iron-valiant",
    ],
  },
  "283": {
    id: 283,
    name: "good-as-gold",
    names: "Good as Gold",
    effect_changes: [],
    pokemon: ["gholdengo", "gholdengo"],
  },
  "284": {
    id: 284,
    name: "vessel-of-ruin",
    names: "Vessel of Ruin",
    effect_changes: [],
    pokemon: ["ting-lu", "ting-lu"],
  },
  "285": {
    id: 285,
    name: "sword-of-ruin",
    names: "Sword of Ruin",
    effect_changes: [],
    pokemon: ["chien-pao", "chien-pao"],
  },
  "286": {
    id: 286,
    name: "tablets-of-ruin",
    names: "Tablets of Ruin",
    effect_changes: [],
    pokemon: ["wo-chien", "wo-chien"],
  },
  "287": {
    id: 287,
    name: "beads-of-ruin",
    names: "Beads of Ruin",
    effect_changes: [],
    pokemon: ["chi-yu", "chi-yu"],
  },
  "288": {
    id: 288,
    name: "orichalcum-pulse",
    names: "Orichalcum Pulse",
    effect_changes: [],
    pokemon: [
      "koraidon",
      "koraidon",
      "koraidon-limited-build",
      "koraidon-limited-build",
      "koraidon-sprinting-build",
      "koraidon-sprinting-build",
      "koraidon-swimming-build",
      "koraidon-swimming-build",
      "koraidon-gliding-build",
      "koraidon-gliding-build",
    ],
  },
  "289": {
    id: 289,
    name: "hadron-engine",
    names: "Hadron Engine",
    effect_changes: [],
    pokemon: [
      "miraidon",
      "miraidon",
      "miraidon-low-power-mode",
      "miraidon-low-power-mode",
      "miraidon-drive-mode",
      "miraidon-drive-mode",
      "miraidon-aquatic-mode",
      "miraidon-aquatic-mode",
      "miraidon-glide-mode",
      "miraidon-glide-mode",
    ],
  },
  "290": {
    id: 290,
    name: "opportunist",
    names: "Opportunist",
    effect_changes: [],
    pokemon: ["espathra"],
  },
  "291": {
    id: 291,
    name: "cud-chew",
    names: "Cud Chew",
    effect_changes: [],
    pokemon: [
      "farigiraf",
      "tauros-paldea-combat-breed",
      "tauros-paldea-blaze-breed",
      "tauros-paldea-aqua-breed",
    ],
  },
  "292": {
    id: 292,
    name: "sharpness",
    names: "Sharpness",
    effect_changes: [],
    pokemon: ["gallade", "veluza"],
  },
  "293": {
    id: 293,
    name: "supreme-overlord",
    names: "Supreme Overlord",
    effect_changes: [],
    pokemon: ["kingambit"],
  },
  "294": {
    id: 294,
    name: "costar",
    names: "Costar",
    effect_changes: [],
    pokemon: ["flamigo"],
  },
  "295": {
    id: 295,
    name: "toxic-debris",
    names: "Toxic Debris",
    effect_changes: [],
    pokemon: ["glimmet", "glimmora"],
  },
  "296": {
    id: 296,
    name: "armor-tail",
    names: "Armor Tail",
    effect_changes: [],
    pokemon: ["farigiraf"],
  },
  "297": {
    id: 297,
    name: "earth-eater",
    names: "Earth Eater",
    effect_changes: [],
    pokemon: ["orthworm"],
  },
  "298": {
    id: 298,
    name: "mycelium-might",
    names: "Mycelium Might",
    effect_changes: [],
    pokemon: ["toedscool", "toedscool", "toedscruel", "toedscruel"],
  },
};
