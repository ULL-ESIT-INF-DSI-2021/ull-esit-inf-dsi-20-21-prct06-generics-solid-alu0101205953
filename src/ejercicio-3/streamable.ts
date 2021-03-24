export interface Streamable<T> {
    searchBy(param: string, value: string): T[];
    addItem(newItem: T): void;
    getItems(): T[];
    getNumberOfItems(): number;
}