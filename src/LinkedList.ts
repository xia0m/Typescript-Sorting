class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let tail = this.head;
    let counter = 1;
    while (tail.next) {
      counter++;
      tail = tail.next;
    }
    return counter;
  }
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bound');
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex:number,rightIndex:number):void{
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex):

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
  print():void{
    if (!this.head) {
      throw new Error('List is empty');
    }
    let node = this.head;
    while(node){
      console.log(node.data);
      node = node.next
    }
  }
}