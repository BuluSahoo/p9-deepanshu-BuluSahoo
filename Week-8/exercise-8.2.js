class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null
      this.size = 0
    }
  
    add(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode
      } else {
        this.tail.next = newNode
        this.tail = newNode
      }
      this.size ++
    }
  
    leftShift(k) {
      if (k > 0 && k < this.size) {
        let current = this.head;
        let prev = null;
        for (let i = 0; i < k; i++) {
          prev = current;
          current = current.next;
        }
        prev.next = null;
        let tail = current;
        while (tail.next) {
          tail = tail.next;
        }
        tail.next = this.head;
        this.head = current;
      }
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);
  list.leftShift(2);
  list.print(); 
  