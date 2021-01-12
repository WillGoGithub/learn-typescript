"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// TDZ = Temporal dead zone
var tdz;
// let t = tdz;
var absolutelyEitherNullOrString = null;
absolutelyEitherNullOrString = 'string';
absolutelyEitherNullOrString = null;
// block-scope
var name = 'ad';
var nestedObj = {
    prop: 'Hello',
    child: {
        prop1: 1,
        prop2: false
    }
};
var obj2 = __assign(__assign({}, nestedObj), { hi: '123' });
// Object annotation
var justAnObj = { hello: 'World' };
// justAnObj.hello
justAnObj = { hi: 'There' };
// justAnObj.hi
justAnObj = 123;
justAnObj = [1, '2', true, { hello: 'Go' }];
justAnObj = function () { };
justAnObj = new Object();
// function annotation
var f1 = function f1() {
    return undefined;
};
var f2 = function f2() {
    return undefined;
};
var f3 = function f3() {
};
// @ @ !
var f4 = function f4() {
    return undefined;
};
// Array
var canBeEitherNullOrNumbers = [1, 2, 4];
