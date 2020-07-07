function getUserName() {
    if (Math.random() < 0.5) {
        return 'zheng zhi yu'
    }
    return 404;
}

let myname = getUsername(); // 得到的不一定就是字符串
// 不敢报错，万一其他地方有mynema变量
mynema = myname.split('')
    .filter(it => it)
    .map(it => it[0].touppercase() + subStr(1))
    .join(" ");

{/* <MyComponent nema="" /> */}

// const obj = undefined;
// console.log(obj.name);

let width = 500;
// ...
width = '500px';
// ...
// document.getElementById('xxx').style.width = ???