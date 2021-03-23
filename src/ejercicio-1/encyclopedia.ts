import {Fighter} from './fighter';

/**
 * Class that represents the Encyclopedia, which contains lots of Pokemon
 */
 export class Encyclopedia {
    /**
     * Creates a new Encyclopedia instance
     * @param allFighters An array that contains all Pokemon stored on the Encyclopedia
     */
    constructor(public allFighters: Fighter[]) {
    }

    /**
     * Prints all elements of the Encyclopedia
     */
    print() {
        let str: string = '';
        for (let i: number = 0; i < this.allFighters.length; i++) {
            console.log(`Name: ${this.allFighters[i].getName()}`);
            str = str + this.allFighters[i].getName() + ', ';
        }
        str = str.substring(0, str.length - 2);
        return str;
    }
}