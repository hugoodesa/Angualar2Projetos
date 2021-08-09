import { ValidarCadastroService } from './../cadastrar-produto/validar-cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtos:ValidarCadastroService) { }

  listaProdutos:any[]=[]

  ngOnInit(): void {
    this.listaProdutos=this.produtos.getProdutos()
  }

}
