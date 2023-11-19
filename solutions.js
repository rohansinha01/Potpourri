//Set Alarm
//Write a function named setAlarm that has two arguments.

// The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
// The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
// The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise.

// Example expected output:

// setAlarm(true, true) // => returns false
// setAlarm(false, false) // => returns false
// setAlarm(false, true) // => returns false
// setAlarm(true, false) // => returns true

function setAlarm(employed, vacationing) { //I am creating a function called setAlarm with the variables of employed and vacationing.
    if(employed === true && vacationing === true){//if employed is equal to true AND vacationing is equal to true
        return console.log(false)//print out false
    }
    if(employed === false && vacationing === false){//if employed is equal to false AND vacationing is equal to false
        return console.log(false)//print out false
    }
    if(employed === false && vacationing === true){//if employed is equal to false AND vacationing is equal to true
        return console.log(false)//print out false
    } 
    if(employed === true && vacationing === false){//if employed is equal to true AND vacationing is equal to false
        return console.log(true)//print out true
    }
}
setAlarm(true, true)
setAlarm(false, false)
setAlarm(false, true)
setAlarm(true, false)

//Count Odd Numbers
//Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.

//Example expected output:

//oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
//oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)
let oddarray = [] //Made an array for the odd numbers to live in.
const oddNumberCount = (num) => { //Started a function to count odd numbers
    for (let a = 1; a < num; a++) { //got a list of numbers 
        if (a % 2 === 1) //if number is odd
     oddarray.push(a)//put it in our array
    } {
        console.log(oddarray.length) //log how many there are
    }
}
oddNumberCount(16)

// Disemvoweling Trolls
// Trolls are attacking your comment section! Let's neutralize the threat by removing all vowels from their comments. That'll make them look real silly.

// Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.

// Example expected output:

// trollsBeGone("This website is for losers LOL") // => returns "Ths wbst s fr lsrs LL"
let newcomment = [] //creating a new array so I can manipulate the letters in an array
const comment = (comment) => { {   //created a function to get the comment into an array 
        newcomment.push(comment) //this line pushes the comment into an array
} 
    { 
    console.log(newcomment)}//this line shows the comment in the array
}
const newComment = (newcomment) => { //this function lets me separate the comment character by character
   let troll = newcomment.split('') //this splits up each individual letter into it's own index
        console.log(troll) //this line shows the comment split up by each letter
    } 
const trollsBeGone = (troll) => { //this function takes the troll array and replaces vowels with the empty space.
    let trollcomment = troll.replace(/[aeiouAEIOU]/g,'') //this line replaced each of the letters, but joined the phrase back without me having to use another function to join the indeces.
    console.log(trollcomment) //this line shows the new comment 
}
comment("This website is for losers LOL")
newComment("This website is for losers LOL")
trollsBeGone("This website is for losers LOL")

// Make an object named bankInfo with your banking info that includes the keys listed below. Each key should have a number value that can either be negative or positive (e.g. -500 or 500)

// savings
// checking
// moneyMarket
// creditCard
// Write a function called bankAccountSummary that accepts your bankInfo object as an argument. The function should calculate the total of your bank account and return it.

// Example expected output:

// assume my bankInfo values are: 600, 800, 200, -2000
// bankAccountSummary(bankInfo) // returns -400
// Save your bankAccountSummary total to a variable called bankTotal

// Write another function called inTheRed that accepts your bank account summary total (number) as an argument. The function should return true if your total is less than 0, and false otherwise.

// Example expected output:

// assume my bank total is -400
// inTheRed(bankTotal) // returns true

const bankInfo = { //adding in the object of the bankInfo
    savings: 600,
    checking: 800,
    moneyMarket: 200,
    creditCard: -2000
}
const bankAccountSummary = (bankInfo) => { //creating the function of bankAccountSummary 
    bankTotal = (bankInfo.savings + bankInfo.checking + bankInfo.moneyMarket + bankInfo.creditCard) //bankTotal adds up the totals in bank info
    console.log(bankTotal) //gives us the total
} 

const inTheRed = () => { //creating a function to see if the info is in the red
    if(bankTotal < 0){ //if the bank total is less than 0
        console.log(true) //log a true
    } else { //if it doesn't
        console.log(false) //log a false
    }
}
    
bankAccountSummary(bankInfo)
inTheRed(bankTotal)