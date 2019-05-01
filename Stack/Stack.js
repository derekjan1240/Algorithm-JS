// LIFO
class Stack{
    constructor(){
        this.head = null;   
        this.size = 0;
    }

    pop(){
        let currentNode = this.head;
        let popNode = null;
        if(!currentNode){
            console.log('Pop Fail!\nStack is empty, can not Pop!');
            return null;
        }else if(!currentNode.next){
            popNode = currentNode;
            this.head = null;
        }else{
            while(currentNode.next.next){
                currentNode = currentNode.next;
            }
            popNode = currentNode.next;
            currentNode.next = null;
        }
        this.size--;
        console.log(`Pop '${popNode.data}' Sussess!`);
        this.toArray(); //console stack array
        return popNode;
    }
    
    push(data){
        let pushNode = new Node(data);
        if(!this.head){
            this.head = pushNode;
        }else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = pushNode;
        }
        this.size++;
        console.log(`Push '${pushNode.data}' Sussess!`);
        this.toArray(); //console queue array
        return pushNode;
    }

    peek(){
        let peekNode = this.head? this.head: null;
        if(peekNode){
            console.log(`Peek '${peekNode.data}' Sussess!`);
            return peekNode.data;
        }else{
            console.log('Peek Fail!\nStack is empty, can not peek!');
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

const stack = new Stack();

stack.push('A');
stack.push('B');
stack.push('C');
stack.peek();
stack.pop();
stack.peek();
stack.pop();
stack.peek();
stack.pop();
stack.peek();

//click function
function cPush(){
    const pushData = document.getElementById('PushData'); 
    if(pushData.value){
        stack.push(pushData.value);
        pushData.value = '';
        drawGraph();
    }
}

function cPop(){
    stack.pop();
    drawGraph();
}

function drawGraph(){
    const results = stack.toArray();
    const Graph = document.getElementById('Stack');
    
    // clear list
    Graph.innerHTML='';
    // draw list
    for (let j = results.length-1; j >=0; j--) {
        let node = document.createElement("tr");
        let textnode = document.createTextNode(results[j]);
        node.appendChild(textnode);
        Graph.appendChild(node);
    }
}

