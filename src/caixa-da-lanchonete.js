import cardapio from "./cardapio.js"
import {Pedido, FormatarListaPedido} from "./pedido.js";

class CaixaDaLanchonete {

    calcularTotal(listaPedido, metodoDePagamento){
        let total = 0;
        listaPedido.forEach(item => {
            const {codigo, qtd} = item;
            const findItemCardapio = cardapio.listarProdutos().find(item=> item.code === codigo)
            total += findItemCardapio.price*qtd
        })
        if(metodoDePagamento === "dinheiro"){
            total -= total*5/100 
        }
        else if(metodoDePagamento === "credito"){
            total+= total*3/100
        }
        const formatarTotal = `R$ ${total.toFixed(2).replace(".", ",")}`
        return formatarTotal
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        const listaPedidosFormatada = new FormatarListaPedido(itens).listaPedidos
        const validacaoPedido = new Pedido(metodoDePagamento, itens).validarPedido();
        if (validacaoPedido === "pedido validado"){
            return this.calcularTotal(listaPedidosFormatada, metodoDePagamento)
        }
        else{
            return validacaoPedido;
        }
    }
}

export { CaixaDaLanchonete };
