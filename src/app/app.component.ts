import { Component } from '@angular/core';
import { of, Observable, from, filter } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Define Numbers
  numbers$: Observable<number>;
  constructor() {}
}
//create array
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//subscribing to the observable
numbers$.subscribe((value) => console.log(value));
//manipulate data using map
numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));
//create an observable with an array of user options
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Dave', age: 40 },
];
//using from operator
const users$ = from(users);
users$.subscribe((users) => console.log(users));
//use rxjs to multiply age and display ALL CAPS
users$
  .pipe(
    map((users) => ({
      id: users.id,
      name: users.name.toUpperCase(),
      age: users.age * 2,
    }))
  )
  .subscribe((users) => console.log(users));
//LAB 10 EXERCISE
console.log('\n\nEven:');
numbers$
  .pipe(filter((numbers) => numbers % 2 == 0))
  .subscribe((numbers) => console.log(numbers));

console.log('\n\nOdd:');
numbers$
  .pipe(filter((numbers) => numbers % 2 != 0))
  .subscribe((numbers) => console.log(numbers));

console.log('\n\nOdd * 2:');
numbers$
  .pipe(filter((numbers) => numbers % 2 == 0))
  .subscribe((numbers) => console.log(`${numbers} = ${numbers * 2}`));
