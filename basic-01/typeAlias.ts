type typeAlias = [string, number, boolean, Date];

let BMwMotor: typeAlias = ['BMW', 1, true, new Date(2020, 0, 1)];
let VolvoRV: typeAlias = ['Volvo', 2, false, new Date(2021, 0, 1)];

// 陣列型別表示法
type arrayTypeRepresentation = (string | Date)[];

// 元組型別表示法
type tupleTypeRepresentation = [string, number, Date];

let BMwMotorJson = {
    brand: 'BMW',
    type: 'motorcycle',
    color: 'silver',
    date: new Date(2020, 0, 1)
};

const returnTupleFunction = (): [string, number] => {
    return ["str", 1];
}

console.log(returnTupleFunction()[0]);
console.log(returnTupleFunction()[1]);

//

type MathOperator = (n1: number, n2: number) => number;

let powerOp: MathOperator = function (n1: number, n2: number): number {
    return n1 ** n2;
}

// Type - Duck-typing

type PersonInfo = {
    name: string,
    age: number,
    hasPet: boolean
};

function printInfo(info: PersonInfo) {
    console.log(`Name: ${ info.name }`);
    console.log(`Age: ${ info.age }`);
    console.log(`Has Pet? ${ info.hasPet }`);
}

printInfo({
    name: 'Mar',
    age: 28,
    hasPet: true,

    hi: 'no',
});

let infoAboutAxe = {
    name: 'Mar',
    age: 28,
    hasPet: true,

    hi: 'no',
}

printInfo(infoAboutAxe);