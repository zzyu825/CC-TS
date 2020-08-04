type Gender = "男" | "女";
type User = {
    name: String,
    gender: Gender,
    age: Number
}

let u:User;
u = {
    name: 'zzyu',
    gender: '男',
    age: 18
}

function getUsers(g:Gender):User[] {
    return [];
}
getUsers("男");