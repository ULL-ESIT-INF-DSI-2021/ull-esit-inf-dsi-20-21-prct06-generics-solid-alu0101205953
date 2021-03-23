import {isConvertible} from './convertible';

/**
 * Class that represents temperature measurement units
 */
export class Temperature implements isConvertible<[string, number]> {
    units: [string, number][];

    /**
     * Inserts some units to an array and their equivalents
     */
    constructor() {
        this.units = [['celsius', 10], ['kelvin', 283], ['fahrenheit', 50]];
    }

    /**
     * Performs the unit conversion
     * @param first Unit we want to convert
     * @param second Unit in which we want to convert the first
     * @returns A tuple with the result of the conversion
     */
    convert(first: [string, number], second: string): [string, number] {
        if((this.units.filter((x) => (x[0] == first[0])).length > 0) && (this.units.filter((x) => (x[0] == second)).length > 0)) {
            // let conv1: [string, number][] = this.units.filter((x) => (x[0] == first[0]));
            // let conv2: [string, number][] = this.units.filter((x) => (x[0] == second));
            let result: [string, number] = ['', 0];
            if(first[0] == 'celsius') {
                if (second == 'fahrenheit') {
                    result = [second, Number((first[1] * 1.8 + 32).toFixed(1))];
                } else if (second == 'kelvin') {
                    result = [second, Number((first[1] + 273.15).toFixed(1))];
                }
            } else if (first[0] == 'kelvin') {
                if (second == 'fahrenheit') {
                    result = [second, Number((1.8 * (first[1] - 273.15) + 32).toFixed(1))];
                } else if (second == 'celsius') {
                    result = [second, Number((first[1] - 273.15).toFixed(1))];
                }
            } else if (first[0] == 'fahrenheit') {
                if (second == 'kelvin') {
                    result = [second, Number(((5/9) * (first[1] - 32) + 273.15).toFixed(1))];
                } else if (second == 'celsius') {
                    result = [second, Number(((first[1] - 32) / 1.8).toFixed(1))];
                }
            }
            return result;
        } else return ['Unit not found', 0];
    }
}