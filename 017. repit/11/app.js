// Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами
const a = 'Statue of Liberty'.trim();
const b = 'Built to stay free'.trim();
Anagram ('Statue of Liberty','Built to stay free')
var isAnagram = function(a, b) {
    if (a.trim() === b.trim()) {
     console.log(false);
    }
  };