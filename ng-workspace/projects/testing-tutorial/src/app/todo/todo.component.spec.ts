import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let fakeHttpClient;


  beforeEach(async(() => {
    // {get: Spy}
    fakeHttpClient = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      providers: [
        { provide: HttpClient, useValue: fakeHttpClient}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  fit('if server returns 3 items then i have 3 lis', () => {
    fakeHttpClient.get.and.returnValue(of([
      {id: 1, title: 'hello'},
      {id: 1, title: 'hello'},
      {id: 1, title: 'hello'},
    ]))
    fixture.detectChanges();
    const lis = fixture.debugElement.queryAll(By.css('li'));
    expect(lis.length).toBe(3)
  })
});
