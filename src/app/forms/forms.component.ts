import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{
  controlName : FormControl
  constructor(private fb: FormControl) {
    this.controlName = new FormControl('john')
  }
  ngOnInit(): void {

  }

}
