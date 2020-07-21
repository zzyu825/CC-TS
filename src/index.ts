let name: string | undefined; // 联合类型

function fn(): void { // 函数无任何返回值
    if (typeof name === 'string') { // 类型保护
        name.toUpperCase();
    }
}

function throwError(msg: string): never { // 函数永远不会结束
    throw new Error(msg);
}

let gender: '男' | '女'; // 字面量类型
gender = '男';

let arr: []; // arr永远只能取值为一个空数组
arr = [];

let user: {
    name: string
    age: number
}
user = {
    name: 'abc',
    age: 12
}

let arr1: [string, number]; // 元组类型
arr1 = ['1', 1];

let a: any = 1;