// На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный прямоугольник размерами n×10 несколькими способами.
// 2 -> **********
//      **********
const n = 2;
let result = '';
for (let i = 0; i < n; i++) {
    result += `${'*'.repeat(10)}\n`;
}
console.log(result);


