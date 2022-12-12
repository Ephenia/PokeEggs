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
    party: {
        [key: number]: {
            [key: string]: any
        }
    },
    items: ItemInventory,
    buffHandler: BuffSystem,
    radarHandler: PokeRadar,
    eggHandler: EggSystem,
    prefs: PlayerPreference
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

interface EggSystem {
    [key: number]: null | string
}

interface PlayerPreference {
    [key: string]: number
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

interface BagTabLayout {
    [key: number]: Array<string>
}