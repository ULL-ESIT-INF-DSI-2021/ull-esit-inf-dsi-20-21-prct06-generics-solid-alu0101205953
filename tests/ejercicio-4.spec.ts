import 'mocha';
import {expect} from 'chai';
// import{EffectibleCollection} from '../src/ejercicio-4/effectible_collection';
import{Complex} from '../src/ejercicio-4/complex';

let C1 = new Complex({real: 2, imag: 7});
let C2 = new Complex({real: 3, imag: -4});
let C3 = new Complex({real: 9, imag: 5});
let C4 = new Complex({real: 4, imag: 7});
let C5 = new Complex({real: 3, imag: 2});
let C6 = new Complex({real: 5, imag: 6});
let C7 = new Complex({real: -1, imag: 2});

describe('Exercise 4 tests', () => {
  it('(2 + 7i) + (3 – 4i) = 5 + 3 i', () => {
     expect(C1.add(C2.c)).to.be.equal([5, 3]);
  });
  it('(9 + 5i) – (4 + 7i) = 5 – 2i', () => {
      expect(C3.substract(C4.c)).to.be.equal([5, -2]);
   });
  it('(3 + 2i)(5 + 6i) = 3 + 28i ', () => {
      expect(C5.multiply(C6.c)).to.be.equal([3, 28]);
  });
  it('(3 + 2i)(-1 + 2i) = (0.2 - 1.6i)', () => {
      expect(C5.divide(C7.c)).to.be.equal([0.2, -1.6]);
  });
});