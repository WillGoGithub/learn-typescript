"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = __importDefault(require("./Role"));
class Character {
    constructor(name, role, weaponRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        this.attackRef = weaponRef.attackStrategy;
    }
    introduce() {
        console.log(`
            Hi, I'm ${this.name} the ${Role_1.default[this.role]}!
        `);
    }
    attack(target) {
        this.attackRef.attack(this, target);
    }
    equip(weapon) {
        const { availableRoles: roles } = weapon;
        if (roles.length === 0 || roles.includes(this.role)) {
            console.log(`${this.name} has equipped with "${weapon.name}".`);
            this.weaponRef = weapon;
            this.attackRef = this.weaponRef.attackStrategy;
        }
        else {
            throw new Error(`${this.role} cannot equip the ${this.name}.`);
        }
    }
}
exports.default = Character;
