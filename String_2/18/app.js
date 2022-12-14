// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// (for)
// fullstack => ua

const str = prompt().trim().toLowerCase();
let resalt = ''
for (let i = 0; i < str.length; i++) {

    str[i] === 'a' || str[i] === 'o' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' ? resalt += str[i] : null
};
console.log(resalt);