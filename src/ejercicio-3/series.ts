import {BasicStreamableCollection} from "./basic";

export type serie = {
    title: string;
    year: number;
    seasons: number;
    episodes: number;
    genre: string;
}
export class Series extends BasicStreamableCollection<serie> {
    constructor(protected items: serie[]) {
        super(items);
      }

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

    getItems() {
        return this.items;
    }
}