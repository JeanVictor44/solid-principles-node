"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Qual o propósito da classe Order
// Agrupar um conjunto de itens
// impostos mudam por motivos diferentes da modelagem do pedido
class Order {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getTaxes() {
        let taxes = this.items.reduce((acc, item) => {
            return acc + item.calculateTax();
        }, 0);
        return taxes;
    }
    getTotal() {
        let total = this.items.reduce((acc, item) => item.price + acc, 0);
        return total;
    }
}
exports.default = Order;
