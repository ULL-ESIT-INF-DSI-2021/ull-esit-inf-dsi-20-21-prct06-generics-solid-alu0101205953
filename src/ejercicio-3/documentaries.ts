import {BasicStreamableCollection} from "./basic";

/**
 * Attributes that a documentary has
 * @param title Title of the documentary
 * @param year Year when it was released
 * @param duration How much time it lasts
 * @param genre Genre of the documentary
 */
export type documentary = {
    title: string;
    year: number;
    duration: number;
    genre: string;
}

/**
 * Class that represents a collection of documentaries
 */
export class Documentaries extends BasicStreamableCollection<documentary> {
    /**
     * Creates a new instance of a collection
     * @param items Collection of documentaries
     */
    constructor(protected items: documentary[]) {
        super(items);
      }

    /**
     * Allows to search items by a value like title, year, etc.
     * @param param The parameter you want to search by
     * @param value The value of the parameter
     */
    searchBy(param: string, value: string) {
        let result: documentary[] = [];
        switch (param) {
            case ('title'):
                result = this.getItems().filter((x) => (x.title == value));
                return result;
                break;
            case ('year'):
                result = this.getItems().filter((x) => (x.year.toString() == value));
                return result;
                break;
            case ('duration'):
                result = this.getItems().filter((x) => (x.duration.toString() == value));
                return result;
                break;
            case ('genre'):
                result = this.getItems().filter((x) => (x.genre == value));
                return result;
                break;
            default:
                return [];
                break;
        }
    }

    /**
     * Returns the collection
     */
    getItems() {
        return this.items;
    }
}