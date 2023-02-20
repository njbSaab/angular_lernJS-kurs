import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  private counter: number = 0

  @HostBinding('style.color') myColor: string
  @HostListener('click', ['$event']) changeColor(event:any){
    this.setRandomColor()
    this.counter++
    console.log(this.counter)
  }
  setRandomColor(){
    this.myColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

  }
  constructor() {
    this.myColor = 'red'
    setTimeout(() => {
      this.myColor = 'green'
    },2000)
  }

}
