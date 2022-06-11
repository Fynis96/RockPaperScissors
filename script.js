


function playerSelection() {
    let input = parseInt(prompt("1-Rock, 2-Paper, 3-Scissors"));
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
    let randomNumber = Math.floor(Math.random()*3) + 1;
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
        return 'win';
    }
    else if(cp === 'Rock' && pc === 'Scissors' || cp === 'Paper' && pc === 'Rock' || cp === 'Scissors' && pc === 'Paper'){
        console.log("No win here brother.");
        return 'lose';
    }
    else if(pc ==='Rock' && cp === 'Rock' || pc ==='Paper' && cp === 'Paper' || pc === 'Scissors' && cp === 'Scissors'){
        console.log("Y'all chose the same thing");
        return 'tie';
    }
}

function game(){
    let pcScore = 0;
    let cpScore = 0;
    let round = '';
    
    for(i=0; i<5; i++){
       round = play(playerSelection(), computerPlay());
        if(round === 'win'){
            pcScore++;
        }
        else if(round === 'lose'){
            cpScore++;
        }
    }
    if(pcScore > cpScore){
        console.log('You won the whole the thing');
    }
    else if(pcScore < cpScore){
        console.log('The guy really won this time');
    }
    else if(pcScore === cpScore){
        console.log('Somehow ya really tied.');
    }
}

//game();

