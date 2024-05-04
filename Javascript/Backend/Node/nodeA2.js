const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let game = "Pick a number between 1 and 3 (1=Rock, 2=Paper, or 3=Scissors)"

rl.question(game,(answer)=>{
    console.log(`User picked ${answer}`)

    let randomNumber = Math.floor(Math.random() * ((3 - 1) + 1) + 1)

    console.log(`Computer picked ${randomNumber}`)

    if(randomNumber == 1 && answer == 3){
        console.log("Rock beats Scissers. User loses")
    }
    else if(randomNumber == 2 && answer == 1){
        console.log("Paper beats Rock. User loses")
    }
    else if(randomNumber == 3 && answer == 2){
        console.log("Scissors beats Paper. User loses")
    }
    else if(randomNumber == 3 && answer == 1){
        console.log("Rock beats Scissers. Computer loses")
    }
    else if(randomNumber == 1 && answer == 2){
        console.log("Paper beats Rock. Computer loses")
    }
    else if(randomNumber == 2 && answer == 3){
        console.log("Scissors beats Paper. Computer loses")
    }else{
        console.log("This is a tie")
    }

    rl.close()
})