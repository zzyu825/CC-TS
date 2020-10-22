class User {
  age: number
  gender: "男" | "女" = "男"
  pid?: string
  readonly id: number

  private publishNumber: number = 3 // 每天可以发布的文章数量
  private curNumber: number = 0 // 当前可以发布的文章数量

  constructor(public name: string, age: number) {
    this.id = Math.random();
    this.age = age
  }

  publish(title: string) {
    if (this.curNumber < this.publishNumber) {
      console.log("发布一篇文章：" + title);
      this.curNumber++;
    } else {
      console.log("你今日发布的文章数量已达上限")
    }
  }
}

const u = new User('a', 18);