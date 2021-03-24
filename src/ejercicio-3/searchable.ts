import {Streamable} from "./streamable";

export interface StreamableSearchable<T> extends Streamable<T> {
    searchBy(param: string, value: string): T[];
}