import { Directive, HostBinding, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverCard]',
})
export class HoverCardDirective implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.bgColor=this.hoverCard
  }

  @Input() hoverCard=""
  @Input() bgHover=""
  @HostBinding('style.backgroundColor') bgColor = '';

  @HostListener('mouseenter') setBgColor(){
    this.bgColor=this.bgHover
  }
  @HostListener('mouseleave') resetBgColor(){
    this.bgColor=this.hoverCard
  }

}
