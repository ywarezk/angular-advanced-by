import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message : string = 'hello';

  anotherMessage$ : Subject<string> = new Subject();
  
  constructor() { }
}
