import { Sorter } from './Sorter';
import { NumbersCollection } from './NumberCollections';
import { CharactersCollections } from './CharactersCollections';
import { LinkedList } from './LinkedList';

const arr = new NumbersCollection([5, 100, 1]);
const string = new CharactersCollections('suikerbiEtJeaa');

string.sort();
console.log(string.data);

arr.sort();
console.log(arr.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
