import {ComponentFixture, TestBed} from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import {ApiTodoService} from "../api-todo.service";

describe('TodosComponent', () => {
  let fixture: ComponentFixture<any>;
  let component: TodosComponent;
  let todoServiceSpy: any;

  beforeEach(async () => {
    todoServiceSpy = jasmine.createSpyObj(
      'ApiTodoService',
      [
        'getAllTodos',
        'createTodo',
        'updateTodo',
        'deleteTodo',
      ]
    );

    await TestBed.configureTestingModule({
      declarations: [
        TodosComponent
      ],
    }).compileComponents();
    TestBed.overrideProvider(
      ApiTodoService,
      {
        useValue: todoServiceSpy
      }
    );
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos after init', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    expect(todoServiceSpy.getAllTodos).toHaveBeenCalled();
  });

  it('should call create API and then getAll API after valid todo name specified', async () => {
    const todoName = 'Foo';
    component.currentTodoName = todoName;

    component.onAddTodoButtonClick();

    await fixture.whenStable();

    expect(todoServiceSpy.createTodo).toHaveBeenCalledOnceWith(todoName, false);
    expect(todoServiceSpy.getAllTodos).toHaveBeenCalled();
  });

  it('should NOT call create API and then getAll API after invalid todo name specified', async () => {
    const todoName = '';
    component.currentTodoName = todoName;

    component.onAddTodoButtonClick();

    await fixture.whenStable();

    expect(todoServiceSpy.createTodo).not.toHaveBeenCalledOnceWith(todoName, false);
    expect(todoServiceSpy.getAllTodos).not.toHaveBeenCalled();
  });
});
