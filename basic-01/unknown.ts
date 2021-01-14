let anyType: any;
let unknownType: unknown;

anyType = 123;
anyType = 'string';
anyType = true;
anyType = null;
anyType = undefined;
anyType = { hello: 'world' };
anyType = [1, true, null, 'string'];
anyType = () => { console.log('Hi'); };
anyType = new Object();

unknownType = 123;
unknownType = 'string';
unknownType = true;
unknownType = null;
unknownType = undefined;
unknownType = { hello: 'world' };
unknownType = [1, true, null, 'string'];
unknownType = () => { console.log('Hi'); }
unknownType = new Object();


let isAny: any;
let isUnknown: unknown;

let isNumber: number;
let isString: string;
let isBoolean: boolean;
let isNull: null;
let isUndefined: undefined;
let isAKindOfObjectLiteral: { name: string, age: number };
let isAKindOfArray: number[];
let isAKindOfFunction: () => void;
let isAKindOfObject: Object;

// 任何型別的變數都可以被 `any` 型別所指派
isNumber = isAny;
isString = isAny;
isBoolean = isAny;
isNull = isAny;
isUndefined = isAny;
isAKindOfObjectLiteral = isAny;
isAKindOfArray = isAny;
isAKindOfFunction = isAny;
isAKindOfObject = isAny;

isAny = isAny;
isUnknown = isAny; // *

// 除了 Any & Unknown 之外都不能指派
isNumber = isUnknown;
isString = isUnknown;
isBoolean = isUnknown;
isNull = isUnknown;
isUndefined = isUnknown;
isAKindOfObjectLiteral = isUnknown;
isAKindOfArray = isUnknown;
isAKindOfFunction = isUnknown;
isAKindOfObject = isUnknown;

isAny = isUnknown;
isUnknown = isUnknown; // *

// 利用 Type Guard 就可能進行指派
if (typeof isUnknown === 'number') {
    isNumber = isUnknown;
}

// 強型別註記
isString = <string>isUnknown;
isAKindOfArray = isUnknown as number[];

// 安全函式包裝不安全函式
function safelyParseJSON(jsonString: string): unknown {
    return JSON.parse(jsonString);
}

let randomJSONString = `{
    "message": "Hello",
    "unknownType": true
}`;

// 原始
let parsedFromNormalJSONParse = JSON.parse(randomJSONString);
parsedFromNormalJSONParse.message;

// Safe-Counterpart
let parsedFromSafeJSONParse = safelyParseJSON(randomJSONString);
parsedFromNormalJSONParse.message;