import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";
import cardapio from "./cardapio.js" 


class FormatarListaPedido {
    constructor(itens) {
        this.listaPedidos = this.formatarLista(itens);
    }

    formatarLista(itens) {
        return itens.map(item => {
            const array = item.split(",");
            const codigo = array[0];
            const qtd = Number(array[1]);
            return { codigo, qtd };
        });
    }
}

class Pedido{
    constructor(metodoDePagamento, itensPedido){
        this.metodoDePgmt = metodoDePagamento;
        this.itens = itensPedido;
        this.listaPedidoFormatada = new FormatarListaPedido(itensPedido).listaPedidos
    }

    validarPedido(){
        const metodosPgmt = ["dinheiro", "debito", "credito"]
        const verificaQtd = (item)=> item.qtd === 0

        if(!metodosPgmt.includes(this.metodoDePgmt)){
            return "Forma de pagamento inválida!"
        }
        if(this.itens === undefined || this.itens.length<1){
            return "Não há itens no carrinho de compra!"
        }             
        if(this.listaPedidoFormatada.some(verificaQtd)){
            return "Quantidade inválida!"
        }
        else{
            return this.validaItensCardapio(this.listaPedidoFormatada, this.metodoDePgmt)
        }        
    }

    validaItensCardapio(){
        const codigosCardapio = cardapio.listarProdutos().map(item=>item.code)
        const codigosPedido = this.listaPedidoFormatada.map(item=>item.codigo)
        const verificaCodigoEmCardapio = this.listaPedidoFormatada.every(item=>codigosCardapio.includes(item.codigo))
        if(verificaCodigoEmCardapio === false){
            return "Item inválido!";
        }
        else{
            if(codigosPedido.includes("chantily") && !codigosPedido.includes("cafe") || codigosPedido.includes("queijo") && !codigosPedido.includes("sanduiche")){
                return "Item extra não pode ser pedido sem o principal"
            }
            else{
                return "pedido validado"
            }
        }        
    }   

}
 export { Pedido, FormatarListaPedido };