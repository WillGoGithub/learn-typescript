"use strict";
var GenericLinkedListNode = /** @class */ (function () {
    function GenericLinkedListNode(value) {
        this.value = value;
        this.next = null;
    }
    return GenericLinkedListNode;
}());
var GenericLinkedList = /** @class */ (function () {
    function GenericLinkedList() {
        this.head = null;
    }
    GenericLinkedList.prototype.length = function () {
        if (this.head === null)
            return 0;
        var count = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            currentNode = currentNode.next;
            count++;
        }
        return count;
    };
    GenericLinkedList.prototype.at = function (index) {
        var length = this.length();
        if (index >= length || index < 0) {
            throw new Error("Index out of range.");
        }
        var currentIndex = 0;
        var currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    };
    GenericLinkedList.prototype.insert = function (index, value) {
        var length = this.length();
        var newNode = new GenericLinkedListNode(value);
        if (index > length || index < 0) {
            throw new Error("Index out of range.");
        }
        else if (length === index) {
            if (index === 0) {
                this.head = newNode;
            }
            else {
                var node = this.at(index - 1);
                node.next = newNode;
            }
        }
        else {
            if (index === 0) {
                var originalHead = this.head;
                this.head = newNode;
                this.head.next = originalHead;
            }
            else {
                var prevNode = this.at(index - 1);
                var originalNode = prevNode.next;
                prevNode.next = newNode;
                newNode.next = originalNode;
            }
        }
    };
    GenericLinkedList.prototype.remove = function (index) {
        var length = this.length();
        if (index >= length || index < 0) {
            throw new Error("Index out of range.");
        }
        else if (length === 1) {
            this.head = null;
        }
        else {
            var prevNode = this.at(index - 1);
            var originalNode = prevNode.next;
            prevNode.next = originalNode.next;
        }
    };
    GenericLinkedList.prototype.getInfo = function () {
        var currentNode = this.head;
        var currentIndex = 0;
        while (currentNode !== null) {
            console.log("Index " + currentIndex + ": " + currentNode.value);
            currentNode = currentNode.next;
            currentIndex++;
        }
    };
    return GenericLinkedList;
}());
var l = new GenericLinkedList();
l.insert(0, 123);
l.insert(1, 456);
l.insert(2, 789);
l.insert(1, 12321);
l.getInfo();
