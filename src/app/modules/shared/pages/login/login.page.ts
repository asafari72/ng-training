import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tr-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
    ngOnInit(): void { }
    
    username:string;
    password:string;

    handleClickButton(e){
        alert("username is a :"+this.username+"");
        alert("password is a :"+this.password+"");
    }

    handleUsername(e){
        this.username=e.target.value;
    }

    handlePassword(e){
        this.password=e.target.value;
    }
}
