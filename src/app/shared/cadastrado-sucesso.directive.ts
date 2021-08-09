import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cadastradoSucesso]'
})
export class CadastradoSucessoDirective {

  constructor(
    private element:ElementRef,
    private renderer:Renderer2
  ) {}

  @Input() set cadastradoSucesso(cadastradoComSucesso:boolean){
    if(cadastradoComSucesso){
      console.log(this.element)
      this.renderer.setAttribute(this.element.nativeElement,"class","alert alert-success")
      return
    }

      //@HostBinding('class') estiloAplicar:string="alert alert-danger"
      this.renderer.setAttribute(this.element.nativeElement,"class","alert alert-danger")
      console.log('falso vindo da diretiva')
  }



}
