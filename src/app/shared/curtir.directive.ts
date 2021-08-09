import { Directive, HostBinding, HostListener, OnInit,Input } from '@angular/core';

@Directive({
  selector: '[curtir]'
})
export class CurtirDirective implements OnInit{

  constructor() { }

  ngOnInit(): void {
    //this.classeElemento="bi bi-bookmark-star"
  }


  @Input() set curtir(favorito:boolean){
    if(favorito){
      //console.log("diretiva curtir entrou")
      this.classeElemento="bi bi-bookmark-star-fill"
      return
    }

    //console.log("diretiva curtir fora")
    this.classeElemento="bi bi-bookmark-star"
  }

  @HostBinding("class") classeElemento=""

  @HostListener('click') mouseSobre(){
    if(this.classeElemento==="bi bi-bookmark-star-fill"){
      this.classeElemento="bi bi-bookmark-star"
      return
    }
    this.classeElemento="bi bi-bookmark-star-fill"
  }



}
