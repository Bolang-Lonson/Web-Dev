console.log('Starting script...');
setTimeout(()=>{console.log('Waited 3 seconds')}, 3000);

let count = 0;
const myInterval = setInterval(()=>{
    console.log('checking something...');
    count++;

    if(count === 3){
        clearInterval(myInterval);
        console.log('That was the last one');
    }
}, 2000);