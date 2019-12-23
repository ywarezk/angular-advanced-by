import {Observable, Subscription, Subject, BehaviorSubject, ReplaySubject} from 'rxjs';



// promise can send one pulse
// observable can send infiite pulses

// which states are in observable
// cold - async function did not even run
// hot - active
// completed - data stream is closed

// observable is lazy
// promise is not

const myIntervalObservable : Observable<string> = new Observable((observer) => {
    console.log('will run on every subscribe');
    let counter = 0;
    setInterval(() => {
        
        counter++;
        if (counter < 5) {
            observer.next('hello');
        } else {
            // observer.complete();    
            observer.error(new Error('hello'))
        }
    }, 1000)
});

const sub : Subscription = myIntervalObservable.subscribe(
    (msg : string) => {
        console.log(msg);
    },
    (err) => {
        console.log(err.message);
    },
    function completed() {
        
    }
)

myIntervalObservable.subscribe(
    (msg : string) => {
        console.log(msg);
    }
)

setTimeout(() => {
    sub.unsubscribe();
}, 3000);

// subject



const myIntervalSubject : Subject<string> = new Subject();


setInterval(() => {
    myIntervalSubject.next('hello world');
}, 1000);

myIntervalSubject.subscribe((msg: string) => {

});

// if (counter > 5) {
//     myIntervalSubject.complete()
// }


// -------+--------+------------+


const myInitialSubject = new BehaviorSubject(0);

myInitialSubject.next(1000);

// myInitialSubject.value

myInitialSubject.subscribe(() => {

});



