class Node{
    constructor(data, next =null){
        this.data = data,
        this.next = next
    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // Insert method
    insertAtBeginning(data){
        // set newNode data and next
        let newNode = new Node(data);
        newNode.next = this.head;

        // set new list head
        this.head = newNode;
        this.size++;

        this.hintMsg(`Insert ${data} at beginning`);
    }

    insertAtTail(data){
        // set newNode data
        let newNode = new Node(data);

        if(this.head == null){
            // empty list
            this.head = newNode;
        }else{
            // find the list tail
            let tailNode = this.head;
            while(tailNode.next){
                tailNode = tailNode.next;
            }
            // set the new tail Node
            tailNode.next = newNode;
        }
        this.size++;

        this.hintMsg(`Insert ${data} at tail`);
    }

    insertAt(data, num =null){
        // generate the random insert position
        if(num ==null){
            num = Math.floor(Math.random()*this.size+2);
        }
        if(num <= 1){
            // position at beginning
            this.insertAtBeginning(data);
        }else if(num > this.size){
            // position at tail
            this.insertAtTail(data);
        }else{
            // position at middle
            let newNode = new Node(data);
            let count = 2;
            let numNode = this.head;
            while(count<num){
                numNode = numNode.next;
                count++;
            }
            newNode.next = numNode.next;
            numNode.next = newNode;
            this.size++;

            this.hintMsg(`Insert ${data} at ${num}`);
        }
    }

    search(data){
        let position = this.toArray().indexOf(data)+1;

        this.hintMsg(`${data} is at ${position}th`);
    }

    // delete method
    deleteHead(){
        if(this.head == null){
            console.log('List is empty!');
            return null;
        }
        
        this.head = this.head.next;
        this.size--; 
        
        
        this.hintMsg(`Delete List Head`);
    }

    deleteTail(){
        if(this.head == null){
            this.hintMsg(`Delete List Tail Node Fail! \nList is empty!`);
            return null;
        }else if(this.size == 1){
            this.head = null;
        }else{
            let currentNode = this.head;
            while(currentNode.next.next){
                currentNode = currentNode.next;
            }
            currentNode.next = null;
        }
        this.size--;

        this.hintMsg(`Delete List Tail Node`)
    }

    deleteNode(data){
        if(this.head == null){
            return null;
        }
        if(data == this.head.data){
            this.deleteHead;
        }
        let currentNode = this.head;
        while(currentNode.next.data != data){
            currentNode = currentNode.next;
            if(currentNode.next == null){
                return `Can't not find the ${data}`
            }
        }
        currentNode.next = currentNode.next.next;
        this.size--;

        this.hintMsg(`Delete Node: ${data}`)
    }

    // Array method
    toArray(){
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
          nodes.push(currentNode.data);
          currentNode = currentNode.next;
        }
        return nodes;
    }

    fromArray(arr){
        arr.forEach((e)=>{
            this.insertAtTail(e) 
        });
    }

    reverse(){
        let arr = this.toArray();
        this.head = null;
        this.size = 0;
        console.log('\nStart reverse:')
        arr.forEach((e)=>{
            this.insertAtBeginning(e) 
        });
        this.hintMsg('Reverse List')
    }

    // Test Msg
    hintMsg(msg){
        console.log(`\n${msg}`);
        console.log('List:', list.toArray());
    }
};



// create list
let list = new LinkedList();

//test
list.insertAtBeginning('B');
console.log(list.size);
list.deleteHead();
console.log(list.size);
list.deleteTail();
console.log(list.size);
list.insertAtBeginning('A');
console.log(list.size);
list.insertAtTail('C');
console.log(list.size);
list.insertAt('X');
console.log(list.size);
list.insertAt('D');
console.log(list.size);
list.insertAt('E');
console.log(list.size);
list.deleteTail();
console.log(list.size);
list.deleteNode('X');
console.log(list.size);
list.reverse();
console.log(list.size);


