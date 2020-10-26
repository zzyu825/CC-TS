import { Dictionary } from "./dictionary";

const dic = new Dictionary<string, number>();

dic.set("a", 1);
dic.set("b", 2);

dic.forEach((k, v) => {
  console.log(`${k}:${v}`);
});

console.log(dic.has('a'));