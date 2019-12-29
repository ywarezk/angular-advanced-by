import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServiceConfig } from './url.token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient, @Optional() @Inject(UserServiceConfig) private _config) { }

  login = (email, password) => {
    return this._http.post(this._config.url, {email, password});
  }
}
