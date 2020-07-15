function isOdd(n: number) {
    return n % 2 === 0;
}

// let arr: number[];
// let arr = [1, 2, 3];
let arr: Array<number>;

// let obj: object;
// obj = '123';

function printValues(obj: object) {
    const vals = Object.values(obj);
    vals.forEach(v => console.log(v));
}
printValues({
    name: 'a',
    age: 1
});

// let n: string = undefined;
// n.toUpperCase();