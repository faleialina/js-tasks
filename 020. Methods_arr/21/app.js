// Напишите код, который разворачивает строку не используя reverse 

const a = 'Пользователь';
let b = '';
for (let i = a.length - 1; i >= 0; i--) {
    b += a[i];
}
console.log(b);