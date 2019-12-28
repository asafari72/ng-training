import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLogin: boolean = false;

  userApi = {
    username: "ali",
    password: "1234"
  }

  checkUser(user) {
     if (this.userApi.username === user.username && this.userApi.password === user.password) {
      this.isLogin = true
    }
  }

  loggedIn() {
    return this.isLogin;
  }
}


