import {StreamableSearchable} from "./searchable";

/**
 * Class that represents a collection of items that can be streamable and searchable
 */
export abstract class BasicStreamableCollection<T> implements StreamableSearchable<T> {
    /**
     * Creates a new instance of a streamable collection
     * @param items Collection of items
     */
    constructor(protected items: T[]) {
    }

    /**
     * Allows to search items by a value like title, year, etc.
     * @param param The parameter you want to search by
     * @param value The value of the parameter
     */
    abstract searchBy(param: string, value: string): T[];

    /**
     * Allows to insert a new item to the collection
     * @param newItem Item we want to insert
     */
    addItem(newItem: T) {
        this.items.push(newItem);
    }

    /**
     * Returns the collection
     */
    abstract getItems(): T[];

    /**
     * Obtains the length of the collection
     * @returns Length of the collection
     */
    getNumberOfItems() {
        return this.items.length;
    }
}