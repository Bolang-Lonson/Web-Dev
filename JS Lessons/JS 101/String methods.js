const course = 'Javascript 101: coding for beginners';

console.log(course.search('coding'));
console.log(course.slice(16, 22));
console.log(course.substr(16, 6));
console.log(course.replace('coding', 'programming'));
console.log(course.toUpperCase());
console.log(course.toLowerCase());
const spacy = '    lots of spaces     ';
console.log(spacy.trim());

words = course.split(' '); // returns an array of substrings previously separated by space
console.log(course.length) // 36