import {throwError, Observable, of} from 'rxjs';

let dataStream : Observable<any> = throwError(new Error('something happened'));
// dataStream = of([1,2,3]);



dataStream.subscribe(
    () => {

    },

    (err) => {
        console.log(err.message);
    }
);

