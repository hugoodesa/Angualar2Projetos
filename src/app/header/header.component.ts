import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() trocadeAba=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  abaAtual=""

  alterarAba(aba:string){
    this.abaAtual=aba
    this.trocadeAba.emit(aba)
  }



}
