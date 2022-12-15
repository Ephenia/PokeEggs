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
    party: Pokemon,
    items: ItemInventory,
    pokemonBox: Pokemon,
    buffHandler: BuffSystem,
    radarHandler: PokeRadar,
    eggHandler: EggSystem,
    prefs: PlayerPreference
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

interface EggSystem {
    [key: number]: null | string
}

interface PlayerPreference {
    [key: string]: any,
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