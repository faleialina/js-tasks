// Дана строка в виде числа. Необходимо просуммировать все элементы числа
// ‘123’ -> 6
// ‘111111111111’ -> 12


const a = '123'.trim();

let sum = 0
for (let i = 0; i < a.length; i++) {
    sum += +a[i]
}
console.log(sum);