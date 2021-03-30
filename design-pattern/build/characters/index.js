"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Swordsman_1 = __importDefault(require("./Swordsman"));
const Warlock_1 = __importDefault(require("./Warlock"));
const swordsman = new Swordsman_1.default('Jack');
const warlock = new Warlock_1.default('Leon');
swordsman.introduce();
warlock.introduce();
swordsman.attack(warlock);
warlock.attack(swordsman);
