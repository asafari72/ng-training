import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/config/shared.module';
import {AuthService} from './auth.service';
import {AuthGuard} from './helpers/auth-guard.services';

const modules = [SharedModule]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
