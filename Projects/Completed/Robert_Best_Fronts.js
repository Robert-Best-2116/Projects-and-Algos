//Node
class Node {
    constructor(data) {
        this.value = data;
        this.next=null;
    }
 }

// Add Front 
class SLL {
     constructor() {
        this.head = null;
     }
     //Add Front
     addToFront(data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        return this.head;
     }
     //Remove Front
     removeFront() {
    	var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head
     }
     //Show Front
     showFront() {
        return this.head.value;

     }

     //Display SLL Values
     displayValues() {
      var values = ""
      values += this.head.value;

      var runner = this.head.next;
      while (runner != null) {
         values += "," + runner.next
      }
      return values;
     }
     
}

var newSLL = new SLL();
newSLL.addToFront(20)
newSLL.removeFront()
newSLL.showFront()
newSLL.addToFront(20)
console.log(newSLL)
newSLL.addToFront(25)
newSLL.addToFront(21)
newSLL.addToFront(28)
newSLL.displayValues()
console.log(newSLL)



