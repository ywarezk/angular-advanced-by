
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

of('hello world').pipe(
    map((strHello) => strHello.length)
).subscribe((num : number) => {
    console.log(num);
})