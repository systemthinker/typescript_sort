"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollections_1 = require("./NumberCollections");
var CharactersCollections_1 = require("./CharactersCollections");
var LinkedList_1 = require("./LinkedList");
var arr = new NumberCollections_1.NumbersCollection([5, 100, 1]);
var string = new CharactersCollections_1.CharactersCollections('suikerbiEtJeaa');
string.sort();
console.log(string.data);
arr.sort();
console.log(arr.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
