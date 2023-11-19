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
let oddarray = []
const oddNumberCount = (num) => {
    for (let a = 1; a < num; a++) {
        if (a % 2 === 1)
     oddarray.push(a)
    } {
        console.log(oddarray.length)
    }
}
oddNumberCount(16)
