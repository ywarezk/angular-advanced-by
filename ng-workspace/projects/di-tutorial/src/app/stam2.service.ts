import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StamService2 {
  constructor(private _http : HttpClient, stamString : string) { }
}
