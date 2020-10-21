interface Duck {
  sound: "嘎嘎嘎",
  swin(): void
}

let person = {
  name: "伪装成鸭子的人",
  age: 11,
  sound: "嘎嘎嘎" as "嘎嘎嘎",
  swin() {
    console.log(this.name + "正在游泳，并发出了" + this.sound +  "的声音")
  }
}

// let duck: Duck = person;
// let duck: Duck = {
//   sound: "嘎嘎嘎" as "嘎嘎嘎",
//   swin() {
//     console.log(this.name + "正在游泳，并发出了" + this.sound +  "的声音")
//   }
// }

// interface User {
//   name?: string
//   age: number
// }
// let u: User = {
//   nema: 'a',
//   age: 18
// }