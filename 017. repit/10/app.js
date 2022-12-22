// Задача на слово палиндром
const a = 'мем'.toLowerCase();
const b = a.split('').reverse().join('');
if (a === b) {
    console.log(true);
} else {
    console.log(false);
}