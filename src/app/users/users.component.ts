import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Event, NavigationStart} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  constructor(private route: ActivatedRoute,
              private _router: Router
  ) {
    // this.route.queryParams.subscribe(params => console.log(params))

    this._router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
        console.log(event)
      }
    })
  }
  ngOnInit(): void {

  }
  goToUser(userId: number){
    // this._router.navigate(['user', userId])
    this._router.navigateByUrl('user/' + userId, {skipLocationChange: true})
  }

}
