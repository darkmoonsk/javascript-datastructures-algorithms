import decimalToBinary from "../../../src/ts/algorithms/decimalToBinary";

test("Deve retornar um numero decimal convertido em binario", () => {
    const result = decimalToBinary(233);
    expect(result).toBe("11101001");
})

test("Deve retornar um numero decimal convertido em binario", () => {
    const result = decimalToBinary(10);
    expect(result).toBe("1010");
})

test("Deve retornar um numero decimal convertido em binario", () => {
    const result = decimalToBinary(64)
    expect(result).toBe("1000000");
})