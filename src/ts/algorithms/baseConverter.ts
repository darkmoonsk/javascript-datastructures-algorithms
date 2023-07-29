import Stack from "../data-structures/stack";

export default function baseConverter(decNumber: number, base: number): string {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem: number;
    let baseString = "";

    if(!(base >= 2 && base <= 36)) return "";
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {''
        baseString += digits[remStack.pop()];
    }

    return baseString;
}