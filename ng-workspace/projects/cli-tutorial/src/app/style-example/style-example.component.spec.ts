import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleExampleComponent } from './style-example.component';

describe('StyleExampleComponent', () => {
  let component: StyleExampleComponent;
  let fixture: ComponentFixture<StyleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
