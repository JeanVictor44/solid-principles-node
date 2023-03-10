"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Beer_1 = __importDefault(require("./Beer"));
const Order_1 = __importDefault(require("./Order"));
const Water_1 = __importDefault(require("./Water"));
const Whisky_1 = __importDefault(require("./Whisky"));
// Essa é nossa expectativa
test("Deve criar um pedido e calcular o total", function () {
    // given -> dado que eu crio um pedido...
    const order = new Order_1.default();
    order.addItem(new Beer_1.default("Brahma", 10)); //10%
    order.addItem(new Whisky_1.default("Jack Daniels", 100)); //20%
    order.addItem(new Water_1.default("Crystal", 1)); // isenta
    //when -> quando eu pedir para calcular o total
    const total = order.getTotal();
    //then -> então eu espero que
    expect(total).toBe(111);
});
test("Deve criar um pedido e calcular os impostos", function () {
    // given -> dado que eu crio um pedido...
    const order = new Order_1.default();
    order.addItem(new Beer_1.default("Brahma", 10)); //10%
    order.addItem(new Whisky_1.default("Jack Daniels", 100)); //20%
    order.addItem(new Water_1.default("Crystal", 1)); // isenta
    //when -> quando eu pedir para calcular os impostos
    const taxes = order.getTaxes();
    //then -> então eu espero que
    expect(taxes).toBe(21);
});
