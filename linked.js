class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}


class List{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = this.head
        // console.log("<<<<< LinkedList Initialized >>>>>")
    }

    append(data) {
        let newNode = new Node(data)
        if(this.head == null){                                                          // list is empty
            this.head = newNode;
            // console.log("Added data to the head")
        }
        else{
            this.tail.next = newNode;                                                   // append node to the end of list    
            // console.log("Added data to the tail")
        }
        this.length +=1
        this.tail = newNode
        return this.traverse();
    }

    prepend(data) {
        let newNode = new Node(data)
        if(this.head == null){                                                          // list is empty
            this.head = newNode;
            this.tail = newNode
            // console.log("Added data to the head")
        }
        else{
            newNode.next = this.head;
            this.head = newNode;                                                        // append node to the start of list    
            // console.log("Added data to the front")
        }
        this.length +=1
        return this.traverse();
    }

    traverse(){
        let curNode = this.head;
        while(curNode){
            // console.log('%clinked.js line:51 nodesInList', 'color: #007acc;', nodesInList);
            nodesInList.push(curNode.data)
            // console.log('%clinked.js line:35 curNode.data', 'color: #007acc;', curNode.data);
            curNode = curNode.next;
            if (curNode == null){break}
        }
        console.log('%clinked.js line:51 nodesInList', 'color: #007acc;', nodesInList);
        return nodesInList;
    }

    delete(data){
        if (this.length == 0){                                                              // list is empty
            // console.log("LinkedList is empty!")
        }

        else if(this.head.data == data){                                                    // delete the head node
            let temp_ = this.head
            this.head = temp_.next
            // temp_ = undefined;
            // console.log(`Head Deleted | New Head --> ${this.head.data}`)
        }

        else{                                                                               // data was not at head node
            let curNode = this.head;
            let prevNode = null;
            while (curNode.data != data){
                prevNode = curNode;
                curNode = curNode.next;
                if(curNode == null){
                    console.log(`Node Not Found!`)
                    return this.traverse();
                }
            };

            prevNode.next = curNode.next;
            // curNode = undefined;
            this.tail = prevNode;
            // console.log(`Node Deleted --> ${data}`)
        }
        this.length -=1;
        return this.traverse();
    }
}


// mylist = new List()
// mylist.append("A")
// mylist.append("B")
// mylist.append("C")
// mylist.append("D")
// mylist.delete("D")
// mylist.append("E")
// mylist.delete("E")
// mylist.delete("A")
// mylist.traverse()


// console.log('%clinked.js line:19 head', 'color: #007acc;', mylist.head.data);
// console.log('%clinked.js line:19 tail', 'color: #007acc;', mylist.tail.data);
// console.log('%clinked.js line:19 length', 'color: #007acc;', mylist.length);
let id = null;
let data = null;
let myList = null;
let nodes = null;
let nodesInList = [];


function displayList(nodes){
    $(document).find(".node").remove();
    console.log('%clinked.js line:119 nodes that will be displayed -------', 'color: #007acc;', nodes);
    nodes.forEach(node => {
        let node_ = `<div class="border rounded border-info shadow text-muted fw-bolder node mx-2">${node}</div>` 
        $('.preview').append(node_);
    });
    nodes = [];
}


function initializeLinkedList(){
    mylist = new List();
}
function appendLinkedList(data){
    nodes = mylist.append(data);
    displayList(nodes);
    nodesInList = [];
}
function prependLinkedList(data){
    nodes = mylist.prepend(data);
    displayList(nodes);
    nodesInList = [];
}
function deleteElementLinkedList(data){
    nodes = mylist.delete(data)
    displayList(nodes);
    nodesInList = [];
}
function deleteIndexLinkedList(data){
    nodes = mylist.append(data);
    displayList(nodes);
    nodesInList = [];
}
function insertAfterLinkedList(){
    mylist = new List();
    displayList(nodes);
    nodesInList = [];
}
function insertAtLinkedList(data){
    mylist.append(data);
}


// jquery
$(document).ready(()=>{
    initializeLinkedList();                                                     // initialize LinkedList

    // display the input for data
    $('.control-btn').on('click',(e)=>{
        id = e.target.id;
        if ( !$('.data-input-container').hasClass("d-flex")){
            $('.data-input-container').removeClass("d-none");
            $('.data-input-container').addClass("d-flex");
            $('.data-input-container').toggle("medium");
        }
    })

    // call functions to perform tasks on the LL
    $('#go').on('click',(e)=>{
        data = $('.data-input').val().trim().toUpperCase();

        switch (id) {
            case "ap":
                appendLinkedList(data);
                break;
            case "pp":
                prependLinkedList(data);
                break;
            case "dv":
                deleteElementLinkedList(data);
                break;
            case "di":
                deleteIndexLinkedList(data);
                break;
            case "in":
                insertAfterLinkedList(data);
                break;
            case "ii":
                insertAtLinkedList(data);
                break;
            default:
                break;
        }

        $('.data-input-container').removeClass("d-flex");
        $('.data-input-container').addClass("d-none");
    })
})