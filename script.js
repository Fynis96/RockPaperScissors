
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



document.querySelector(".buttonbox").addEventListener('click', function(event){
    //console.log(event);
    if(event.target.innerHTML === 'R'){
        computerPlay();
        play('Rock', computerPlay());
        console.log('rock');
    }
    else if(event.target.innerHTML === 'P'){
        play('Paper', computerPlay());
        console.log('paper');
    }
    else if(event.target.innerHTML === 'S'){
        play('Scissors', computerPlay());
        console.log('scissors');
    }
})