import {
  Injectable,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ValidarCadastroService {
  event = new EventEmitter();
  intCodProd = 0;

  constructor() {}

  produtos: any[] = [
    {
      intCodProd: 1,
      desc: 'camiseta',
      preco: 11,
      estoque: 1,
      src: 'https://picsum.photos/id/237/200/300',
    },
    {
      intCodProd: 2,
      desc: 'Regata',
      preco: 51,
      estoque: 2,
      src: 'https://picsum.photos/id/237/200/300',
    },
    {
      intCodProd: 3,
      desc: 'Polo',
      preco: 44,
      estoque: 34,
      src: 'https://picsum.photos/id/237/200/300',
    },
  ];

  validarCadastroProduto(produto: any): boolean {
    let valido = true;

    /* validar descricao */
    if (
      produto.desc == null ||
      produto.desc.trim == '' ||
      produto.desc.length < 5
    ) {
      valido = false;
      this.event.emit('descrição inválido !');
    }

    if (produto.preco < 0 || produto.preco == null) {
      valido = false;
      this.event.emit('preco inválido !');
    }

    if (produto.estoque < 0 || produto.preco == null) {
      valido = false;
      this.event.emit('estoque inválido !');
    }

    return valido;
  }

  addProdutoProdutos(produto: any) {
    let cadastradoComSucesso:boolean=true

    this.intCodProd = this.produtos.length + 1;

    /* produto seja válido deve cadastrar */
    if (this.validarCadastroProduto(produto)) {
      produto.intCodProd=this.intCodProd

      this.produtos.push(produto);

      this.intCodProd++;

      this.event.emit('Sucesso ao cadastrar !');
      /* retornar sucesso */
      return cadastradoComSucesso
    }

    /* produto inválido */
    this.event.emit('erro ao cadastrar!');

    /* produto erro */
    cadastradoComSucesso=false
    return cadastradoComSucesso
  }

  getProdutos() {
    return this.produtos;
  }
}
