function take<T = number>(arr: T[], n: number): T[] {
  if (n >= arr.length) {
    return arr;
  }
  const newArr: T[] = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// const newArr = take([2, 3, 4, 5], 2);
// newArr.forEach(item => {

// })

// const newArr = take<number>([2, 3, 4, 5], 2);
const newArr = take([2, 3, 4, 5], 2);