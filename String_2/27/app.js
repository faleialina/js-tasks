// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const str = prompt().trim();
console.log(str[0] === 'h' && str[1] === 't' && str[2] === 't' && str[3] === 'p' && str.includes('/') && (str.endsWith('.com') || str.endsWith('.ru')));





