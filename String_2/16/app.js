// Пользователь вводит строку. Необходимо посчитать количество гласных (for)

const val = prompt().trim().toLowerCase();
let sum = 0
for (let i = 0; i < val.length; i++) {
    if (val[i] === 'a' || val[i] === 'o' || val[i] === 'i' || val[i] === 'u' || val[i] === 'e') {
        sum += 1
    };
}
console.log(sum);
