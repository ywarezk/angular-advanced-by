import { Component, OnInit, NgZone, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import {interval, Observable, BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-grand2',
  template: `
    <p (click)="title='world'">
      grand2 works! {{title}} {{messageObj.msg}} {{title$ | async}}
    </p>
    {{ sayHello() }}
  `,
  styleUrls: ['./grand2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Grand2Component implements OnInit {
  title = 'hello';
  title$ : BehaviorSubject<string> = new BehaviorSubject('hello');
  counter = 0;
  // counter$ : Observable<number>;

  @Input('message')
  messageObj : any;

  constructor(private _zone : NgZone, private _cd : ChangeDetectorRef) { }

  ngOnInit() {
    // interval(1000).subscribe((counter : number) => {
    //   // this.title = 'world';
    //   this.counter = counter;
    // })

    // -----+------+-----+
    // this.counter$ = interval(1000);

    // setTimeout(() => {
    //   console.log('timer in grand2');
    //   this.title = 'world';
    //   // this._cd.detectChanges();
    //   this._cd.markForCheck();
    // }, 1000);

    // this._zone.runOutsideAngular(() => {
    //   let counter = 0;
    //   setInterval(() => {
    //     counter++;
    //     if (counter === 20000) {
    //       this._zone.run(() => {
    //         // something that trigger cd  
    //       })
    //     }
    //   }, 20);
    // })
    
    setTimeout(() => {
      this.title$.next('world');
    }, 1000);

  }

  sayHello = () => {
    console.log('cd Grand2Component');
  }

}
