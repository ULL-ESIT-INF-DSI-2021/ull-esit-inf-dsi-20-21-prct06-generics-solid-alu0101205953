import {StreamableSearchable} from "./searchable";

export abstract class BasicStreamableCollection<T> implements StreamableSearchable<T> {
    constructor(protected items: T[]) {
    }

    abstract searchBy(param: string, value: string): T[];

    addItem(newItem: T) {
        this.items.push(newItem);
    }

    abstract getItems(): T[];

    getNumberOfItems() {
        return this.items.length;
    }
}