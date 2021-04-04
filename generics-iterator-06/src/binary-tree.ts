import { MyArray, MyIterable, MyIterator, NormalIterator } from './iterator';

class BinaryTree<T> implements MyIterable<T> {
  constructor(public root: TreeNode<T>) {}

  public preorderTraversal(callback: (el: TreeNode<T>) => void) {
    this.preorderRecursive(this.root, callback);
  }

  private preorderRecursive(
    node: TreeNode<T>,
    callback: (el: TreeNode<T>) => void
  ) {
    callback(node);
    node.leftNode && this.preorderRecursive(node.leftNode, callback);
    node.rightNode && this.preorderRecursive(node.rightNode, callback);
  }

  public createIterator(): MyIterator<T> {
    const elements: Array<T> = [];

    this.preorderTraversal((node) => {
      elements.push(node.value);
    });

    return new NormalIterator(elements);
  }
}

class TreeNode<T> {
  public leftNode: TreeNode<T> | null = null;
  public rightNode: TreeNode<T> | null = null;
  public parent: TreeNode<T> | null = null;

  constructor(public value: T) {}

  set left(value: T) {
    this.leftNode = new TreeNode(value);
    this.leftNode.parent = this;
  }

  set right(value: T) {
    this.rightNode = new TreeNode(value);
    this.rightNode.parent = this;
  }
}

type TN = TreeNode<number>;

const root = new TreeNode(1);
const bTree = new BinaryTree(root);

root.left = 2;
// Non-null assertion operator
root.leftNode!.left = 3;
root.leftNode!.right = 4;
root.leftNode!.rightNode!.left = 5;

root.right = 6;
root.rightNode!.left = 7;
root.rightNode!.leftNode!.left = 8;
root.rightNode!.leftNode!.right = 9;
root.rightNode!.leftNode!.rightNode!.left = 10;

function foreach<T>(iter: MyIterator<T>, callback: (v: T) => void) {
  while (!iter.isDone()) {
    callback(iter.currentItem as T);
    iter.next();
  }
}

// 一般使用手法
console.log(`Normal Usage:`);
const valueCumulation1: Array<number> = [];
bTree.preorderTraversal((n) => valueCumulation1.push(n.value));
console.log(valueCumulation1);

// 多型尋訪手法
console.log(`Polymorphic Iteration:`);
const valueCumulation2: Array<number> = [];
const bTreeIter = bTree.createIterator();

foreach(bTreeIter, (v) => valueCumulation2.push(v));
console.log(valueCumulation2);
