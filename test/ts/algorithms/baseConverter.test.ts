import baseConverter from "../../../src/ts/algorithms/baseConverter";

test("Deve retornar um numero decimal convertido em binario", () => {
    const result = baseConverter(10, 2);
    expect(result).toBe("1010");
})

test("Deve retornar um decimal convertido em octal", () => {
    const result = baseConverter(10356, 8);
    expect(result).toBe("24164");
})

test("Deve retornar um numero decimal convertido em hexadecimal", () => {
    const result = baseConverter(100345, 16);
    expect(result).toBe("187F9");
})

test("Deve retornar um numero decimal convertido em base 35", () => {
    const result = baseConverter(100345, 35);
    expect(result).toBe("2BW0");
})

test("Deve retornar uma string vazia se a base for maior que 36", () => {
    const result = baseConverter(100345, 37);
    expect(result).toBe("");
})

test("Deve retornar uma string vazia se a base for menor que 2", () => {
    const result = baseConverter(25, 1)
    expect(result).toBe("");
})