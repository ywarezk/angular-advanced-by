import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTextComponent } from './toggle-text.component';
import { By } from '@angular/platform-browser';

describe('ToggleTextComponent', () => {
  let component: ToggleTextComponent;
  let fixture: ComponentFixture<ToggleTextComponent>;

  // configure the testing module
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('clicking the button will toggle the text', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const p = fixture.debugElement.query(By.css('p'));
    expect(p).toBeNull();
  })
});
