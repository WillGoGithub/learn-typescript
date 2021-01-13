"use strict";
var BMwMotor = ['BMW', 1, true, new Date(2020, 0, 1)];
var VolvoRV = ['Volvo', 2, false, new Date(2021, 0, 1)];
var BMwMotorJson = {
    brand: 'BMW',
    type: 'motorcycle',
    color: 'silver',
    date: new Date(2020, 0, 1)
};
var returnTupleFunction = function () {
    return ["str", 1];
};
console.log(returnTupleFunction()[0]);
console.log(returnTupleFunction()[1]);
