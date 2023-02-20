import {Component, createComponent, OnInit, ViewContainerRef} from '@angular/core';
import {DinamicItemComponent} from "./dinamic-item/dinamic-item.component";
import {UserService} from "./user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ang_kurs-screencast';
  userId = 15
  public myClass = 'red'
  public myWidth = 30
  public myColor = 'red'
  public isShow = true
  public selectUser: any;
  public users:any

  trsfficControl: FormControl
  public user = {
    name: "nJ",
    secondName: "Saab"
  }
  constructor(
    //interceptor
    _http: HttpClient,

    // service
    private _userService : UserService,

    // dynemic component
    private viewContainerRef: ViewContainerRef,

    //форма

    ){

    //форма
    this.trsfficControl = new FormControl()

    //interceptor
    _http.get('http://api.github.com/search/users').subscribe(results =>{
      console.log(results)
    })
    }

  changeColor(color: string){
    this.myColor = color
  }

  ngOnInit(): void {
    //dinamic component
    setTimeout(()=>{
      const component = this.viewContainerRef.createComponent(DinamicItemComponent)
    },6000);

    //service
    this.users = this._userService.getAll().subscribe((users:any) => this.users = users)
  }

  //удаление юзера в сервисе
  removeUser(name: string){
    this._userService.remove(name)
    //обновить список юзеров
    this.users = this._userService.getAll()

  }

  //добавление юзера в сервисе
  addUser(name: string, secondName: string,age: string){
    if(!name || !secondName || !age){
      return;
    }

    this._userService.add(name,secondName,age)
    //обновить список юзеров
    this.users = this._userService.getAll()
  }
}
