import { ValidarCadastroService } from './../cadastrar-produto/validar-cadastro.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtos:ValidarCadastroService) { }

  listaProdutos:any[]=[]
  editar:string=""
  produtoPesquisado:string=""

  ngOnInit(): void {
    this.listaProdutos=this.produtos.getProdutos()
    this.produtos.event.subscribe(msg=>this.editar=msg)
  }

  excluirProduto(codProduto:number):void{
    this.produtos.excluirProduto(codProduto)
  }

  editarProduto(codProd:number){
    console.log("Editar produto Dentro do modulo "+codProd)
    this.produtos.editarProduto(codProd)
  }

  listarProdutos(){
    if(this.produtoPesquisado){
      return this.listaProdutos
    }

    this.listaProdutos.filter(produto=>produto.desc.includes(produto))
    return this.listaProdutos
  }

}
