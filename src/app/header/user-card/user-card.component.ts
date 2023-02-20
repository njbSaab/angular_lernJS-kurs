import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit{
  @Input() user:any;
  @Input() users:any;
  @Output() userSelectd: EventEmitter<any> = new EventEmitter

  constructor() {
  }
  ngOnInit(): void {
  }

  selectUser(){
    this.userSelectd.emit()
  }

}
