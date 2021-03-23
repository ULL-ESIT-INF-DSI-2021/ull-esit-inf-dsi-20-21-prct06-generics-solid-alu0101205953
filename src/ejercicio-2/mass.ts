import {isConvertible} from './convertible';

/**
 * Class that represents mass measurement units
 */
export class Mass implements isConvertible<[string, number]> {
    units: [string, number][];

    /**
     * Inserts some units to an array and their equivalents
     */
    constructor() {
        this.units = [['kilograms', 1], ['grams', 1000], ['miligrams', 1000000]];
    }

    /**
     * Performs the unit conversion
     * @param first Unit we want to convert
     * @param second Unit in which we want to convert the first
     * @returns A tuple with the result of the conversion
     */
    convert(first: [string, number], second: string): [string, number] {
        if((this.units.filter((x) => (x[0] == first[0])).length > 0) && (this.units.filter((x) => (x[0] == second)).length > 0)) {
            let conv1: [string, number][] = this.units.filter((x) => (x[0] == first[0]));
            let conv2: [string, number][] = this.units.filter((x) => (x[0] == second));
            let result: [string, number] = [second, Number(((first[1] * conv2[0][1]) / conv1[0][1]).toFixed(1))];
            return result;
        } else return ['Unit not found', 0];
    }
}