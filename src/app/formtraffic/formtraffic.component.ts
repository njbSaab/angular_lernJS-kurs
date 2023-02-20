import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

type TLColor = 'red' | 'yellow' | 'green';
@Component({
  selector: 'app-formtraffic',
  templateUrl: './formtraffic.component.html',
  styleUrls: ['./formtraffic.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormtrafficComponent),
    multi: true
  }]

})

export class FormtrafficComponent implements ControlValueAccessor{
  // @ts-ignore
  private _currentColor: TLColor
  private _colors: TLColor[] = ['red', 'yellow', 'green']
  propagateChange = () => {};
  propagateTouch = () => {};

  constructor() {
  }
  writeValue(color: TLColor): void {
    this.currentColor = color
  }

  get currentColor(){
    // @ts-ignore
    return this._currentColor
  }
  set currentColor(color: TLColor){
    this._currentColor = color
    this.propagateChange()
    this.propagateTouch()
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn
  }

  switchColor(color: any){
  this.currentColor = color
  }

  toggleDown(){
    // @ts-ignore
  this.currentColor = this._colors[(this._colors.indexOf(this.currentColor) + 1) % 3]
  }
  toggleUp(){
    // @ts-ignore
    this.currentColor = this._colors[(this._colors.indexOf(this.currentColor) + 2) % 3]
  }
}
