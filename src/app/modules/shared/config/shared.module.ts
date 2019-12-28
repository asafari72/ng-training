import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from '../pages/login/login.page';
import { MainPage } from '../pages/main/Main.page';
import { TRInputModule } from '../components/input/input.module';
import { TRButtonModule} from '../components/button/button.module';

const componets = [LoginPage,MainPage]
const modules = [TRInputModule,TRButtonModule]

@NgModule({
    declarations: [...componets],
    imports: [CommonModule, ...modules],
    exports: [...modules],
    providers: [],
})
export class SharedModule { }