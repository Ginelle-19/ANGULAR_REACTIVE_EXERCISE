import { Component } from '@angular/core';
import { of, Observable, from } from 'rxjs';
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
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

numbers$.subscribe((value) => console.log(value));

numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Dave', age: 40 },
];

const users$ = from(users);

users$.subscribe((users) => console.log(users));

users$
  .pipe(
    map((users) => ({
      id: users.id,
      name: users.name.toUpperCase(),
      age: users.age * 2,
    }))
  )
  .subscribe((users) => console.log(users));
