import { TestBed } from '@angular/core/testing';
import { MyButtonComponent } from './my-button.component';

describe('MyButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MyButtonComponent
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(MyButtonComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
