// 回调函数：判断数组中的某一项是否满足条件
// type callback<T> = (n: T, i: number) => boolean;
// interface callback<T> {
//   (n: T, i: number): boolean
// };

// import { ArrayHelper } from "./ArrayHelper";

// function filter<T>(arr: T[], callback: callback<T>): T[] {
//   return arr.filter((item, i) => callback(item, i));
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(filter(arr, n => n % 2 !== 0));

// const helper = new ArrayHelper([1, 2, 3]);