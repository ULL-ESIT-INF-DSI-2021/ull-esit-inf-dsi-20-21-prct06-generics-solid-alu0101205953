/**
 * Allows to create a collection of streamable items
 * @function addItem Allows to insert a new item to the collection
 * @function getItems Returns the collection
 * @function getNumberOfItems Obtains the length of the collection
 */
export interface Streamable<T> {
    addItem(newItem: T): void;
    getItems(): T[];
    getNumberOfItems(): number;
}