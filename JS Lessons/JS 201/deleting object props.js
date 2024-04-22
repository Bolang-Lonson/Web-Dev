"use strict";

const person4 = {
    name: 'Saadiq',
    age: 22
}

// delete person4; can't delete variables in JS
delete person4['age'];
console.log(person4['age']);
console.log(person4);