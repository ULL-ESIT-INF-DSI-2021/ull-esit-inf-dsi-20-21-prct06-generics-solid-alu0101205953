import {Effectible} from "./effectible";
/**
 * The data type Complex. It has a real part and an imaginary part
 */
 export type complex = {
  real: number,
  imag: number
};

/**
 * Class that represents a complex number
 */
export class Complex implements Effectible<complex> {
  /**
   * Creates an instance of a complex
   * @param complex A complex number
   */
  constructor(public readonly c: complex) {
  }

  /**
   * Adds two complexes
   * @param C2 Second complex
   * @returns The addition of both numbers
   */
  add(C2: complex): complex {
    return {real: this.c.real + C2.real, imag: this.c.imag + C2.imag};
  }

    /**
   * Substracts two complexes
   * @param C2 Second complex
   * @returns The substraction of both numbers
   */
  substract(C2: complex): complex {
    return {real: this.c.real - C2.real, imag: this.c.imag - C2.imag};
  }

    /**
   * Multiplies two complexes
   * @param C2 Second complex
   * @returns The multiplication of both numbers
   */
  multiply(C2: complex): complex {
    return {real: ((this.c.real * C2.real) - (this.c.imag * C2.imag)), imag: ((this.c.real * C2.imag) + (this.c.imag * C2.real))};
  }

    /**
   * Divides two complexes
   * @param C2 Second complex
   * @returns The division of both numbers
   */
  divide(C2: complex): complex {
    return {real: (this.c.real * C2.real - this.c.imag * C2.imag) / ((Math.pow(C2.real, 2) + (Math.pow(C2.imag, 2)))), imag: (this.c.real * C2.imag + this.c.imag * C2.real) / ((Math.pow(C2.real, 2) + (Math.pow(C2.imag, 2))))};
  }
}