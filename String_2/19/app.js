// На вход программе подается строка. Преобразуйте первую букву каждого слова
// строки в верхний регистр (for)

const arr = prompt().trim().toLowerCase().split(' ');
let result = '';
for (let i = 0; i < arr.length; i++) {
    let F = arr[i][0].toUpperCase();
    let FromOne = arr[i].slice(1);
    result += F + FromOne + ' '
}
console.log(result);
