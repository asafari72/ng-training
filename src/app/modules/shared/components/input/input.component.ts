import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'tr-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class TRInputComponent{


    @Input()
    label: string = "Label"

    @Input()
    placeholder: string = "placeholder"

    @Input()
    type: "text" | "password" | "color" | "email" = "text"


    @Output() 
    textChange: EventEmitter<any> = new EventEmitter();

    @Output() 
    focus: EventEmitter<any> = new EventEmitter();

    @Output() 
    blur: EventEmitter<any> = new EventEmitter();

    handleInputChange(e) {
        this.textChange.emit(e.target.value)
    }

    handleFocus(){
        this.focus.emit()
    }

    handleBlur(){
        this.blur.emit()
    }
}
