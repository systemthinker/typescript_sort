import { Sorter } from './Sorter';
import { NumbersCollection } from './NumberCollections';

const arr = new NumbersCollection([2, 1, 4]);

const collect = new Sorter(arr);
collect.sort();

console.log(arr.data);
