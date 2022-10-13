
let inputNumber = document.getElementById('inputNumber');
const btn = document.getElementById('btn')
const resultDiv = document.querySelector('#result')
let guess = document.querySelector('.guess')

let playing = true;

let numberOfGuessing = 5

let randomNumber = Math.floor(Math.random() * 50) + 1;

// Function for on click of button
btn.onclick = () => {
    let userNumber = Number(inputNumber.value);
        if(playing){
            resultCondition(userNumber)
            numberOfGuessing -= 1
        }

    
    guess.innerHTML =`You have ${numberOfGuessing} guesses`

    if (numberOfGuessing < 1 ){
        guess.innerHTML =`You have no more guess`
        playing = false
        guessDiv.innerHTML = `<p class='wrong'>Click the restart button to start again!</p>
        <p class='right'> ${randomNumber}</p>`
    }
    console.log(randomNumber, userNumber, numberOfGuessing)
}

const resultCondition = (userNumber) => {
    if(randomNumber === userNumber){
        inputNumber.value = ''
        playing = false;
        resultDiv.innerHTML = `<p class='right'>HURRAY! You guessed right</p>`
        guessDiv.innerHTML = `<p class='wrong'>Click the restart button to start again!</p>`
    }
   
    else if (userNumber === 0){
        numberOfGuessing += 1
        inputNumber.value = ''
        resultDiv.innerHTML = `<p class ='wrong'>Sorry! Input a number between 1 - 50</p> `
    }

    else if(userNumber > 50){
        inputNumber.value = ''
        resultDiv.innerHTML = `<p class='try'>Enter number between 1 - 50</p>`
    }

    else if (randomNumber < userNumber){
        inputNumber.value = ''
        resultDiv.innerHTML = `<p class='try'>Your guess is higher</p>`
    }
    
    else if (randomNumber > userNumber){
        inputNumber.value = ''
        resultDiv.innerHTML =`<p class='try'>Your guess is lower</p>`
    }
 
    else if (userNumber != Number()){
        inputNumber.value = ''
        resultDiv.innerHTML =`<p class='wrong'>Sorry!Only Numbers required</p>`
    }
}

restart.onclick = () => {
    randomNumber = Math.floor(Math.random() * 50) + 1;
    resultDiv.innerHTML = '';
    guess.innerHTML = `You have 5 guesses`
    playing = true;
    inputNumber.value = ''
    guessDiv.innerHTML = ''
    numberOfGuessing = 5
}