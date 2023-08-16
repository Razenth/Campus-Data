class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class stack{
    constructor(){
        this.top=null;
        this.size=0;
    }

    isEmpty(){
        return this.size ===0;
    }

    getSize(){
        return this.size
    }

    push(value){
        const newNode = new node(value)
        newNode.next = this.top;
        this.top=newNode;
        this.size++;
    }

    pop(){
        if(!this.top){
            return "Is Empty"
        }
        const poppedValue = this.top.value;
        this.top=this.top.next;
        this.size--;
        return poppedValue;
    }

    peek(){
        if(!this.top){
            return "Is Empty"
        }
        return this.top.value
    }

}



// Pila a nivel de array:

// class Stack{
//     constructor(){
//         this.items=[]
//         this.top = null
//     }

//     isEmpty(){//Verificar si esta vacio
//         return this.items.length == 0;
//     }

//     size(){//Retornar tamaño
//         return this.items.length;
//     }

//     clear(){
//         this.items = []
//     }

//     push(item){//Ingresar un dato
//         this.items.push(item);
//         const node = new Node (item,this.top)
//         this.top = node
//     }

//     pop(){//Sacar un dato
//         if(this.isEmpty()){
//             return "La pila esta vacia";
//         }
//         return this.items.pop();
//     }
//     peek(){//Revisar el primer dato encontrado
//         if(this.isEmpty()){
//             return "La pila esta vacia"
//         }
//         return this.items[this.items.length - 1];
//     }
// }

// class Node{
//     constructor(element,prev){
//         this.element = element
//         this.prev = prev
//     }
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek())
// stack.pop()
// console.log(stack.peek())
// stack.pop()
// console.log(stack.peek())
// stack.clear()
// console.log(stack.peek())



// Pila a nivel de nodo : 

// class Stack{
//     constructor(){
//         this.items=[]
//     }

//     isEmpty(){//Verificar si esta vacio
//         return this.items.length == 0;
//     }

//     size(){//Retornar tamaño
//         return this.items.length;
//     }

//     clear(){
//         this.items = []
//     }

//     push(item){//Ingresar un dato
//         this.items.push(item);
//     }

//     pop(){//Sacar un dato
//         if(this.isEmpty()){
//             return "La pila esta vacia";
//         }
//         return this.items.pop();
//     }
//     peek(){//Revisar el primer dato encontrado
//         if(this.isEmpty()){
//             return "La pila esta vacia"
//         }
//         return this.items[this.items.length - 1];

//     }

// }

// const stack = new Stack();

// stacks.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek())
// stack.pop()
// console.log(stack.peek())
// stack.pop()
// console.log(stack.peek())
// stack.clear()
// console.log(stack.peek())