class Produto {
    constructor(code, description, price) {
        this.code = code;
        this.description = description;
        this.price = price;
    }
}

class Cardapio {
    constructor() {
        this.produtos = []; 
    }

    adicionarProduto(code, description, price) {
        const produto = new Produto(code, description, price);
        this.produtos.push(produto);
    }

    listarProdutos() {
        return this.produtos;
    }
}

const cardapio = new Cardapio();
cardapio.adicionarProduto("cafe", "Café", 3.00);
cardapio.adicionarProduto("chantily", "Chantily (extra do Café)", 1.50);
cardapio.adicionarProduto("suco", "Suco Natural", 6.20);
cardapio.adicionarProduto("sanduiche", "Sanduíche", 6.50);
cardapio.adicionarProduto("queijo", "Queijo (extra do Sanduíche)", 2.00);
cardapio.adicionarProduto("salgado", "Salgado", 7.25);
cardapio.adicionarProduto("combo1", "1 Suco e 1 Sanduíche", 9.50);
cardapio.adicionarProduto("combo2", "1 Café e 1 Sanduíche", 7.50);

export default cardapio;
 
