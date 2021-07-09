import { Sorter } from './Sorter';

export class CharactersCollections extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];

    let textToArray = this.data.split('');

    textToArray[leftIndex] = textToArray[rightIndex];
    textToArray[rightIndex] = leftHand;

    this.data = textToArray.join('');
  }
}
