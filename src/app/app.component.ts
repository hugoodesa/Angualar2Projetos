import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  abaAtual="cadastro"

  abaTrocada(aba:any){
    this.abaAtual=aba
  }

  title = 'data-binding';
}
