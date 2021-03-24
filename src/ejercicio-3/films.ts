import {BasicStreamableCollection} from "./basic";

export type film = {
    title: string;
    year: number;
    duration: number;
    genre: string;
}

export class Films extends BasicStreamableCollection<film> {
    constructor(protected items: film[]) {
        super(items);
      }

    searchBy(param: string, value: string) {
        let result: film[] = [];
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

    getItems() {
        return this.items;
    }
}