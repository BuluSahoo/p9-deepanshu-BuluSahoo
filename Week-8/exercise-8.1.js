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
  
    reverse() {
      let current = this.head; // 10/20,
      let prev = null;
  
      while (current) { 
        let next = current.next; 
        current.next = prev;  
        prev = current; 
        current = next; 
      }
  
      this.head = prev;
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // example usage
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(4);

  
  console.log('Original list:');
  list.print();
  
  list.reverse();
  
  console.log('Reversed list:');
  list.print();
  