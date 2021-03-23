import 'mocha';
import {expect} from 'chai';
import {Length} from '../src/ejercicio-2/length';
import {Mass} from '../src/ejercicio-2/mass';
import {Speed} from '../src/ejercicio-2/speed';
import {Strength} from '../src/ejercicio-2/strength';
import {Temperature} from '../src/ejercicio-2/temperature';
import {Time} from '../src/ejercicio-2/time';
import {Volume} from '../src/ejercicio-2/volume';

let l1 = new Length();
let m1 = new Mass();
let sp1 = new Speed();
let st1 = new Strength();
let temp1 = new Temperature();
let time1 = new Time();
let v1 = new Volume();


describe('Exercise 2 tests', () => {
    it(' 30 miles to meters', () => {
       expect(l1.convert(['miles', 30], 'meters').join(' = ')).to.be.equal(['meters', 48280.3].join(' = '));
    });
    it(' 30 kilograms to grams', () => {
        expect(m1.convert(['kilograms', 30], 'grams').join(' = ')).to.be.equal(['grams', 30000].join(' = '));
     });
     it(' 30 km/h to m/s', () => {
        expect(sp1.convert(['kilometers per hour', 30], 'meters per second').join(' = ')).to.be.equal(['meters per second', 8.3].join(' = '));
     });
     it(' 30 kiloponds to newtons', () => {
        expect(st1.convert(['kiloponds', 30], 'newtons').join(' = ')).to.be.equal(['newtons', 294.3].join(' = '));
     });
     it(' 30 celsius to fahrenheit', () => {
        expect(temp1.convert(['celsius', 30], 'fahrenheit').join(' = ')).to.be.equal(['fahrenheit', 86].join(' = '));
     });
     it(' 30 minutes to hours', () => {
        expect(time1.convert(['minutes', 30], 'hours').join(' = ')).to.be.equal(['hours', 0.5].join(' = '));
     });
     it(' 300 litres to m3', () => {
        expect(v1.convert(['litres', 300], 'm3').join(' = ')).to.be.equal(['m3', 0.3].join(' = '));
     });
     it(' 30 minutes to days', () => {
        expect(time1.convert(['minutes', 30], 'days').join(' = ')).to.be.equal(['Unit not found', 0].join(' = '));
     });
});