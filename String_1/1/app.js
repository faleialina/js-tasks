//Найти максимальное число из 2 введенных (4 способа)
const a = +prompt();
const b = +prompt();
// 1 способ
console.log(Math.max(a, b));
// 2 способ
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}
// 3 способ
a > b ? console.log(a) : console.log(b);
// 4 способ
console.log(a > b ? a : b);