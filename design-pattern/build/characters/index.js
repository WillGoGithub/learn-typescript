"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = __importDefault(require("./Role"));
const Character_1 = __importDefault(require("./Character"));
const swordsman = new Character_1.default('Jack', Role_1.default.Swordsman);
const warlock = new Character_1.default('Leon', Role_1.default.Warlock);
swordsman.introduce();
warlock.introduce();
swordsman.attack(warlock);
warlock.attack(swordsman);
