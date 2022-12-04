import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ApiTodoService } from '../api-todo.service';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  const todoServiceSpy = jasmine.createSpyObj(
    'ApiTodoService',
    [
      'getAllTodos',
      'createTodo',
      'updateTodo',
      'deleteTodo'
    ]
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodosComponent
      ],
      providers: [
        {
          provide: ApiTodoService,
          useValue: todoServiceSpy,
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TodosComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should fetch the todos on initialization', async () => {
    const fixture = TestBed.createComponent(TodosComponent);

    fixture.detectChanges();
    await fixture.whenStable();

    expect(todoServiceSpy.getAllTodos).toHaveBeenCalled();
  });

  it('should call api service create and reload data on clicking add todo button', async () => {
    const todoName = 'Hello World';

    const fixture = TestBed.createComponent(TodosComponent);
    const component = fixture.componentInstance;
    component.currentTodoName = todoName;

    component.onAddTodoButtonClick();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(todoServiceSpy.createTodo).toHaveBeenCalledWith(todoName, false);
    expect(todoServiceSpy.getAllTodos).toHaveBeenCalled();
  });

  it('should call api service update and reload data on marking todo as completed', async () => {
    const fixture = TestBed.createComponent(TodosComponent);
    const component = fixture.componentInstance;
    component.todoItems = [
      {
        id: 1,
        title: 'Do this',
        completed: false,
      }
    ];

    const todoToComplete = component.todoItems[0];

    component.onTodoCompleted(todoToComplete);

    fixture.detectChanges();
    await fixture.whenStable();

    expect(todoServiceSpy.updateTodo).toHaveBeenCalledWith({
      id: todoToComplete.id,
      title: todoToComplete.title,
      completed: true,
    });
    expect(todoServiceSpy.getAllTodos).toHaveBeenCalled();
  });

  it('should call api service delete and reload data on clicking delete todo button', async () => {
    const fixture = TestBed.createComponent(TodosComponent);
    const component = fixture.componentInstance;
    component.todoItems = [
      {
        id: 1,
        title: 'Do this',
        completed: false,
      }
    ];

    const todoToDelete = component.todoItems[0];

    component.onTodoRemove(todoToDelete);

    fixture.detectChanges();
    await fixture.whenStable();

    expect(todoServiceSpy.deleteTodo).toHaveBeenCalledWith(todoToDelete);
    expect(todoServiceSpy.getAllTodos).toHaveBeenCalled();
  });

  it('should save what was written to todo name input into currentTodoName', () => {
    const todoName = 'Hello World';

    const fixture = TestBed.createComponent(TodosComponent);
    const component = fixture.componentInstance;

    component.onTodoNameChange(todoName);
    expect(component.currentTodoName).toEqual(todoName);
  });
});
