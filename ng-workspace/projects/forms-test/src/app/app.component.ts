import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormControl, FormBuilder, Validators} from '@angular/forms';

class Materials {
  readonly id : any[]
  readonly title: any[]

  constructor(json) {
    this.id = [json.id, [Validators.required]];
    this.title = [json.title, [Validators.minLength(5)]]
  }
}


@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="handleSubmit()" [formGroup]="matForm">
      <mat-table formArrayName="matTable"></mat-table>

      <my-address formGroupName="addressPatient"></my-address>

      <my-address formGroupName="addressDoctor"></my-address>
      <button>submit</button>
    </form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms-test';
  materials = [
    {id: 1, title: 'hello'},
    {id: 2, title: 'world'},
    {id: 3, title: 'foo'},
    {id: 4, title: 'bar'},
  ]

  matForm = new FormGroup({
    matTable : new FormArray([]),
    addressPatient: new FormControl(/* ...*/),
    addressDoctor: new FormControl(/* ...*/),
  });

  constructor(private _formBuilder : FormBuilder) {}

  ngOnInit() {
    // grab the data from server will be in materials

    for (let mat of this.materials) {
      (this.matForm.controls.matTable as FormArray).push(

        // new FormGroup({
        //   id: new FormControl(mat.id),
        //   title: new FormControl(mat.title)
        // })

        // this._formBuilder.group({
        //   id: mat.id,
        //   title: mat.title
        // })

        this._formBuilder.group(new Materials(mat))        
      )
    }
  }

  handleSubmit = () => {
    console.log(this.matForm.value);
  }

}
