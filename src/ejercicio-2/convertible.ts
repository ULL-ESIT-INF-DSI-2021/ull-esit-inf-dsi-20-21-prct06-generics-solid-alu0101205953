/**
 * Interface that let us make unit conversions
 * @param units Measurement unis
 * @function convert Performs the unit conversion
 */
export interface isConvertible<T> {
    units: [string, number][];
    convert(first: T, second: string): T;
}