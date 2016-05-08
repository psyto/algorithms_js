#!/usr/bin/env node

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.peek = peek;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function peek() {
    return this.dataStore[0];
}

var s = new Queue();
s.enqueue(1);
s.enqueue(2);
s.enqueue(3);
console.log(s.peek());
console.log(s.dequeue());
s.enqueue(4);
console.log(s.dequeue());
console.log(s.dequeue());
console.log(s.dequeue());
s.enqueue(5);
console.log(s.peek());
 
