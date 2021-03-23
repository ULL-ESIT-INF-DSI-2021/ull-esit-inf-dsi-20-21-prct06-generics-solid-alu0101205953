import {Fighter, statistics} from './fighter';

/**
 * Class that represents a StarWars character
 */
 export class StarWars extends Fighter {
    /**
     * Creates a new StarWars character instance
     * @param name Name of a StarWars character
     * @param weight Weight of a StarWars character
     * @param height Height of a StarWars character
     * @param phrase Catching phrase of the character
     * @param stats Other statistics of a StarWars character such as HP, Attack, etc. defined on a type
     * @param universe Universe from which it comes
     */
    constructor(name: string, weight: number, height: number, stats: statistics, phrase: string, private readonly universe: string = "Star Wars") {
        super(name, weight, height, stats, phrase);
    }

    /**
     * Obtains the universe from which the character comes
     * @returns Universe
     */
    getUniverse() {
        return this.universe;
    }
}