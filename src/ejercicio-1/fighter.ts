/**
 * The data type who contains the basic stats of a Fighter
 */
 export type statistics = {
    total: number;
    HP: number;
    attack: number;
    defense: number;
    spatk: number;
    spdef: number;
    speed: number;
}

/**
 * Abstract class that represents a fighter
 */
export abstract class Fighter {
    /**
     * Creates a new character instance
     * @param name Name of a character
     * @param weight Weight of a character
     * @param height Height of a character
     * @param phrase Catching phrase of the character
     * @param stats Other statistics of a character such as HP, Attack, etc. defined on a type
     * @param strongerThan Universes the character is strong against
     * @param equalStrong Universes against which the character is just as strong
     */
    constructor(private readonly name: string, private readonly weight: number, private readonly height: number, private readonly stats: statistics, private readonly phrase: string, private readonly strongerThan: string[], private readonly equalStrong: string[]) { }

    /**
     * Obtains the name of the character
     * @returns Name
     */
    getName() {
        return this.name;
    }

    /**
     * Obtains the weight of the character
     * @returns Weight
     */
    getWeight() {
        return this.weight;
    }

    /**
     * Obtains the height of the character
     * @returns height
     */
    getHeight() {
        return this.height;
    }

    /**
     * Obtains the stats of the character
     * @returns Array of stats
     */
    getStats() {
        return this.stats;
    }

    /**
     * Obtains the catching phrase of the character
     * @returns phrase
     */
    getPhrase() {
        return this.phrase;
    }

    /**
     * Obtains the universes the character is strong against
     * @returns Array of universes
     */
    getStrongerThan() {
        return this.strongerThan;
    }

    /**
     * Obtains the universes against which the character is just as strong
     * @returns Array of universes
     */
    getEqualStrong() {
        return this.equalStrong;
    }

    /**
     * Obtains the universe from which the character comes
     * @returns Universe
     */
    abstract getUniverse(): string;
}