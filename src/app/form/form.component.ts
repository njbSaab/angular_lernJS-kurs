import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
// import {Observable} from "rxjs"
// import  "rxjs/add/observable/of";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  nameControl: FormControl
  fullNameControl: FormGroup
  userListControl: FormGroup
  constructor() {

    // form control
    this.nameControl = new FormControl(
      'Join', [Validators.required, Validators.minLength(5)],
      // [myAsyncValidator]
    )
    this.nameControl.valueChanges.subscribe((value) => console.log(value))
    this.nameControl.statusChanges.subscribe((status) => {
      console.log(this.nameControl.errors)
      console.log(status)
    })

    // form group
    this.fullNameControl = new FormGroup<any>({
      firstName: new FormControl(),
      lastName: new FormControl()
    })

    this.fullNameControl.valueChanges.subscribe((value) =>
    console.log(value)
    )

    this.userListControl = new FormGroup({
      users: new FormArray([
        new FormControl('Alice'),
        new FormControl('Mike'),
        new FormControl('Jain'),
      ])
    })

  }

  ngOnInit(): void {

  }

}

function  myValidator(formControl: FormControl){
  if(formControl.value.length < 3){
    return {myValidator: {message: 'Should be something'}}
  }
  return null
}
// function  myAsyncValidator(formControl: FormControl): Observable<null|any>{
//   if(formControl.value.length < 3){
//     return Observable.of({myValidator: {message: 'Should be something'}})
//   }
//   return Observable.of(null)
// }
