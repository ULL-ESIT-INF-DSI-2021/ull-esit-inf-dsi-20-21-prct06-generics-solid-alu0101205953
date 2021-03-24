import {BasicStreamableCollection} from "./basic";

/**
 * Attributes that a serie has
 * @param title Title of the serie
 * @param year Year when it was released
 * @param seasons How many seasons it has
 * @param episodes How many episodes it has
 * @param genre Genre of the serie
 */
export type serie = {
    title: string;
    year: number;
    seasons: number;
    episodes: number;
    genre: string;
}

/**
 * Class that represents a collection of series
 */
export class Series extends BasicStreamableCollection<serie> {
    /**
     * Creates a new instance of a collection
     * @param items Collection of series
     */
    constructor(protected items: serie[]) {
        super(items);
      }

    /**
     * Allows to search items by a value like title, year, etc.
     * @param param The parameter you want to search by
     * @param value The value of the parameter
     */
    searchBy(param: string, value: string) {
        let result: serie[] = [];
        switch (param) {
            case ('title'):
                result = this.getItems().filter((x) => (x.title == value));
                return result;
                break;
            case ('year'):
                result = this.getItems().filter((x) => (x.year.toString() == value));
                return result;
                break;
            case ('seasons'):
                result = this.getItems().filter((x) => (x.seasons.toString() == value));
                return result;
                break;
            case ('episodes'):
                result = this.getItems().filter((x) => (x.episodes.toString() == value));
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