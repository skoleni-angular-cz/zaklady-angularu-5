import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {
  @Input()
  label: string = '';
  @Output()
  buttonClicked = new EventEmitter<void>();

  onButtonClick($event: MouseEvent) {
    this.buttonClicked.emit();
  }
}
