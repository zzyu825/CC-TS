// interface User {
//   name: string,
//   age: number,
//   sayHello(): void
// }

import { type } from "os"

// type User = {
//   name: string,
//   age: number,
//   sayHello: () => void
// }

// let u: User = {
//   name: 'a',
//   age: 18,
//   sayHello() {
//     console.log('1');
//   }
// }

// type Condition = (n: number) => boolean
// type Condition = { // 界定符
//   (n: number): boolean
// }

// interface Condition {
//   (n: number): boolean
// }

// function sum(numbers: number[], callback: Condition) {
//   let s = 0;
//   numbers.forEach(n => {
//     if (callback(n)) {
//       s += n;
//     }
//   });
//   return s;
// }

// const result = sum([1,2,3,4,5], n => n % 2 !== 0);
// console.log(result);

// interface A {
//   T1: string
// }

// interface B {
//   T2: number
// }

// interface C extends A, B {
//   T3: boolean
// }

// type A = {
//   T1: string
// }

// type B = {
//   T2: number
// }

// type C = {
//   T1: number,
//   T3: boolean
// } & A & B

// let u: C = {
//   T1: '1',
//   T2: 2,
//   T3: true
// }