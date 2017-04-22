import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CounterButtonComponent } from './counter-button.component';

describe('CounterButtonComponent', () => {
  let component: CounterButtonComponent;
  let fixture: ComponentFixture<CounterButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule.forRoot()],
      declarations: [ 
        CounterButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a counter set to 0', () => {
    const fixture = TestBed.createComponent(CounterButtonComponent);
    const counterButtonComponent = fixture.debugElement.componentInstance;
    expect(counterButtonComponent.counter).toEqual(0);
  });

  it('should have a showAlert set to false', () => {
    const fixture = TestBed.createComponent(CounterButtonComponent);
    const counterButtonComponent = fixture.debugElement.componentInstance;
    expect(counterButtonComponent.showAlert).toBeFalsy();
  });

  it('should increment the counter on the click', () => {
    const fixture = TestBed.createComponent(CounterButtonComponent);
    const counterButtonComponent = fixture.debugElement.componentInstance;
    counterButtonComponent.onClickMe();
    expect(counterButtonComponent.counter).toEqual(1);
    counterButtonComponent.onClickMe();
    expect(counterButtonComponent.counter).toEqual(2);
  });

  it('should render a button and a counter', async(() => {
    const fixture = TestBed.createComponent(CounterButtonComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Click me!');
    expect(compiled.querySelector('[id=counter]').textContent).toContain('0');
  }));

  it('should refresh the counter when the button is clicked', async(() => {
    const fixture = TestBed.createComponent(CounterButtonComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const counterButtonComponent = fixture.debugElement.componentInstance;
    counterButtonComponent.onClickMe();
    fixture.detectChanges();
    expect(compiled.querySelector('[id=counter]').textContent).toContain('1');
    counterButtonComponent.onClickMe();
    fixture.detectChanges();
    expect(compiled.querySelector('[id=counter]').textContent).toContain('2');    
  }));

  it('should show/hide the alert when the button is clicked', async(() => {
    const fixture = TestBed.createComponent(CounterButtonComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const counterButtonComponent = fixture.debugElement.componentInstance;
    expect(compiled.querySelector('ngb-alert')).toBeNull;
    counterButtonComponent.onClickMe();
    fixture.detectChanges();
    expect(compiled.querySelector('ngb-alert')).toBeDefined;
    counterButtonComponent.onClickMe();
    fixture.detectChanges();
    expect(compiled.querySelector('ngb-alert')).toBeNull;    
  }));
});
