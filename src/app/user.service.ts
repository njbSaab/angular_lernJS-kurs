import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    {name:"nj", secondName: "saab", age: "30"},
    {name:"anton", secondName: "chehonte", age: "29"},
    {name:"kostya", secondName: "sisadmim", age: "28"},
  ];
  constructor(
    // модуль http
    private _http: HttpClient) { }

  public getAll(){
    return this._http.get('https://jsonplaceholder.typicode.com/users')
    // return this.users
  }

  //удаление
  public remove(name : string){
    return this.users = this.users.filter(user => user.name !== name)
  }

  //добавление
  public add(name: string,secondName: string, age: string){
    this.users.push({name,secondName,age})
  }

}
