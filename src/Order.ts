import Item from "./Item"

//Qual o propósito da classe Order
// Agrupar um conjunto de itens
// impostos mudam por motivos diferentes da modelagem do pedido
export default class Order {
    items: Item[]
    constructor(){
        this.items = []
    }
    addItem(item: Item){
        this.items.push(item)
    }

    getTaxes(){
        let taxes = this.items.reduce((acc,item) => {
            return acc + item.calculateTax()
        },0)

        return taxes
    }

    getTotal(){
        let total = this.items.reduce((acc, item) => item.price + acc, 0)
        return total
    }
}