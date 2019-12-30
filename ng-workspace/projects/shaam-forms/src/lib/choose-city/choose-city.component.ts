import { Component, OnInit, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, mergeMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class City {
  id: number;
  title: string;
}

// 
// <lib-choose-city [(ngModel)]="city" >
@Component({
  selector: 'lib-choose-city',
  template: `
    <input type="search" [formControl]="searchControl" (focus)="activateTouched()" />
    <ul *ngFor="let city of (searchResults$ | async)">
      <li (click)="citySelected(city)">
        {{city.title}}
      </li>
    </ul>
  `,
  styleUrls: ['./choose-city.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => ChooseCityComponent)}
  ]
})
export class ChooseCityComponent implements OnInit, ControlValueAccessor {
  @Input()
  cityUrl = 'https://nztodo.herokuapp.com/api/task/?format=json';

  searchControl = new FormControl('');

  searchResults$ : Observable<any>;

  // the chosen city
  private _value : City = null;
  private _changeCb : any;
  private _touchedCb : any;

  constructor(private _http : HttpClient) { }

  ngOnInit() {
    this.searchResults$ = this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap((search : string) => this._http.get(`${this.cityUrl}&search=${search}`))
    )
  }

  /**
   * gives the component a first value to initiate
   * @param obj 
   */
  writeValue(city: City): void{
    this._value = city;
    if (city) {
      this.searchControl.setValue(city.title);
    }
  }

  registerOnChange(fn: any): void {
    this._changeCb = fn;
  }

  citySelected = (city : City) => {
    this._value = city;
    this._changeCb(this._value);
  }

  registerOnTouched(fn: any): void {
    this._touchedCb = fn;
  }

  activateTouched = () => {
    this._touchedCb();
  }

}
