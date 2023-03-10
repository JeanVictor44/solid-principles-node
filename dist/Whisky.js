"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Whisky extends Item_1.default {
    constructor(description, price) {
        super('Whisky', description, price);
    }
    getTax() {
        return 20;
    }
}
exports.default = Whisky;
