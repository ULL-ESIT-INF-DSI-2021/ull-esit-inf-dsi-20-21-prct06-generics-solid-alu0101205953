import {Fighter} from './fighter';

/**
 * Class that represents a combat between two fighters
 */
export class Combat {
    /**
     * Creates a new combat between two Fighters
     * @param fighter1 The first fighter
     * @param fighter2 The second fighter
     */
    constructor(public readonly fighter1: Fighter, public readonly fighter2: Fighter) { }

    /**
     * Calculates the damage a fighter causes to another having in mind the universes they come from
     * @param fighter1 The first fighter
     * @param fighter2 The second fighter
     * @returns The amount of damage
     */
     damage(fighter1: Fighter, fighter2: Fighter) {
        let effectiveness: number;

        switch (fighter1.getUniverse()) {
            case fighter2.getUniverse():
                effectiveness = 1;
                break;

            case 'Marvel':
                if (fighter2.getUniverse() == 'DC') effectiveness = 2;
                else if (fighter2.getUniverse() == 'Star Wars') effectiveness = 0.5;
                else if (fighter2.getUniverse() == 'Dragon Ball') effectiveness = 1;
                else if (fighter2.getUniverse() == 'Pokemon') effectiveness = 1.5;
                else effectiveness = 0;
                break;

            case 'DC':
                if (fighter2.getUniverse() == 'Marvel') effectiveness = 0.5;
                else if (fighter2.getUniverse() == 'Star Wars') effectiveness = 2;
                else if (fighter2.getUniverse() == 'Dragon Ball') effectiveness = 1.5;
                else if (fighter2.getUniverse() == 'Pokemon') effectiveness = 1;
                else effectiveness = 0;
                break;

            case 'Pokemon':
                if (fighter2.getUniverse() == 'DC') effectiveness = 1;
                else if (fighter2.getUniverse() == 'Star Wars') effectiveness = 1.5;
                else if (fighter2.getUniverse() == 'Dragon Ball') effectiveness = 2;
                else if (fighter2.getUniverse() == 'Marvel') effectiveness = 0.5;
                else effectiveness = 0;
                break;

            case 'Dragon Ball':
                if (fighter2.getUniverse() == 'DC') effectiveness = 2;
                else if (fighter2.getUniverse() == 'Star Wars') effectiveness = 0.5;
                else if (fighter2.getUniverse() == 'Marvel') effectiveness = 1;
                else if (fighter2.getUniverse() == 'Pokemon') effectiveness = 1.5;
                else effectiveness = 0;
                break;

            case 'Star Wars':
                if (fighter2.getUniverse() == 'DC') effectiveness = 1;
                else if (fighter2.getUniverse() == 'Marvel') effectiveness = 1.5;
                else if (fighter2.getUniverse() == 'Dragon Ball') effectiveness = 2;
                else if (fighter2.getUniverse() == 'Pokemon') effectiveness = 0.5;
                else effectiveness = 0;
                break;

            default:
                effectiveness = 0;
                break;
        }
        return (50 * (fighter1.getStats().attack/fighter2.getStats().defense) * effectiveness);
    }

    /**
     * Simulates a fight
     * @returns The winner of the combat
     */
     start() {
        let HP1: number = this.fighter1.getStats().HP;
        let HP2: number = this.fighter2.getStats().HP;

        while ((HP1 > 0) && (HP2 > 0)) {
            console.log(`${this.fighter1.getPhrase()}`); // Catching phrase WARNING
            HP2 -= this.damage(this.fighter1, this.fighter2);
            if (HP2 > 0) {
                console.log(`${this.fighter2.getPhrase()}`);
                HP1 -= this.damage(this.fighter2, this.fighter1);
            }

            if ((HP1 > 0) && (HP2 > 0)) {
                console.log(`${this.fighter1.getName()} HP = ${HP1}\n${this.fighter2.getName()} HP = ${HP2}`);
            }
        }

        if (HP1 <= 0) {
            return (`${this.fighter2.getName()} wins!`);
        } else {
            return (`${this.fighter1.getName()} wins!`);
        }
    }
}