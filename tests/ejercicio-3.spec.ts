import 'mocha';
import {expect} from 'chai';
import {Films, film} from '../src/ejercicio-3/films';
import {Series} from '../src/ejercicio-3/series';
import {Documentaries} from '../src/ejercicio-3/documentaries';

let filmsCollection = new Films([
    {title: 'T1', year: 2000, duration: 120, genre: 'fiction'},
    {title: 'T2', year: 2020, duration: 140, genre: 'action'},
    {title: 'T3', year: 1998, duration: 45, genre: 'terror'},
]);

let addFilm: film = {title: 'T4', year: 2021, duration: 110, genre: 'comedy'};

let seriesCollection = new Series([
    {title: 'S1', year: 2000, seasons: 2, episodes: 15, genre: 'drama'},
    {title: 'S2', year: 2020, seasons: 12, episodes: 345, genre: 'action'},
    {title: 'S3', year: 1998, seasons: 1, episodes: 22, genre: 'romance'},
]);

let docCollection = new Documentaries([
    {title: 'D1', year: 2000, duration: 120, genre: 'fiction'},
    {title: 'D2', year: 2020, duration: 140, genre: 'action'},
    {title: 'D3', year: 1998, duration: 45, genre: 'terror'},
]);

describe('Exercise 3 tests', () => {
    it('Searching films by title', () => {
       expect(filmsCollection.searchBy('title', 'T1').join(' ')).to.be.equal([{title: 'T1', year: 2000, duration: 120, genre: 'fiction'}].join(' '));
    });
    it('Searching films by year', () => {
        expect(filmsCollection.searchBy('year', '2020').join(' ')).to.be.equal([{title: 'T2', year: 2020, duration: 140, genre: 'action'}].join(' '));
    });
    it('Searching films by duration', () => {
        expect(filmsCollection.searchBy('duration', '140').join(' ')).to.be.equal([{title: 'T2', year: 2020, duration: 140, genre: 'action'}].join(' '));
    });
    it('Searching films by genre', () => {
        expect(filmsCollection.searchBy('genre', 'terror').join(' ')).to.be.equal([{title: 'T3', year: 1998, duration: 45, genre: 'terror'}].join(' '));
    });
    it('Searching series by title', () => {
        expect(seriesCollection.searchBy('title', 'S1').join(' ')).to.be.equal([{title: 'S1', year: 2000, seasons: 2, episodes: 15, genre: 'drama'}].join(' '));
     });
     it('Searching series by year', () => {
         expect(seriesCollection.searchBy('year', '2020').join(' ')).to.be.equal([{title: 'S2', year: 2020, seasons: 12, episodes: 345, genre: 'action'}].join(' '));
     });
     it('Searching series by seasons', () => {
         expect(seriesCollection.searchBy('seasons', '1').join(' ')).to.be.equal([{title: 'S3', year: 1998, seasons: 1, episodes: 22, genre: 'romance'}].join(' '));
     });
     it('Searching series by number of episodes', () => {
        expect(seriesCollection.searchBy('episodes', '14').join(' ')).to.be.equal([].join(' '));
    });
     it('Searching series by genre', () => {
         expect(seriesCollection.searchBy('genre', 'drama').join(' ')).to.be.equal([{title: 'S1', year: 2000, seasons: 2, episodes: 15, genre: 'drama'}].join(' '));
     });
     it('Searching docs by title', () => {
        expect(docCollection.searchBy('title', 'D1').join(' ')).to.be.equal([{title: 'D1', year: 2000, duration: 120, genre: 'fiction'}].join(' '));
     });
     it('Searching docs by year', () => {
         expect(docCollection.searchBy('year', '2020').join(' ')).to.be.equal([{title: 'D2', year: 2020, duration: 140, genre: 'action'}].join(' '));
     });
     it('Searching docs by duration', () => {
         expect(docCollection.searchBy('duration', '140').join(' ')).to.be.equal([{title: 'D2', year: 2020, duration: 140, genre: 'action'}].join(' '));
     });
     it('Searching doc by genre', () => {
         expect(docCollection.searchBy('genre', 'terror').join(' ')).to.be.equal([{title: 'D3', year: 1998, duration: 45, genre: 'terror'}].join(' '));
     });
     it('Add a film to the collection', () => {
         filmsCollection.addItem(addFilm);
         expect(filmsCollection.getNumberOfItems()).to.be.equal(4);
    });
});