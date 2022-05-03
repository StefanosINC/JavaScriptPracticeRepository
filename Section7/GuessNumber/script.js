'use strict';

// query selector select the element
// text content will print it to the actual content. 


// how to randomize something 1-20 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMesage = function(message) {
    document.querySelector('.message').textContent = message;
}
const bodyBackround = function(color){
    document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // 0 is a falsy value
    // this is false (boolean)
    // this guess is 0
    if(!guess){
    displayMesage("No Number");

    }
    // When Player Wins
    else if(guess === secretNumber){
        displayMesage("Correct Number");

        // document.querySelector('body').style.backgroundColor = '#60b347';
        bodyBackround("#60b347");

        document.querySelector('.number').style.width = '30rem';
        
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }
    // When Guess is wrong
    // guess is to high 
    else if(guess !== secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : "To Low";
        // reduce the score by 1 ( same as score  = score -1)
        displayMesage(guess > secretNumber ? 'Too High' : "To Low");
        score--;

        document.querySelector('.score').textContent = score;
        }
        else{
            displayMesage('You Lost the game muahah');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMesage("Start Guesing..");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    console.log(secretNumber);
});
