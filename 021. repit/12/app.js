// На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 7 -> *******
// ******
// *****
// ****
// ***
// **
// *

const n = 7;
let result = '';
for (let i = n; i >= 1; i--) {
    result += `${'*'.repeat(i)}\n`;
}
console.log(result);