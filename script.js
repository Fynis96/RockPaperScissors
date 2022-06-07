let randomNumber = Math.floor(Math.random()*3) + 1;
let input = parseInt(prompt("1-Rock, 2-Paper, 3-Scissors"));

function playerSelection() {
    if(input === 1){
        return 'Rock';
    }
    else if(input === 2){
        return 'Paper';
    }
    else if(input === 3){
        return 'Scissors';
    }
}

function computerPlay() {
    if(randomNumber === 1){
        return 'Rock';
    }
    else if(randomNumber === 2){
        return 'Paper';
    }
    else if(randomNumber === 3){
        return 'Scissors';
    }

}


function play(pc, cp) {
    
    
    if (pc === 'Rock' && cp === 'Scissors' || pc === 'Paper' && cp === 'Rock' || pc === 'Scissors' && cp === 'Paper') {
        console.log("Congratulations, you beat the guy.");
    }
    else if(cp === 'Rock' && pc === 'Scissors' || cp === 'Paper' && pc === 'Rock' || cp === 'Scissors' && pc === 'Paper'){
        console.log("No win here brother.");
    }
    else if(pc ==='Rock' && cp === 'Rock' || pc ==='Paper' && cp === 'Paper' || pc === 'Scissors' && cp === 'Scissors'){
        console.log("Y'all chose the same thing");
    }


}

console.log('You chose ' + playerSelection());
console.log('The guy chose ' + computerPlay());
play(playerSelection(), computerPlay());