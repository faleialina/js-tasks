// Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами
const a = 'материк'.toLowerCase().split('').sort().join('');
const b = 'метрика'.toLowerCase().split('').sort().join('');
let isAnagram = true;
for (let i = 0; i < a.length; i++) {
  if (a[i] !== b[i]) {
    isAnagram = false;
    break;
  }
}
console.log(isAnagram);