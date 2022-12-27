// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// anna -> true
// мем -> true
// тест -> false
const a = 'anna'.toLowerCase().trim();
const b = a.split('').reverse().join('');
if (a === b) {
    console.log(true);
} else {
    console.log(false);
}