import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StamService {

  constructor() { }

  sayHello = () => {
    return 'hello world';
  }
}
