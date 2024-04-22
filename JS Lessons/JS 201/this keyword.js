const person = {
    name: 'Saadiq',
    speak(){
        console.log(`My name is ${this.name}`);
    }
}

person.speak();

function counter(){
    if (this.total === undefined){
        this.total = 1;
    } else {
        this.total++;
    }
    // after very first run the total variable is created
    console.log(`Running counter. Total is ${this.total}`);
}

counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
