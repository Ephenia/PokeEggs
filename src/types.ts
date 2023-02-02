interface MenuLayout {
    [key: number]: {
        [key: string]: any
    }
}

interface NavLayout {
    [key: number]: {
        [key: string]: any
    }
}

interface PlayerLayout {
    leadPoke: Pokemon,
    party: Pokemon,
    items: ItemInventory,
    pokemonBox: Pokemon,
    buffHandler: BuffSystem,
    radarHandler: PokeRadar,
    daycareHandler: Daycare,
    eggHandler: EggSystem,
    prefs: PlayerPreference,
    flags: Flags,
    notifyTrack: Notifications,
    statistics: Statistics,
    settings: Settings
}

interface Pokemon {
    [key: number]: {
        [key: string]: any
    }
}

interface ItemInventory {
    [key: number]: {
        [key: string]: any
    }
}

interface BuffSystem {
    [key: number]: {
        [key: string]: any
    }
}

interface PokeRadar {
    [key: string]: any
}

interface Daycare {
    pokemon: Pokemon,
    eggs: Pokemon,
    [key: string]: any
}

interface EggSystem {
    [key: number]: null | string
}

interface PlayerPreference {
    [key: string]: any
}

interface Flags {
    [key: string]: any
}

interface Notifications {
    [key: string]: any
}

interface Statistics {
    [key: string]: any
}

interface ItemData {
    [key: number]: {
        [key: string]: any,
    }
}

interface PokemonData {
    [key: number]: {
        [key: string]: any
    }
}

interface AbilityData {
    [key: number]: {
        [key: string]: any
    }
}

interface Settings {
    [key: string]: {
        [key: string]: any
    }
}

interface BagTabLayout {
    [key: number]: Array<string>
}