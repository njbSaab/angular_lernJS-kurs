import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params) )
  }
  ngOnInit(): void {
  }

}
