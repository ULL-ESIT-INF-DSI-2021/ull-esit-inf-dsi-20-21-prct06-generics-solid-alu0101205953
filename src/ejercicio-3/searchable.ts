import {Streamable} from "./streamable";

/**
 * Allows to implement the search method
 * @function searchBy Allows to search items by a value like title, year, etc.
 */
export interface StreamableSearchable<T> extends Streamable<T> {
    searchBy(param: string, value: string): T[];
}