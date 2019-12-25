"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// promise can send one pulse
// observable can send infiite pulses
// which states are in observable
// cold - async function did not even run
// hot - active
// completed - data stream is closed
// observable is lazy
// promise is not
var myIntervalObservable = new rxjs_1.Observable(function (observer) {
    console.log('will run on every subscribe');
    var counter = 0;
    setInterval(function () {
        counter++;
        if (counter < 5) {
            observer.next('hello');
        }
        else {
            // observer.complete();    
            observer.error(new Error('hello'));
        }
    }, 1000);
});
var sub = myIntervalObservable.subscribe(function (msg) {
    console.log(msg);
}, function (err) {
    console.log(err.message);
}, function completed() {
});
myIntervalObservable.subscribe(function (msg) {
    console.log(msg);
});
setTimeout(function () {
    sub.unsubscribe();
}, 3000);
// subject
var myIntervalSubject = new rxjs_1.Subject();
setInterval(function () {
    myIntervalSubject.next('hello world');
}, 1000);
myIntervalSubject.subscribe(function (msg) {
});
// if (counter > 5) {
//     myIntervalSubject.complete()
// }
// -------+--------+------------+
var myInitialSubject = new rxjs_1.BehaviorSubject(0);
myInitialSubject.next(1000);
// myInitialSubject.value
myInitialSubject.subscribe(function () {
});
