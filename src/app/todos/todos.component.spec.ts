import { TestBed } from '@angular/core/testing';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodosComponent
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TodosComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
