import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // data = {message : 'initial message'}

  data$ : BehaviorSubject<any> = new BehaviorSubject({ message : 'initial message'})

  constructor() { }
}
