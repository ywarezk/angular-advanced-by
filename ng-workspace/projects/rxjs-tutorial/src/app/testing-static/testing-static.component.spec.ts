import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingStaticComponent } from './testing-static.component';

describe('TestingStaticComponent', () => {
  let component: TestingStaticComponent;
  let fixture: ComponentFixture<TestingStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
