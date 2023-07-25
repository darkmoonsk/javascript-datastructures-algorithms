import StackArray from "../../../src/ts/data-structures/stackArray";

test("StackArray: deve adicionar os valores 5 e 8 a pilha", () => {
    const stack = new StackArray();
    stack.push(5);
    stack.push(8);
    expect(stack.toString()).toBe("5,8");
})

test("Deve remover o ultimo valor da pilha", () => {
    const stack = new StackArray();
    stack.push(15);
    stack.push(18);
    stack.pop();
    expect(stack.peek()).toBe(15);
})

test("Deve retornar o ultimo valor da pilha // 8", () => {
    const stack = new StackArray();
    stack.push(5);
    stack.push(8);
    expect(stack.peek()).toBe(8);
})

test("Deve retorna false para uma pilha com itens", () => {
    const stack = new StackArray();
    stack.push(2);
    stack.push(9);
    expect(stack.isEmpty()).toBe(false);
})

test("Deve retornar true para uma pilha vazia", () => {
    const stack = new StackArray();
    expect(stack.isEmpty()).toBe(true);
})

test("Deve retornar o tamanho da pilha // 4", () => {
    const stack = new StackArray();
    stack.push(5);
    stack.push(8);
    stack.push(15);
    stack.push(18);
    expect(stack.size()).toBe(4);
})

test("Deve esvaziar a pilha", () => {
    const stack = new StackArray();
    stack.push(12);
    stack.push(24);
    stack.push(36);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
})

test("Deve retornar a pilha em formato de string", () => {
    const stack = new StackArray();
    stack.push(5);
    stack.push(8);
    stack.push(15);
    stack.push(18);
    expect(stack.toString()).toBe("5,8,15,18");
})