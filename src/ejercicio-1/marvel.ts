import {Fighter, statistics} from './fighter';

/**
 * Class that represents a Marvel character
 */
 export class Marvel extends Fighter {
    /**
     * Creates a new Marvel character instance
     * @param name Name of a Marvel character
     * @param weight Weight of a Marvel character
     * @param height Height of a Marvel character
     * @param phrase Catching phrase of the character
     * @param stats Other statistics of a Marvel character such as HP, Attack, etc. defined on a type
     * @param universe Universe from which it comes
     */
    constructor(name: string, weight: number, height: number, stats: statistics, phrase: string, private readonly universe: string = "Marvel") {
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