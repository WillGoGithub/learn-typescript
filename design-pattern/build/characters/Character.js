"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = __importDefault(require("./Role"));
class Character {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    introduce() {
        console.log(`
            Hi, I'm ${this.name} the ${Role_1.default[this.role]}!
        `);
    }
    attack(target) {
        console.log(`${this.name} attacks ${target.name} using the sword!`);
    }
}
exports.default = Character;
