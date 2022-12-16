// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки
const a = prompt();
console.log(a.length);
console.log(a.slice(a.indexOf(' ')));
console.log(a.indexOf(' '));