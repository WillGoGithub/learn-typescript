// Dictionary
type Dictionary = {
    [propName: string]: string,
};

interface StringTypedList {
    [index: number]: string,
}

let normalDictionary: Dictionary = {
    hello: 'world',
    thisFeature: 'ts',
};

let emptyDictionary: Dictionary = {};

let wrongDictionary: Dictionary = {
    hello: 123,
    bol: true,
    fun() { console.log('hi'); },
    nestedDictionary: { he: 123 },
};

// StringTypedList
// interface StringTypedList {
//     [index: number]: string;
// }

let stringTypeArray: StringTypedList = {
    123: 'Hello',
    [456]: 'Hi',
}

stringTypeArray[0];
stringTypeArray[1];
stringTypeArray[2];
stringTypeArray['H'];
stringTypeArray.hi;

let emptyStringTypedArray: StringTypedList = {};

let canNotBeNumberArray: StringTypedList = [1, 2, 3];
let canBeStringArray: StringTypedList = ['1', '2', '3'];

let canBeEmptyArray: StringTypedList = [];

let wrongStringTypedArray: StringTypedList = {
    message: 'H',
};

// [keyName: TKey]: TValue
// TKey 必須為 number 或者是 string 其中一種，不能為其他型別與 number 和 string 的複合格式（連 number | string 是不接受的！)