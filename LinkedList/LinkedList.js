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
        let position = [];
        this.toArray().map((e, index)=>{
            if(e==data){
                position.push(index+1);
            }
        });

        this.hintMsg(`${data} at ${position}th`);
        return position;
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

    deleteNode(data, position= null){
        if(this.head == null){
            return null;
        }
        if(position){
            // Delete specific position node
            if(position ==1){
                this.deleteHead();
            }else if(position == this.size){
                this.deleteTail();
            }else{
                let currentNode = this.head;
                for(let i=2; i<position; i++){
                    currentNode = currentNode.next;
                }
                deta = currentNode.next.deta; //data delete
                currentNode.next = currentNode.next.next;
            }
        }else{
            // Delete first node with the data
            if(data == this.head.data){
                this.deleteHead();
            }else{
                let currentNode = this.head;
                while(currentNode.next.data != data){
                    console.log('currentNode:', currentNode)
                    currentNode = currentNode.next;
                    if(currentNode.next == null){
                        return `Can't not find the ${data}`
                    }
                }
                currentNode.next = currentNode.next.next;
            }
            this.size--;
        }
        this.hintMsg(`Delete Node: ${data}`)
    }

    deleteNodes(data){
        if(this.head == null){
            return null;
        }
        let arr =[];
        this.toArray().map((e)=>{
            if(e != data){
                arr.push(e);
            }
        });

        this.fromArray(arr);
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
        this.clear();
        arr.forEach((e)=>{
            this.insertAtTail(e) 
        });
    }

    reverse(){
        let arr = this.toArray();
        this.clear();
        console.log('\nStart reverse:');
        arr.forEach((e)=>{
            this.insertAtBeginning(e);
        });
        this.hintMsg('Reverse List');
    }

    //clear lsit
    clear(){
        this.head = null;
        this.size = 0;
        this.hintMsg('List clear!');
    }

    // Test Msg
    hintMsg(msg){
        console.log(`\n${msg}`);
        console.log('List:', list.toArray());
    }
};

// create init list
let list = new LinkedList();

// test
let testArr= ['A', 'B', 'C', 'D', 'E'];
list.fromArray(testArr);
list.insertAtBeginning('A');
list.insertAtBeginning('N');
list.insertAtBeginning('A');
list.insertAtBeginning('N');
list.insertAtBeginning('A');
list.insertAtBeginning('B');
list.search('A');
list.clear()

/* click function*/
function cInsertAtBeginning(){
    let insertNode = document.getElementById('insertNode');

    if(insertNode.value){
        list.insertAtBeginning(insertNode.value);
        drawGraph();
        insertNode.value ='';
    }else{
        console.log('Node doesn,t set!')
    }
}

function cInsertAtTail(){
    let insertNode = document.getElementById('insertNode');

    if(insertNode.value){
        list.insertAtTail(insertNode.value);
        drawGraph();
        insertNode.value='';
    }else{
        console.log('Node doesn,t set!')
    }    
}

function cInsertAt(){
    let insertNode = document.getElementById('insertNode');
    let insertPosition = document.getElementById('insertPosition');

    if(insertNode.value){
        if(insertPosition.value){
            list.insertAt(insertNode.value, insertPosition.value);
            drawGraph();
            insertNode.value ='';
            insertPosition.value='';
        }else{
            list.insertAt(insertNode.value);
            drawGraph();
            insertNode.value='';
        }
    }else{
        console.log('Node doesn,t set!')
    }
}

function cDeleteBeginning(){
    list.deleteHead();
    drawGraph();
}

function cDeleteTail(){
    list.deleteTail();
    drawGraph();
}

function cDeleteNode(){
    let deleteNode = document.getElementById('deleteNode');
    let deletePosition = document.getElementById('deletePosition');

    if(deleteNode.value){
        list.deleteNode(deleteNode.value);
        drawGraph();
        deleteNode.value='';
    }else{
        if(deletePosition.value){
            list.deleteNode(deleteNode.value, deletePosition.value);
            drawGraph();
            deleteNode.value='';
            deletePosition.value='';
        }else{
            console.log('Node or Position doesn,t set');
        }
        
    }  
}

function cDeleteNodes(){
    let deleteNode = document.getElementById('deleteNode');

    if(deleteNode.value){
            list.deleteNodes(deleteNode.value);
            drawGraph();
            deleteNode.value=''; 
    }else{
        console.log('Node doesn,t set');
    }  
}

function cDeleteAll(){
    list.clear();
    drawGraph();
}

function cSearchNode(){
    let searchNode = document.getElementById('searchNode');
    if(searchNode.value){
        let position = list.search(searchNode.value);
        alert(`${searchNode.value} at ${position} position of list !`);
        searchNode.value='';
    }else{
        console.log('Node doesn,t set');
    }
}




function drawGraph(){
    const results = list.toArray();
    const Graph = document.getElementById('list');
    
    // clear list
    Graph.innerHTML='';
    // draw list
    for (let j = 0; j < results.length; j++) {
        let node = document.createElement("td");
        let textnode = document.createTextNode(results[j]);
        node.appendChild(textnode);
        Graph.appendChild(node);
    }
}



