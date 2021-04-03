"use strict";
var incompletePersonalInfo = {
    name: 'A',
    age: 20,
};
// Class
var Case = /** @class */ (function () {
    function Case(memberProp) {
        this.memberProp = memberProp;
    }
    Case.prototype.memberFunc = function () {
        return this.memberProp;
    };
    Object.defineProperty(Case.prototype, "value", {
        get: function () {
            return this.memberProp;
        },
        set: function (input) {
            this.memberProp = input;
        },
        enumerable: false,
        configurable: true
    });
    return Case;
}());
