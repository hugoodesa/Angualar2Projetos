import { AppComponent } from './../app.component';
import { ValidarCadastroService } from './validar-cadastro.service';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css'],
})
export class CadastrarProdutoComponent implements OnInit {
  constructor(private validarCadastro: ValidarCadastroService) {}

  statusCadastro: string = '';
  sucessoAoCadastrar:boolean=true
  fragil:boolean=true
  abaAtual:string=""

  ngOnInit(): void {
    this.validarCadastro.event.subscribe((msg) => {
      this.statusCadastro=msg
      console.log("vindo cadastrar produto " + msg);
    });
  }

  transformarEmFragil(){
    this.fragil=!this.fragil
  }

  addProduto(desc: string, preco: string, estoque: string) {
    /* gerar um numero inteiro randomico para imagem */

    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    let codImg = getRandomInt(200, 250);

    let produtoTemplate = {
      desc,
      preco,
      estoque,
      src: `https://picsum.photos/id/${codImg}/200/300`,
      fragil:this.fragil,
      favorito:false
    };

    //console.log(produtoTemplate)

    this.sucessoAoCadastrar=this.validarCadastro.addProdutoProdutos(produtoTemplate);

  }

}
