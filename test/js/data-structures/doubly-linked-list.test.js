import DoublyLinkedList from "./../../../src/js/data-structures/doubly-linked-list";

describe("Testes para a estrutura de dados Doubly Linked List", () => {
    test("a estrutura de dados deve ser instanciável", () => {
        const doublyLinkedList = new DoublyLinkedList();

        expect(doublyLinkedList).not.toBe(null);
    });

    test("O método push deve adicionar o elemento corretamente no final da lista", () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.push(1);
        doublyLinkedList.push(2);
        doublyLinkedList.push(3);

        expect(doublyLinkedList.getTail().element).toBe(3);
    });

    test("O método insert deve adicionar corretamente em qualquer posição da lista", () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.push(1);
        doublyLinkedList.push(2);
        doublyLinkedList.push(3);
        doublyLinkedList.insert(4, 1);

        expect(doublyLinkedList.toString()).toBe("1,4,2,3");
    });

    test("O método removeAt deve remover corretamente o elemento no index especificado", () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.push(1);
        doublyLinkedList.push(2);
        doublyLinkedList.push(3);
        doublyLinkedList.push(4);
        doublyLinkedList.removeAt(2);

        expect(doublyLinkedList.toString()).toBe("1,2,4");
    })

    test("Se o método removeAt for chamado com um index inválido, deve retornar undefined", () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.push(1);
        doublyLinkedList.push(2);

        expect(doublyLinkedList.removeAt(4)).toBe(undefined);
    });

    test("O método getTail deve retornar o ultimo elemento da lista", () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.push("Pedro");
        doublyLinkedList.push("Maria");
        doublyLinkedList.push("João");

        expect(doublyLinkedList.getTail().element).toBe("João");
    })

    test("O método clear deve limpar corretamente a lista", () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.push(1);
        doublyLinkedList.push(2);
        doublyLinkedList.push(3);
        doublyLinkedList.clear();

        expect(doublyLinkedList.toString()).toBe("");
    })

    test("O método inverseToString deve retornar a lista como uma string invertida", () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.push(1);
        doublyLinkedList.push(2);
        doublyLinkedList.push(3);

        expect(doublyLinkedList.inverseToString()).toBe("3,2,1");
    })
});