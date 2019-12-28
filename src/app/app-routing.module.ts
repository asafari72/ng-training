import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPage } from './modules/shared/pages/login/login.page';
import { MainPage } from './modules/shared/pages/main/Main.page';
import {AuthGuard} from './helpers/auth-guard.services';



const routes: Routes = [

  { path: '', component: LoginPage },
  { path: 'login', component: LoginPage },
  { path: "main", component: MainPage,canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
