import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumberCollection([10,3,-5,0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharacterCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

 const linkedlist = new LinkedList();
 linkedlist.add(500)
 linkedlist.add(-10)
 linkedlist.add(-3)
 linkedlist.add(4)


linkedlist.print()