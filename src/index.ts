// enum Gender {
//     male = '帅哥',
//     female = '美女'
// }

// let gender: Gender;

// gender = Gender.male;
// gender = Gender.female;

// function printGenders() {
//     const vals = Object.values(Gender);
//     vals.forEach(v => console.log(v));
// }

// printGenders();

// function searchUsers(g: Gender) {}

// enum Level {
//     level1 = 1,
//     level2,
//     level3
// }
enum Level {
    level1,
    level2,
    level3
}

let l: Level = Level.level1;
l = Level.level2;
console.log(l);