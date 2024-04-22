function addNumbers(num1, num2){
    const total = Number(num1) + Number(num2);
    return total;
}

function greeting(name){
    return `Greetings ${name}`;
}

greeting('Saadiq');

// Rest parameters
function addNumbers(greetingName, ...nums){
    let total = 0;
    for (index in nums){
        total += nums[index]
    }
    return `${greetingName}: the total is ${total}`;
}

const newTotal = addNumbers('Boss', 1,3,5,7,9);
console.log(newTotal);

// Objects with functions
const person = {
    name: 'Saadiq',
    age: 31,
    height: "5'6\"",
    speak: function(want='cookies'){
        console.log(`Meow, i want ${want}`);
    },
    talk(to='Karen'){
        console.log(`I am talking to ${to}`);
    }
}
person.favFood = 'Pizza';

console.log(person['favFood']);
person.speak(person.favFood);

person.talk('Amanda');