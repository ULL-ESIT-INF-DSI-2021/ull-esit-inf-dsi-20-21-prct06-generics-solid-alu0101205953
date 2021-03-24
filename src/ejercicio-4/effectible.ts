/**
 * Allows to create a collection of streamable items
 * @function add Adds two items
 * @function substract Substracts two items
 * @function multiply Multiplies two items
 * @function divide Divides two items
 */
 export interface Effectible<T> {
  add(item1: T): T;
  substract(item1: T): T;
  multiply(item1: T): T;
  divide(item1: T): T;
}