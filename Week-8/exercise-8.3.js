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
    makeLoop(){
        this.tail.next = this.head
    }
    hasLoop() {
        let startValue = this.head
        let curr = startValue.next
        while(curr){
            if (startValue===curr){
                return true
            }
            curr = curr.next
        }
        return false
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
  list.print()
  
  // to make link list into loop
  list.makeLoop()

  console.log(list.hasLoop()) // checking if link list is loop or not