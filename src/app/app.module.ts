import { NgModule } from '@angular/core';  // InjectionToken
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './header/user-card/user-card.component';
import { ItemComponent } from './item/item.component';
import { ColoryDirective } from './colory.directive';
import { DelayDirective } from './delay.directive';
import { DinamicItemComponent } from './dinamic-item/dinamic-item.component';
import {UserService} from "./user.service";
import {Myinterceptor} from "./myinterceptor.service";
import {PreloadAllModules, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { ProfailsComponent } from './profails/profails.component';
import { SettingComponent } from './setting/setting.component';
import {AuthGuard} from "./auth.guard";
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminModule} from "./admin/admin.module";
import { FormComponent } from './form/form.component';
import { FormtrafficComponent } from './formtraffic/formtraffic.component';
// import {UserResolveService} from "./user-resolve.service";


// хуки для роутера
// все хуки которые отвечаю за возможность зайти на компонент страницы
// CanActivate/CanActivateChild
// CanDeactivete
// CanLoad

// отвечает за подгрузку данных асинхроно до инициализации стейта
// Resolve


const routes =[
  {path: '', component: HomeComponent},
  {path: 'form', component: FormComponent},

  // {path: 'admin', component: AdminModule},
  //
  // {path: 'login', component: LoginComponent, outlet: 'popup'},
  // {path: 'users', component: UsersComponent, children: [
  //     {path: 'profails', component: ProfailsComponent},
  //     {path: 'setting', component: SettingComponent}
  //   ]},
  // {path: 'user/:userId', component: UserComponent},
  // {path: 'header', component: UserCardComponent},
  // {path: 'author', component: AuthorComponent, canActive:[AuthGuard], resolve: {
  //   // auth: UserResolveService
  //   }}
]

// const API_BASE_URL = new ServicesService<string>('API_BASE_URL')
// подключение токена

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    UserCardComponent,
    ItemComponent,
    ColoryDirective,
    DelayDirective,
    DinamicItemComponent,
    FormComponent,
    FormtrafficComponent,
    // HomeComponent,
    // UsersComponent,
    // UserComponent,
    // ProfailsComponent,
    // SettingComponent,
    // AuthorComponent,
    // LoginComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Myinterceptor,
      multi: true
      // {provide: API_BASE_URL, useValue: 'api.com.ua'}
    },
    AuthGuard,
    // UserResolveService

  ]
})
export class AppModule { }
