"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Role_1 = __importDefault(require("./Role"));
var Character = /** @class */ (function () {
    function Character(name, role) {
        this.name = name;
        this.role = role;
    }
    Character.prototype.introduce = function () {
        console.log("\n            Hi, I'm " + this.name + " the " + Role_1.default[this.role] + "!\n        ");
    };
    return Character;
}());
exports.default = Character;
