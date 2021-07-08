"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
var CharactersCollections = /** @class */ (function () {
    function CharactersCollections(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollections.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollections.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharactersCollections.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        var textToArray = this.data.split('');
        textToArray[leftIndex] = textToArray[rightIndex];
        textToArray[rightIndex] = leftHand;
        this.data = textToArray.join('');
    };
    return CharactersCollections;
}());
exports.CharactersCollections = CharactersCollections;
