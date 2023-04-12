type ValidTypes = string | number;

function identity<T extends ValidTypes, U>(value: T, message: U) {
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {
        // Is it a number?
        result = value + value; // OK
    } else if (typeof value === 'string') {
        // Is it a string?
        result = value + value; // OK
    }

    console.log(
        `The message is ${message} and the function returns a ${typeValue} value of ${result}`
    );

    return result;
}

let returnNumber = identity<number, string>(100, 'Hello!'); // OK
let returnString = identity<string, string>('100', 'Hola!'); // OK
let returnBoolean = identity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: 'cats', 2: 'dogs', 3: 'parrots', 4: 'fish' };

console.log(getPets(pets1, 'fish')); // Returns 6
console.log(getPets(pets2, '3')); // Error

class processIdentity<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity(): T {
        console.log(this._message);
        return this._value;
    }
}
let processor = new processIdentity<number, string>(100, 'Hello');
processor.getIdentity(); // Displays 'Hello'
