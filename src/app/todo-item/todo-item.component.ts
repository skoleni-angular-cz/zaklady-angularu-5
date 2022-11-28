import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input()
  todoItem!: TodoItem;
  @Output()
  todoCompleted = new EventEmitter<TodoItem>();
  @Output()
  todoRemoved = new EventEmitter<TodoItem>();

  onCompleteButtonClicked() {
    this.todoCompleted.emit(this.todoItem);
  }

  onRemoveButtonClicked() {
    this.todoRemoved.emit(this.todoItem);
  }
}
