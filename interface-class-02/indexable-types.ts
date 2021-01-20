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
