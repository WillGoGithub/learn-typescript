type typeAlias = [string, number, boolean, Date];

let BMwMotor: typeAlias = ['BMW', 1, true, new Date(2020, 1, 1)];
let VolvoRV: typeAlias = ['Volvo', 2, false, new Date(2021, 1, 1)];

// 陣列型別表示法
type arrayTypeRepresentation = (string | Date)[];

// 元組型別表示法
type tupleTypeRepresentation = [string, number, Date];

let BMwMotorJson = {
    brand: 'BMW',
    type: 'motorcycle',
    color: 'silver',
    date: new Date(2020, 1, 1)
};

const returnTupleFunction = (): [string, number] => {
    return ["str", 1];
}

console.log(returnTupleFunction()[0]);
console.log(returnTupleFunction()[1]);