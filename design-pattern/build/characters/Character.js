"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = __importDefault(require("./Role"));
class Character {
    constructor(name, role, attackRef) {
        this.name = name;
        this.role = role;
        this.attackRef = attackRef;
    }
    introduce() {
        console.log(`
            Hi, I'm ${this.name} the ${Role_1.default[this.role]}!
        `);
    }
    attack(target) {
        this.attackRef.attack(this, target);
    }
}
exports.default = Character;
