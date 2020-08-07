enum Permission {
    Read = 1, // 0001
    Write = 2, // 0010
    Create = 4, // 0100
    Delete = 8 // 1000
}

// 1.如何组合权限
// 使用或运算
let p = Permission.Read | Permission.Write;

// 2.如何判断是否拥有某个权限
// 0011且0010
function hasPermission(target: Permission, per: Permission) {
    return (target & per) === per;
}
// 判断变量p是否拥有可读权限
console.log(hasPermission(p, Permission.Delete));

// 3.如何删除某个权限
// 0011异或0010
p = p ^ Permission.Write;
console.log(hasPermission(p, Permission.Write));