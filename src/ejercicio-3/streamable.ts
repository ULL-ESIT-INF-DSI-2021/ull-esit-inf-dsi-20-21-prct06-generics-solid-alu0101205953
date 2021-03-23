export interface Streamable<T> {
    title: string;
    year: number;
    searchByName(name: string): T[];
    searchByYear(year: number): T[];

}