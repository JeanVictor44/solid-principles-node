import Beer from "./Beer";
import Item from "./Item";
import Order from "./Order";
import Water from "./Water";
import Whisky from "./Whisky";

// Essa é nossa expectativa
test("Deve criar um pedido e calcular o total", function(){
    // given -> dado que eu crio um pedido...
    const order = new Order();
    order.addItem(new Beer("Brahma", 10))//10%
    order.addItem(new Whisky("Jack Daniels", 100))//20%
    order.addItem(new Water("Crystal", 1))// isenta


    //when -> quando eu pedir para calcular o total
    const total = order.getTotal()

    //then -> então eu espero que
    expect(total).toBe(111)
})

test("Deve criar um pedido e calcular os impostos", function(){
    // given -> dado que eu crio um pedido...
    const order = new Order();
    order.addItem(new Beer("Brahma", 10))//10%
    order.addItem(new Whisky("Jack Daniels", 100))//20%
    order.addItem(new Water("Crystal", 1))// isenta

    //when -> quando eu pedir para calcular os impostos
    const taxes = order.getTaxes()

    //then -> então eu espero que
    expect(taxes).toBe(21)
})