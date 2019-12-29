import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private _firstName : string = '...';
  private _firstName : BehaviorSubject<string> = new BehaviorSubject('EliShava');

  constructor() { }

  setFirstName = (newName : string) => {
    this._firstName.next(newName);
  }

  getFirstName = () => {
    return this._firstName;
  }
}
