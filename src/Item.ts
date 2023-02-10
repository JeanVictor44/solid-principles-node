export default abstract class Item {
    category: string
    description: string
    price: number
    constructor(category: string, description: string, price: number){
        this.category = category;
        this.description = description;
        this.price = price;
    }

    calculateTax(){
        // Sempre que adicionamos um novo tipo precisamos adicionar outro if
        // Isso quebra o princípio 2 do SOLID OCP(open closed principle)
        // Criar uma abstração para conseguir escalar o design do software de uma forma mais saudável
        // Deixar ele aberto para extensão
        // A taxa varia de um item para o outro
        // Template map -> manter parte do comportamento na superclasse
        // na subclass fica aquilo que varia
        
        // if(this.category === 'Beer'){
        //     return (this.price * this.getTax())/100
        // }
        // if(this.category == "Whisky"){
        //     return (this.price * this.getTax())/100
        // }
        // if(this.category == "Eletronic"){
        //     return (this.price * this.getTax())/100
        // }
        // if(this.category == "Water"){
        //     return (this.price * this.getTax())/100
        // }

        return (this.price * this.getTax()) / 100
    }

    abstract getTax(): number
}