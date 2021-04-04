"use strict";
var NormalIterator = /** @class */ (function () {
    function NormalIterator(items) {
        this.items = items;
        this.currentItem = null;
        this.currentIndex = 0;
        this.currentItem = items[0];
    }
    NormalIterator.prototype.isDone = function () {
        return this.currentItem === null;
    };
    NormalIterator.prototype.next = function () {
        var _a;
        if (this.isDone()) {
            throw new Error("Iterator out of bound.");
        }
        this.currentIndex++;
        this.currentItem = (_a = this.items[this.currentIndex]) !== null && _a !== void 0 ? _a : null;
    };
    return NormalIterator;
}());
var MyArray = /** @class */ (function () {
    function MyArray(items) {
        this.items = items;
    }
    MyArray.prototype.createIterator = function () {
        return new NormalIterator(this.items);
    };
    return MyArray;
}());
var collection = new MyArray([1, 2, 3, 4, 5]);
var iterator = collection.createIterator();
while (!iterator.isDone()) {
    console.log("Iterated value: " + iterator.currentItem);
    iterator.next();
}
try {
    iterator.next();
}
catch (err) {
    console.log(err);
}
