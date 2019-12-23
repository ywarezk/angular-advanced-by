import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy, EventEmitter } from '@angular/core';
import {fromEvent, of, throwError, concat, from, Subscription, Observable} from 'rxjs';
import {map, debounceTime, mergeMap, distinctUntilChanged, take, catchError} from 'rxjs/operators';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-autocomplete',
  template: `
    <form>
      <!-- <input type="search" placeholder="search cities" name="search" [(ngModel)]="search" /> -->
      <!-- <input type="search" placeholder="search cities" name="search" (input)="handleChange($event)" /> -->
      <input type="search" placeholder="search cities" name="search" #search />
    </form>
    <ul>
      <li *ngFor="let task of (tasks$ | async)">
        {{task.title}}
      </li>
    </ul>

  `,
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
  @ViewChild('search', {static: true})
  searchInput : ElementRef;

  private _sub : Subscription;

  tasks = [];

  tasks$ : Observable<any>

  // set search(value : string) {

  // }

  // get search() {

  // }

  // handleChange = (event) => {
  //   const inputSearch = event.target.value;
  // }

  constructor(private _taskService : TaskService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.searchInput.addEventListener('input', () => {

    // })
    this.tasks$ =  fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map((event) => ((<any>event).target).value),      
      // catchError((err) => of('hello')),
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap((searchStr) => this._taskService.searchTasks(searchStr))
    )
    // .subscribe((tasks) => {
    //   this.tasks = tasks as any;
    // })

    // fromEvent(this.searchInput.nativeElement, 'input').pipe(
    //   take(1)
    // ).toPromise();

    // of('hello').subscribe(() => )

  }

  // ngOnDestroy() {
  //   this._sub.unsubscribe();
  // }
}



// class Person {
//   firstName = 'yariv';
//   lastName = 'katz';

//   get fullName() : string {
//     return this.firstName + this.lastName;
//   }

//   set fullName(value : string)  {
//     this.firstName = value.split(' ')[0];
//     this.lastName = value.split(' ')[1];
//   } 
// }

// const person = new Person();
// console.log(person.fullName);
// person.fullName = 'yariv katz';