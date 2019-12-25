import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'tr-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class TRButtonComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    @Input()
    text:string="";

    @Input()
    flat:boolean;

    @Input()
    hover:boolean;
    
    @Input()
    color:string="";

    @Output()
    handleClick:EventEmitter<any>=new EventEmitter();

    buttonClick(){
        this.handleClick.emit("success login");
    }
}
