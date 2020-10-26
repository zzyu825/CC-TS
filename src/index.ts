interface hasNameProperty {
  name: string
}

/**
 * 将某个对象的name属性对应的值中，每个单词的首字母大写，然后返回该对象
 * @param obj 
 */
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
  obj.name = obj.name.split(" ").map(s => s[0].toUpperCase() + s.substr(1)).join(" ");
  return obj;
}

const o = {
  name: "hello ts",
  age: 10
}
nameToUpperCase(o);