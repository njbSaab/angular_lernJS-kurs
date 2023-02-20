import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit{
  @Input() appDelay : any
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }


  ngOnInit(): void {
    setTimeout(()=>{
      this.view.createEmbeddedView(this.template)
    }, this.appDelay * 1000)

  }

}
