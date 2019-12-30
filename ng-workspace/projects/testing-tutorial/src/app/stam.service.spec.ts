import { TestBed } from '@angular/core/testing';

import { StamService } from './stam.service';

describe('StamService', () => {

  // configure our testing module
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: []
    })
  });

  it('should be created', () => {
    const service: StamService = TestBed.get(StamService);
    expect(service).toBeTruthy();
  });

  fit('sayHello', () => {
    const service: StamService = TestBed.get(StamService);
    expect(service.sayHello()).toBe('hello world');
  })
});
