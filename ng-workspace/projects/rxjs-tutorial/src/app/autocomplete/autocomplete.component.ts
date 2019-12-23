import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  template: `
    <form>
      <!-- <input type="search" placeholder="search cities" name="search" [(ngModel)]="search" /> -->
      <!-- <input type="search" placeholder="search cities" name="search" (input)="handleChange($event)" /> -->
    </form>
    <ul>
      <li *ngFor="..."></li>
    </ul>

  `,
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  // set search(value : string) {

  // }

  // get search() {

  // }

  handleChange = (event) => {
    const inputSearch = event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

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