// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного уравнения
// ax2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.
const a = +prompt();
const b = +prompt();
const c = +prompt();
const D = b ** 2 - 4 * a * b;

if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    if (x1 > x2) {
        console.log(x2, x1);
    } else {
        console.log(x1, x2);
    }
} else if (D === 0) {
    console.log(-b / (2 * a));
} else if (D < 0) {
    console.log('нет корней');
}