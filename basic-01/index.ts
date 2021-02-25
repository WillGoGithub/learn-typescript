// TDZ = Temporal dead zone
let tdz: string;
// let t = tdz;

let absolutelyEitherNullOrString: string | null = null;

absolutelyEitherNullOrString = "string";
absolutelyEitherNullOrString = null;

// Cannot redeclare block-scoped variable 'name'.
// block-scope
let name: string = "ad";

let nestedObj = {
    prop: "Hello",
    child: {
        prop1: 1,
        prop2: false,
    },
};

let obj2 = { ...nestedObj, hi: "123" };

// Object annotation

let justAnObj: object = { hello: "World" };

// justAnObj.hello

justAnObj = { hi: "There" };

// justAnObj.hi
// Type 'number' is not assignable to type 'object'.
justAnObj = 123;

justAnObj = [1, "2", true, { hello: "Go" }];

justAnObj = function () {};

justAnObj = new Object();

// function annotation

let f1 = function f1() {
    return undefined;
};

let f2 = function f2(): undefined {
    return undefined;
};

// A function whose declared type is neither 'void' nor 'any' must return a value
let f3 = function f3(): undefined {};

// @ @ !
let f4 = function f4(): void {
    return undefined;
};

// Array
let canBeEitherNullOrNumbers: (number | null)[] = [1, 2, 4];
