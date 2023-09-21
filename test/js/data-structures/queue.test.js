import Queue from "../../../src/js/data-structures/queue";

test("Deve incluir o elemento na fila", () => {
    const queue = new Queue();
    const element = 10;
    queue.enqueue(element);

    expect(queue.peek()).toBe(element);
});

test("Deve retirar o primeiro elemento da fila", () => {
    const queue = new Queue();
    queue.enqueue(15);
    queue.enqueue(19);
    queue.enqueue(23);

    expect(queue.dequeue()).toBe(15);
});

test("Deve retornar uma string com todos os elementos da fila", () => {
    const queue = new Queue();
    queue.enqueue(15);
    queue.enqueue(19);
    queue.enqueue(73);
    queue.enqueue(23);


    expect(queue.toString()).toBe("15,19,73,23");
});

test("Deve eliminar todos os elementos da fila", () => {
    const queue = new Queue();
    queue.enqueue(15);
    queue.enqueue(19);
    queue.enqueue(73);
    queue.enqueue(23);
    queue.clear();

    expect(queue.size()).toBe(0);
});

test("Deve retornar falso se a fila não estiver vazia", () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(13);

    expect(queue.isEmpty()).toBe(false);
});

