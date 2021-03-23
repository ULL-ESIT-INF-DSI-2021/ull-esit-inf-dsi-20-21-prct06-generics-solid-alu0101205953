import {Fighter, statistics} from './fighter';

/**
 * Class that represents a Pokemon
 */
 export class Pokemon extends Fighter {
    /**
     * Creates a new Pokemon instance
     * @param name Name of a Pokemon
     * @param weight Weight of a Pokemon
     * @param height Height of a Pokemon
     * @param type Type of a Pokemon
     * @param phrase Catching phrase of the character
     * @param stats Other statistics of a Pokemon such as HP, Attack, etc. defined on a type
     * @param universe Universe from which it comes
     */
    constructor(name: string, weight: number, height: number, private readonly type: string, stats: statistics, phrase: string, private readonly universe: string = "Pokemon") {
        super(name, weight, height, stats, phrase);
    }

    /**
     * Obtains the universe from which the character comes
     * @returns Universe
     */
    getUniverse() {
        return this.universe;
    }

    /**
     * Obtains the type of the pokemon
     * @returns type
     */
    getType() {
        return this.type;
    }
}