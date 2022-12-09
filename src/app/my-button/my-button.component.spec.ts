import {ComponentFixture, TestBed} from '@angular/core/testing';
import { MyButtonComponent } from './my-button.component';

describe('MyButtonComponent', () => {
  let fixture: ComponentFixture<any>;
  let component: MyButtonComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MyButtonComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(MyButtonComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders button label from @Input label', () => {
    const componentLabel = 'test';
    component.label = componentLabel;

    fixture.detectChanges();

    expect(element.querySelector('button')!.innerHTML.trim()).toEqual(componentLabel)
  });

  it('emit to @Output buttonClicked if the button is clicked', () => {
    spyOn(component.buttonClicked, 'emit');

    element.querySelector('button')!.click();

    expect(component.buttonClicked.emit).toHaveBeenCalled();
  });
});
