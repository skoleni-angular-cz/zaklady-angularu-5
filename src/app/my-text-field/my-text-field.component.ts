import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-text-field',
  templateUrl: './my-text-field.component.html',
  styleUrls: ['./my-text-field.component.css'],
})
export class MyTextFieldComponent {
  @Input()
  placeholder: string = '';
  @Output()
  valueChanged = new EventEmitter<string>();

  onInputTextChange($event: Event) {
    const inputValue = ($event.target as HTMLInputElement).value;

    this.valueChanged.emit(inputValue);
  }
}
