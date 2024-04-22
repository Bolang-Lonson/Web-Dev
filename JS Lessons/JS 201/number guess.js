while(true){
    let num = Number(prompt('Guess the number:'));

    let randomNum = Math.ceil(Math.random() * 10);
    if(num === randomNum){
        alert('You win');
        break;
    } else {
        console.log(`You guessed ${num} but the right number was ${randomNum}`);
    }
}