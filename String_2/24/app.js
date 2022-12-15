// На вход программе подается строка. Напишите программу, которая подсчитывает
// количество буквенных символов в нижнем регистре.
// abcABCD12345 => 3

const a = prompt().trim();
let result = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] === a[i].toLowerCase()) {
        result += 1
    }
}
console.log(result);