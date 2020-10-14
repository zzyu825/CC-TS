// export const name = 'zzyu';
// export function sum(a:number, b:number) {
//     return a + b;
// }

// 使用默认导出，在导入时没有智能提示
// export default () => {
//     console.log(1)
// }

export = {
    name: 'zzyu',
    sum(a: number, b: number) {
        return a + b;
    }
}