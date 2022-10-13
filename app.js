
let inputNumber = document.getElementById('inputNumber');
const submitBtn = document.getElementById('btn')
const resultDiv = document.querySelector('#result')
let guess = document.querySelector('.guess')
const guessDiv = document.getElementById('guessDiv')
const restart = document.getElementById('restart')

let numberOfGuessing = 5

let playing = true;

let randomNumber = Math.floor(Math.random() * 50) + 1;

// Function for on click of button
submitBtn.onclick = () => {
    let userNumber = Number(inputNumber.value);

        if(playing){
            inputNumber.value = ''
            conditions(userNumber)
            numberOfGuessing -= 1
        } 
        
   
    guess.innerHTML =`You have ${numberOfGuessing} guesses`
       
    if(numberOfGuessing < 1){

            guess.innerHTML =`You have no more guess`
            playing = false;
            resultDiv.innerHTML = `<p class ='wrong'>You guessed wrong. The winning number was ${randomNumber}</p>`
            guessDiv.innerHTML = `<p class ='wrong'>Click the restart button to start again</p>`
            
        }

    console.log(randomNumber)
}

const conditions = (userNumber) => {
    if(randomNumber === userNumber){
        inputNumber.value = ''
        playing = false;
        resultDiv.innerHTML = `<p class='right'>HURRAY! You guessed right</p>`
        guessDiv.innerHTML = `<p class='wrong'>Click the restart button to start again!</p>`
    }
    
    else if (userNumber === 0){
        numberOfGuessing += 1
        resultDiv.innerHTML = `<p class ='wrong'>Sorry! Input a number between 1 - 50</p> `
    }

    else if(userNumber < 0 || userNumber > 50){
        numberOfGuessing += 1
        resultDiv.innerHTML = `<p class='wrong'>Enter number between 1 - 50</p>`
    }

    else if (randomNumber < userNumber){
        resultDiv.innerHTML = `<p class='try'>Your guess number ${userNumber} is higher</p>`
    }
    
    else if (randomNumber > userNumber){
        resultDiv.innerHTML =`<p class='try'>Your guess number ${userNumber} is lower</p>`
    }
 
    // else if (userNumber != Number()){
    //     numberOfGuessing += 1
    //     resultDiv.innerHTML =`<p class='wrong'>Sorry! Only Numbers required</p>`
    // }
}


restart.onclick = () => {
    numberOfGuessing = 5
    playing = true;
    resultDiv.innerHTML = ''
    inputNumber.value = ''
    randomNumber = Math.floor(Math.random() * 50) + 1;
    guessDiv.innerHTML = ''
    guess.innerHTML = `You have ${numberOfGuessing} guesses`

}