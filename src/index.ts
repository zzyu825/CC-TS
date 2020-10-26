/**
 * 将两个数组进行混合
 * @param arr1 
 * @param arr2 
 */
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
  if (arr1.length !== arr2.length) {
    throw new Error("两个数组长度不等");
  }
  let result: (T | K)[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}

mixinArray([1, 2, 3], ['a', 'b', 'c']);