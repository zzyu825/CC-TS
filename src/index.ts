// interface User {
//   readonly id: number,
//   name: string,
//   age: number
// }

type User = {
  readonly id: number,
  name: string,
  age: number,
  readonly arr: readonly string[]
}

let u: User = {
  id: 1,
  name: 'a',
  age: 18,
  arr: ['1']
}

// u.id = 2;
// u.arr = 

// const arr:readonly number[] = [1,2,3];
// const arr: ReadonlyArray<number> = [1,2,3];
// arr.push()