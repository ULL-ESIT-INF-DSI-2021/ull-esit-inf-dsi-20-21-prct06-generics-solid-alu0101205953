import {Fighter, statistics} from './fighter';

/**
 * Class that represents a DragonBall character
 */
 export class DragonBall extends Fighter {
    /**
     * Creates a new DragonBall character instance
     * @param name Name of a DragonBall character
     * @param weight Weight of a DragonBall character
     * @param height Height of a DragonBall character
     * @param phrase Catching phrase of the character
     * @param stats Other statistics of a DragonBall character such as HP, Attack, etc. defined on a type
     * @param strongerThan Universes the character is strong against
     * @param equalStrong Universes against which the character is just as strong
     * @param universe Universe from which it comes
     */
    constructor(name: string, weight: number, height: number, stats: statistics, phrase: string, strongerThan: string[], equalStrong: string[], private readonly universe: string = "Dragon Ball") {
        super(name, weight, height, stats, phrase, strongerThan, equalStrong);
    }

    /**
     * Obtains the universe from which the character comes
     * @returns Universe
     */
    getUniverse() {
        return this.universe;
    }
}