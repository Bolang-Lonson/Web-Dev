const hello = () => {
    console.log('hello');
}

const myNewGreeting = (name) => console.log(`Welcome. ${name}`);

myNewGreeting('Caroline');

// the 'this' keyword when used in an arrow function doesn't refer to the same function as an object