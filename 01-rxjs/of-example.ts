

// of

import {of, Observable} from 'rxjs';

const dataStream : Observable<number[]> = of([1,2,3]);

dataStream.subscribe((arr) => {
    console.log(JSON.stringify(arr));
})

