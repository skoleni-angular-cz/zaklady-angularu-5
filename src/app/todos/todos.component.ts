import { Component, OnInit } from '@angular/core';
import { ApiTodoService } from '../api-todo.service';
import { TodoItem } from '../todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoItems: TodoItem[] = [];

  currentTodoName: string = '';

  constructor(private apiTodoService: ApiTodoService) {}

  async ngOnInit() {
    await this.loadTodos();
  }

  onTodoNameChange(todoName: string) {
    this.currentTodoName = todoName;
  }

  async onAddTodoButtonClick() {
    if (this.currentTodoName !== '') {
      await this.apiTodoService.createTodo(this.currentTodoName, false);
      await this.loadTodos();
    }
  }

  async onTodoCompleted(todoItem: TodoItem) {
    await this.apiTodoService.updateTodo({
      id: todoItem.id,
      title: todoItem.title,
      completed: true,
    });
    await this.loadTodos();
  }

  async onTodoRemove(todoItem: TodoItem) {
    await this.apiTodoService.deleteTodo(todoItem);
    await this.loadTodos();
  }

  private async loadTodos() {
    this.todoItems = await this.apiTodoService.getAllTodos();
  }
}
