import Deque from "../../../src/js/data-structures/deque";

test("Deve inserir o elemento no começo do deque", () => {
    const deque = new Deque(); 
    deque.addFront("João");
    deque.addFront("Maria");

    expect(deque.peekFront()).toBe("Maria");
});

test("Deve inserir o elemento no final do deque", () => {
    const deque = new Deque();
    deque.addBack("João");
    deque.addBack("Maria");
    deque.addBack("Carlos");

    expect(deque.peekBack()).toBe("Carlos");
});

test("Deve remover o elemento no começo do deque", () => {
    const deque = new Deque(); 
    deque.addFront("João");
    deque.addFront("Maria");
    deque.addFront("Carlos");
    deque.removeFront();

    expect(deque.peekFront()).toBe("Maria");
});

test("Deve remover o elemento no final do deque", () => {
    const deque = new Deque();
    deque.addBack("João");
    deque.addBack("Maria");
    deque.addBack("Carlos");
    deque.removeBack();

    expect(deque.peekBack()).toBe("Maria");
});

test("Deve retornar true se o deque estiver vazio", () => {
    const deque = new Deque();

    expect(deque.isEmpty()).toBeTruthy();  
})

test("Deve retornar false se o deque não estiver vazio", () => {
    const deque = new Deque();
    deque.addFront("Sergio");

    expect(deque.isEmpty()).toBeFalsy();  
})

test("Deve retornar uma string com os elementos do deque", () => {
    const deque = new Deque();
    deque.addFront("Sergio");
    deque.addFront("Julio");
    deque.addBack("Joaquim");
    deque.addFront("Maria");

    expect(deque.toString()).toBe("Maria,Julio,Sergio,Joaquim");  
})

test("Deve limpar o deque", () => {
    const deque = new Deque();
    deque.addFront("Sergio");
    deque.addFront("Julio");
    deque.addBack("Joaquim");
    deque.addFront("Maria");
    deque.clear();

    expect(deque.isEmpty()).toBeTruthy();  
})

test("Deve retornar o tamanho do deque", () => {
    const deque = new Deque();
    deque.addFront("Sergio");
    deque.addFront("Julio");
    deque.addBack("Joaquim");
    deque.addFront("Maria");

    expect(deque.size()).toBe(4);  
})

