export interface MyIterator<T> {
  next(): void;
  isDone(): boolean;
  currentItem: T | null;
}

export interface MyIterable<T> {
  createIterator(): MyIterator<T>;
}

export class NormalIterator<T> implements MyIterator<T> {
  public currentItem: T | null = null;
  private currentIndex = 0;

  constructor(private items: Array<T>) {
    this.currentItem = items[0];
  }

  public isDone() {
    return this.currentItem === null;
  }

  public next() {
    if (this.isDone()) {
      throw new Error(`Iterator out of bound.`);
    }

    this.currentIndex++;
    this.currentItem = this.items[this.currentIndex] ?? null;
  }
}

export class MyArray<T> implements MyIterable<T> {
  constructor(public items: Array<T>) {}

  createIterator() {
    return new NormalIterator<T>(this.items);
  }
}

let collection = new MyArray<number>([1, 2, 3, 4, 5]);
let iterator = collection.createIterator();

while (!iterator.isDone()) {
  console.log(`Iterated value: ${iterator.currentItem}`);
  iterator.next();
}

try {
  iterator.next();
} catch (err) {
  console.log(err);
}
