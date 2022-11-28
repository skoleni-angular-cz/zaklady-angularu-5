import { Injectable } from '@angular/core';
import { deleteData, postData, putData } from './http-helpers';
import { TodoItem } from './todo.model';

@Injectable({ providedIn: 'root' })
export class ApiTodoService {
  async getAllTodos(): Promise<TodoItem[]> {
    return (await fetch('http://localhost:3000/todos')).json();
  }

  async createTodo(title: string, completed: boolean): Promise<TodoItem> {
    return (
      await postData('http://localhost:3000/todos', {
        title: title,
        completed: completed,
      })
    ).json();
  }

  async updateTodo(todo: TodoItem): Promise<TodoItem> {
    return (
      await putData(`http://localhost:3000/todos/${todo.id}`, {
        title: todo.title,
        completed: todo.completed,
      })
    ).json();
  }

  async deleteTodo(todo: TodoItem): Promise<void> {
    return (
      await deleteData(`http://localhost:3000/todos/${todo.id}`)
    ).json();
  }
}
