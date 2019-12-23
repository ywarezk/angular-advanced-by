import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http : HttpClient) { }

  /**
   * @returns {Observable<Object>}
   */
  searchTasks = (search : string) => {
    return this._http.get(`http://nztodo.herokuapp.com/api/task/?format=json&search=${search}`);
  }
}
