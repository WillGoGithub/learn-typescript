"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Role_1 = __importDefault(require("./Role"));
var Character_1 = __importDefault(require("./Character"));
var swordsman = new Character_1.default('Jack', Role_1.default.Swordsman);
swordsman.introduce();
