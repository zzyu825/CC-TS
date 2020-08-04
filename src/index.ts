/**
 * 得到a*b的结果
 * @param a 
 * @param b 
 */
function combine(a:number, b:number):number;

/**
 * 得到a+b的结果
 * @param a 
 * @param b 
 */
function combine(a:string, b:string):string;

function combine(a:number | string, b:number | string):number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('a和b必须是相同的类型');
}
// combine(1, 2);

// function sum(a:number, b:number, c?:number) {
//     if (c) {
//         return a + b + c;
//     } else {
//         return a + b;
//     }
// }
function sum(a:number, b:number, c:number = 0) {
    return a + b + c;
}
sum(3,4);