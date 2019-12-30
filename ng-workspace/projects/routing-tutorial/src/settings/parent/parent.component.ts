import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  template: `
  <ng-template #outlet>
    <router-outlet></router-outlet>
  </ng-template>
  <mat-tab-group (selectedIndexChange)="handleChangeTab($event)">
    <mat-tab label="User"> <ng-container *ngTemplateOutlet="outlet"></ng-container> </mat-tab>
    <mat-tab label="Dashboard"> <ng-container *ngTemplateOutlet="outlet"></ng-container> </mat-tab>    
  </mat-tab-group>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private _router : Router, public activated : ActivatedRoute) { }

  ngOnInit() {
  }

  handleChangeTab = (index : number) => {
    switch(index) {
      case 0:
        this._router.navigateByUrl('/settings/user');
        break;
      case 1:
        this._router.navigateByUrl('/settings/dashboard');
        break;
    }
  }

}
