import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';



@Component({
    selector: 'tr-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage {

    user = {
        username: '',
        password: ''
    }

    constructor(private auth: AuthService, private router: Router) { }

    onSignin(e) {
        this.auth.checkUser(this.user);
        this.router.navigate(['main']);
    }

    handleUsername({ target: { value } }) {
        this.user.username = value;
    }

    handlePassword({ target: { value } }) {
        this.user.password = value;
    }
}
