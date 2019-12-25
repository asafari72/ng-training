import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRButtonComponent } from './button.component';

@NgModule({
    declarations: [TRButtonComponent],
    imports: [ CommonModule ],
    exports: [TRButtonComponent],
    providers: [],
})
export class TRButtonModule {}