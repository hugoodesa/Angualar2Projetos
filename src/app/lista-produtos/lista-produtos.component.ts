import { ValidarCadastroService } from './../cadastrar-produto/validar-cadastro.service';
import {
  Component,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit, OnChanges {
  constructor(private produtos: ValidarCadastroService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  iniciado: number = 0;
  listaProdutos: any[] = [];
  editar: string = '';

  produtoPesquisado: string = '';
  favoritoAtivo: boolean = false;

  ngOnInit(): void {
    this.listaProdutos = this.produtos.getProdutos();
    this.produtos.event.subscribe((msg) => (this.editar = msg));
  }

  excluirProduto(codProduto: number): void {
    this.produtos.excluirProduto(codProduto);
  }

  editarProduto(codProd: number) {
    console.log('Editar produto Dentro do modulo ' + codProd);
    this.produtos.editarProduto(codProd);
  }

  ativarFiltroFavoritos(){
    this.favoritoAtivo=!this.favoritoAtivo
  }

  filtrarFavoritos() {
    if (this.favoritoAtivo) {
      return this.listaProdutos.filter((produto) => {
        if (produto.favorito) {
          return produto;
        }
      });
    }
    return this.listaProdutos;
  }

  listarProdutos() {
     console.log(" listar produtos ")
    if (
      !this.produtoPesquisado ||
      this.produtoPesquisado.trim() == '' ||
      this.listaProdutos.length == 0
    ) {
      //console.log(" filtro limpo "+this.produtoPesquisado)
      return this.listaProdutos;
    }

    return this.listaProdutos.filter((produto) => {
      console.log(" entrou filtro ".trim())

      if ((produto.desc.toLowerCase().trim()).includes(this.produtoPesquisado)) {
        console.log(" filtro "+produto)
        return produto;
      }
    });
  }

  gerenciarFiltros(){

    if(this.favoritoAtivo){
      return this.filtrarFavoritos()
    }

    if(this.produtoPesquisado){
      return this.listarProdutos()
    }

    return this.listaProdutos
  }
}
