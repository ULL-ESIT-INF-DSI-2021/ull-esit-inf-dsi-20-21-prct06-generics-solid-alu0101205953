import {Effectible} from "./effectible";

/**
 * Class that represents a collection of effectible items
 */
export class EffectibleCollection<T extends Effectible<T>> {
  /**
   * Creates a new instance of an effectible collection
   * @param elements Array of elements
   */
  constructor(protected elements: T[]) {
  }


  /**
   * Adds a new item to the collection
   * @param newItem The item we want to add
   */
  addEffectible(newItem: T) {
    this.elements.push(newItem);
  }

  /**
   * Obtains the collection of effectible items
   */
  getEffectible(): T[] {
    return this.elements;
  }

  /**
   * Obtains the length of the collection
   * @returns Length of the collection
   */
  getNumberOfEffectibles() {
    return this.elements.length;
  }
}