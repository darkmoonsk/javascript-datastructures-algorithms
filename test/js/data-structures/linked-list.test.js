
import LinkedList from "./../../../src/js/data-structures/linked-list";
describe("Testes para a classe LinkedList", () => {
    test("Deve adicionar corretamente o elemento a lista ligada", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
    
        expect(linkedList.size()).toBe(1);
    })
    
    test("Deve remover corretamente o elemento da lista no index especificado", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.removeAt(0);
    
        const nodeElement = linkedList.getElementAt(0);
        console.log(nodeElement)
        expect(nodeElement.element).toBe(2);
    })
    
    test("Deve obter o elemento corretamente baseando-se no index especificado", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
    
        const nodeElement = linkedList.getElementAt(1);
        expect(nodeElement.element).toBe(2);
    })
    
    test("Deve retornar undefined se for passado um index incorreto", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
    
        const nodeElement = linkedList.getElementAt(3);
        expect(nodeElement).toBeUndefined();
    })
    
    test("Deve inserir corretamente o elemento na lista ligada no index especificado", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.insert(4, 1);
    
        const nodeElement = linkedList.getElementAt(1);
        expect(nodeElement.element).toBe(4);
    })
    
    test("Deve encontrar corretamente o index do elemento presente na lista ligada", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
    
        const index = linkedList.indexOf(2);
        expect(index).toBe(1);
    })

    test("Deve retornar -1 quando o elemento não estiver presente na lista ligada", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
    
        const index = linkedList.indexOf(4);
        expect(index).toBe(-1);
    })

    test("Deve remover corretamente o elemento da lista ligada", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.remove(2);
    
        const nodeElement = linkedList.getElementAt(1);
        expect(nodeElement.element).toBe(3);
    })

    test("Deve retornar o tamanho da lista", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
    
        expect(linkedList.size()).toBe(3);
    })

    test("Deve retornar true se a lista estiver vazia", () => {
        const linkedList = new LinkedList();
        expect(linkedList.isEmpty()).toBeTruthy();
    })

    test("Deve retornar false se a lista não estiver vazia", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        expect(linkedList.isEmpty()).toBeFalsy();
    })

    test("Deve retornar o primeiro elemento da lista", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
    
        expect(linkedList.getHead().element).toBe(1);
    })

    test("Deve retornar uma string vazia se a lista estiver vazia", () => {
        const linkedList = new LinkedList();
        expect(linkedList.toString()).toBe("");
    })

    test("Deve retornar uma string com os elementos da lista", () => {
        const linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
    
        expect(linkedList.toString()).toBe("1,2,3");
    })
});