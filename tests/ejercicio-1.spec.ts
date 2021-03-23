import 'mocha';
import {expect} from 'chai';
import {Combat} from '../src/ejercicio-1/combat';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {DragonBall} from '../src/ejercicio-1/dragonball';
import {StarWars} from '../src/ejercicio-1/starwars';
import {Marvel} from '../src/ejercicio-1/marvel';
import {DC} from '../src/ejercicio-1/dc';
import {Encyclopedia} from '../src/ejercicio-1/encyclopedia';

let Pikachu = new Pokemon('Pikachu', 6, 0.4, 'eléctrico', {total: 320, HP: 350, attack: 55, defense: 40, spatk: 50, spdef: 50, speed: 90}, "Pika pika!", ["Dragon Ball"], ["DC", "Star Wars"]);
let Saiyan = new DragonBall('Goku', 62, 175, {total: 390, HP: 370, attack: 58, defense: 60, spatk: 50, spdef: 50, speed: 90}, "Kaio-Ken!", ["DC"], ["Marvel", "Pokemon"]);
let Chewbacca = new StarWars('Chewbacca', 150, 200, {total: 340, HP: 350, attack: 54, defense: 45, spatk: 50, spdef: 50, speed: 90}, "Grrrr...", ["Dragon Ball"], ["Marvel", "Pokemon"]);
let IronMan = new Marvel('Iron Man', 72, 172, {total: 350, HP: 320, attack: 57, defense: 47, spatk: 50, spdef: 50, speed: 90}, "Yo soy Iron Man!", ["DC"], ["Pokemon", "Star Wars"]);
let Batman = new DC('Batman', 84, 194, {total: 365, HP: 345, attack: 53, defense: 41, spatk: 50, spdef: 50, speed: 90}, "Soy Batman!", ["Star Wars"], ["Dragon Ball", "Pokemon"]);
let Saiyan2 = new DragonBall('Vegeta', 65, 170, {total: 390, HP: 320, attack: 58, defense: 60, spatk: 50, spdef: 50, speed: 90}, "Kakaroto...", ["DC"], ["Marvel", "Pokemon"]);

let Combat1 = new Combat(Pikachu, Saiyan);
let Combat2 = new Combat(Chewbacca, IronMan);
let Combat3 = new Combat(Batman, IronMan);
let Combat4 = new Combat(Saiyan, Chewbacca);
let Combat5 = new Combat(Saiyan, Saiyan2);
let encyclopedia = new Encyclopedia([Pikachu, Saiyan, Chewbacca, IronMan, Batman]);

describe('Exercise 1 tests', () => {
    it('Combat between Pikachu and Goku --> Pikachu wins!', () => {
       expect(Combat1.start()).to.be.equal('Pikachu wins!');
    });
    it('Combat between Chewbacca and Iron Man --> Chewbacca wins!', () => {
        expect(Combat2.start()).to.be.equal('Chewbacca wins!');
     });
    it('Combat between Batman and Iron Man --> Iron Man wins!', () => {
        expect(Combat3.start()).to.be.equal('Iron Man wins!');
     });
    it('Combat between Goku and Chewbacca --> Chewbacca wins!', () => {
        expect(Combat4.start()).to.be.equal('Chewbacca wins!');
     });
    it('Combat between two Saiyans --> Goku wins!', () => {
        expect(Combat5.start()).to.be.equal('Goku wins!');
     });
     it('Creating encyclopedia', () => {
        expect(encyclopedia.print()).to.be.equal('Pikachu, Goku, Chewbacca, Iron Man, Batman');
     });
     it('Pikachu type = electric', () => {
        expect(Pikachu.getType()).to.be.equal('eléctrico');
     });
     it('Pikachu weight = 6', () => {
        expect(Pikachu.getWeight()).to.be.equal(6);
     });
     it('Pikachu height = 0.4', () => {
        expect(Pikachu.getHeight()).to.be.equal(0.4);
     });
});