
export default class Stack<T> {
    private items: any;
    private count: number;

    constructor() {
        this.items = {};
        this.count = 0;
    }

    push(element: T) {
        this.items[this.count] = element;
        this.count++;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }
        let objStr = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++) {
            objStr = `${objStr},${this.items[i]}`
        }
        
        return objStr;
    }

}