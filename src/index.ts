class User {
  gender: "男" | "女" = "男"
  pid?: string
  readonly id: number

  private _publishNumber: number = 3 // 每天可以发布的文章数量
  private _curNumber: number = 0 // 当前可以发布的文章数量

  constructor(public name: string, private _age: number) {
    this.id = Math.random();
  }

  // setAge() {}
  // getAge() {}

  set age(value: number) {
    // 条件控制
    this._age = value
  }

  get age() {
    return Math.floor(this._age)
  }

  publish(title: string) {
    if (this._curNumber < this._publishNumber) {
      console.log("发布一篇文章：" + title);
      this._curNumber++;
    } else {
      console.log("你今日发布的文章数量已达上限")
    }
  }
}

const u = new User('a', 18);