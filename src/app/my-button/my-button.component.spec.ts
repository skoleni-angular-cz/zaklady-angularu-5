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

  it('should render a label based on its @Input label parameter', async () => {
    const testLabel = 'Hello World';
    const fixture = TestBed.createComponent(MyButtonComponent);
    const component = fixture.componentInstance;
    const hostElement = fixture.elementRef.nativeElement as HTMLElement;

    component.label = testLabel;

    fixture.detectChanges();
    await fixture.whenStable();

    const buttonEl = hostElement.querySelector('button');

    expect(buttonEl?.innerHTML?.trim()).toEqual(testLabel);
  });

  it('should emit to @Output buttonClicked when the button is clicked', async () => {
    const fixture = TestBed.createComponent(MyButtonComponent);
    const component = fixture.componentInstance;
    const hostElement = fixture.elementRef.nativeElement as HTMLElement;
    spyOn(component.buttonClicked, 'emit');

    const buttonEl = hostElement.querySelector('button');
    buttonEl?.click();

    expect(component.buttonClicked.emit).toHaveBeenCalled();
  });
});
