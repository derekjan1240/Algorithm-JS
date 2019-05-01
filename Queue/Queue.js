// FIFO
class Queue{
    constructor(){
        this.head = null;   
        this.size = 0;
    }

    dequeue(){
        let currentNode = this.head;
        let dequeueNode = null;
        if(!currentNode){
            console.log('Dequeue Fail!\nQueue is empty, can not dequeue!');
            return null;
        }else{
            dequeueNode = currentNode;
            currentNode.next? this.head = currentNode.next: this.head = null;
        }
        this.size--;
        console.log(`Dequeue '${dequeueNode.data}' Sussess!`);
        this.toArray(); //console queue array
        return dequeueNode;
    }
    
    enqueue(data){
        let enqueueNode = new Node(data);
        if(!this.head){
            this.head = enqueueNode;
        }else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = enqueueNode;
        }
        this.size++;
        console.log(`Enqueue '${enqueueNode.data}' Sussess!`);
        this.toArray(); //console queue array
        return enqueueNode;
    }

    peek(){
        let peekNode = this.head? this.head: null;
        if(peekNode){
            console.log(`Peek '${peekNode.data}' Sussess!`);
            return peekNode.data;
        }else{
            console.log('Peek Fail!\nQueue is empty, can not peek!');
            return null;
        }
    }
    
    isempty(){
        return this.head? false: true;
    }

    toArray(){
        let arr = [];
        let currentNode = this.head;
        while(currentNode){
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(`arr:[${arr}]`);
        return arr;
    }
}

class Node{
    constructor(data = null){
        this.next = null;
        this.data = data;
    }
}

const queue = new Queue();

// test
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.peek();
queue.dequeue();
queue.peek();
queue.dequeue();
queue.peek();
queue.dequeue();
queue.peek();

//click function
function cEnqueue(){
    const enqueueData = document.getElementById('EnqueueData'); 
    if(enqueueData.value){
        queue.enqueue(enqueueData.value);
        enqueueData.value = '';
        drawGraph();
    }
}

function cDequeue(){
    queue.dequeue();
    drawGraph();
}

function drawGraph(){
    const results = queue.toArray();
    const Graph = document.getElementById('Queue');
    
    // clear list
    Graph.innerHTML='';
    // draw list
    for (let j = results.length-1; j >=0; j--) {
        let node = document.createElement("td");
        let textnode = document.createTextNode(results[j]);
        node.appendChild(textnode);
        Graph.appendChild(node);
    }
}