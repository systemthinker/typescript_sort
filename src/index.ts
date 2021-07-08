import { Sorter } from './Sorter';
import { NumbersCollection } from './NumberCollections';
import { CharactersCollections } from './CharactersCollections';

const arr = new NumbersCollection([5, 100, 1]);
const string = new CharactersCollections('suikerbiEtJeaa');

const collect = new Sorter(arr);
const sorterString = new Sorter(string);
collect.sort();
sorterString.sort();

console.log(arr.data);
console.log(string.data);
