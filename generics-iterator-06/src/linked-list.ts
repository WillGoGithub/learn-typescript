import { MyArray, MyIterable, MyIterator, NormalIterator } from './iterator';

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
}

interface LinkedList<U> {
  head: LinkedListNode<U> | null;
  length(): number;
  at(index: number): LinkedListNode<U> | null;
  insert(index: number, value: U): void;
  remove(index: number): void;
}

type NullableLinkedListNode<T> = LinkedListNode<T> | null;

class GenericLinkedListNode<T> implements LinkedListNode<T> {
  public next: NullableLinkedListNode<T> = null;

  constructor(public value: T) {}
}

class GenericLinkedList<T> implements LinkedList<T> {
  public head: NullableLinkedListNode<T> = null;

  public length(): number {
    if (this.head === null) return 0;

    let count = 0;
    let currentNode: NullableLinkedListNode<T> = this.head;

    while (currentNode !== null) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }

  public at(index: number): NullableLinkedListNode<T> {
    const length = this.length();

    if (index >= length || index < 0) {
      throw new Error(`Index out of range.`);
    }

    let currentIndex = 0;
    let currentNode = this.head as LinkedListNode<T>;

    while (currentIndex !== index) {
      currentNode = currentNode.next as LinkedListNode<T>;
      currentIndex++;
    }

    return currentNode;
  }

  insert(index: number, value: T): void {
    const length = this.length();
    const newNode = new GenericLinkedListNode(value);

    if (index > length || index < 0) {
      throw new Error(`Index out of range.`);
    } else if (length === index) {
      if (index === 0) {
        this.head = newNode;
      } else {
        const node = this.at(index - 1) as LinkedListNode<T>;
        node.next = newNode;
      }
    } else {
      if (index === 0) {
        const originalHead = this.head;
        this.head = newNode;
        this.head.next = originalHead;
      } else {
        const prevNode = this.at(index - 1) as LinkedListNode<T>;
        const originalNode = prevNode.next as LinkedListNode<T>;
        prevNode.next = newNode;
        newNode.next = originalNode;
      }
    }
  }

  public remove(index: number): void {
    const length = this.length();

    if (index >= length || index < 0) {
      throw new Error(`Index out of range.`);
    } else if (length === 1) {
      this.head = null;
    } else {
      const prevNode = this.at(index - 1) as LinkedListNode<T>;
      const originalNode = prevNode.next as LinkedListNode<T>;
      prevNode.next = originalNode.next;
    }
  }

  public getInfo() {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      console.log(`Index ${currentIndex}: ${currentNode.value}`);
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
}

const l = new GenericLinkedList<number>();

l.insert(0, 123);
l.insert(1, 456);
l.insert(2, 789);
l.insert(1, 12321);
l.getInfo();

l.remove(1);
l.getInfo();

// unknown
const a = new GenericLinkedList();

class IterableLinkedList<T>
  extends GenericLinkedList<T>
  implements MyIterable<T> {
  public createIterator(): MyIterator<T> {
    const elements: Array<T> = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      elements.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return new NormalIterator(elements);
  }
}

function foreach<T>(iter: MyIterator<T>, callback: (v: T) => void) {
  while (!iter.isDone()) {
    callback(iter.currentItem as T);
    iter.next();
  }
}

let collection1 = new MyArray<number>([1, 2, 3]);
let collection2 = new IterableLinkedList<number>();

collection2.insert(0, 1);
collection2.insert(1, 2);
collection2.insert(2, 3);

let iter1 = collection1.createIterator();
let iter2 = collection2.createIterator();

foreach(iter1, (v) => console.log(`v from collection1: ${v}`));
foreach(iter2, (v) => console.log(`v from collection2: ${v}`));
