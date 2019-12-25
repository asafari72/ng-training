import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from '../pages/login/login.page';
import { TRInputModule } from '../components/input/input.module';

const componets = [LoginPage]
const modules = [TRInputModule]

@NgModule({
    declarations: [...componets],
    imports: [CommonModule, ...modules],
    exports: [...modules],
    providers: [],
})
export class SharedModule { }