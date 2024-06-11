//Create a function that accepts a number parameter and returns the sum of all of the numbers from 0 to that number. 
//For example if given 5 return ( 0 + 1 + 2 + 3 + 4 + 5) or 15.

// 1. Create a function with one paramter. The paramter that is expected should be a number
// 2. Create a for loop that starts at 0 and ends at the number that is being passed in
// 3. Create a sum variable that starts at 0 and then inside the for loop we will calucate the running sum
// of all of the numbers between 0 and the number that is passed in
// 4. Return the running sum 

function totalSum(number){
    let sum = 0

    for(let i = 0;i<=number;i++){
        sum += i
    }

    return sum
}

// console.log( totalSum(3) )

//Create a function that accepts 2 numbers as parameters. Return the larger of the two numbers. 
//For example if given 9 and 10 your function should return 10

function maxValue(x,y){
    if(x > y){
        return x
    }
    else{
        return y
    }

    // return x>y ? x : y 
}

// Create a program that calculates the sum off all of the numbers from 1 to 5. 
// The final sum for this program should be 15. 

//1. We have to calculate a running sum. So this means that we need a sum variable. 
//2. Create a for loop that starts at 1 and ends at 5
//3. Inside the for loop we will calculate the running of all of the numbers between 1 and 5
//4. Return the running sum.

function runningSum(){
    let sum = 0

    for(let i=1;i<=5;i++){
        sum+=i
    }

    return sum
}

// Create a function that accepts an array as a parameter and multiplies every value in that array by 2. 
// Return the same array at the end of the function. Given [1,2,3,4,5] return [2,4,6,8,10]​

//1. Create a function that accepts an array as a parameter
//2. Create a for loop that iterates from the start of the array to end
//3. Inside of the for loop we need to re-assign every single value in the array to the current value
// multiplied by 2
//4. Return array


function multiply(arr){
    for(let i = 0; i<arr.length;i++){
        arr[i] = arr[i] * 2
    }

    

    return arr
}

//O(N) => O(N^2)
// console.log(multiply([1,2,3,4,5]))


//Create a function that accepts an array as a parameter and returns the average value of all the 
//numbers in that array. To find the average take the sum of all numbers in the array and divide 
//it by the length of the array. Given [1,2,3,4,5] return 3. (1+2+3+4+5) = 15..... 15/5=3

//1.Create a function that takes an array as a parameter
//2. Create a variable to hold the sum of all the numbers in the array. 
// start sum off at 0. 
//3. Create a for loop that starts at the beginning of the array and stops at the end
//4. Add the value that is a current array index in the loop to the running sum value
//5. After the loop breaks out create a variable called average that will calculate the sum
// of all of the numbers in the array divided by the length of the array. 
//6. Return the average


function average(arr){
    let sum = 0

    for(let i = 0;i<arr.length;i++){
        sum += arr[i]
    }

    let average = sum/arr.length

    return average
}

// console.log(average([1,2,3,4,5]))

function greaterThanY(arr,y){

}

greaterThanY([1,2,3,4,5],2) // 

// Create a function that accepts an input string and removes all white spaces from that string. 
// Given  "        whitespaces     are     cool        "  return “whitespacesarecool”. Hint: 
// You need to create a new string and return that string with the updated characters.

//1. Create a function with the correct params
//2. Create a string variable to hold all non whitespace characters
//3. Create a for loop that will iterate through the string
//4. Add a condition to check for whitespaces
//5. If the character is a whitespace we need to concat that charater to the end of our out string
//6. return output string. 

function removeWhiteSpaces(string){
    let output = ""

    for(let i = 0;i<string.length;i++){
        if(string[i] != " "){
            output += string[i]
        }
    }

    return output
}

// console.log(removeWhiteSpaces("     this is a sentence     "))

// Array: Pop Front Given array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop(). Given [1,2,3,4,5] return [2,3,4,5]

//1. Create a function with the correct params
//2. Create a for loop that goes from 0 to arr.length-2
//3. Swap elements until the first element gets to the end of the array
//4. Pop off the last value in the array and return that value.

// let popFront = (arr) => {

//     for(let i = 0;i<arr.length-1;i++){
//         let temp = arr[i]
//         arr[i] =arr[i+1]
//         arr[i+1] = temp
//     }

//     var lastVal = arr.pop()

//     console.log(arr)
   
//     return lastVal
// }

// console.log(popFront([1,2,3,4,5]))

// Parens Valid. Create a function that, given an input string str, returns a boolean whether parentheses 
// in str are valid. Valid sets of parentheses always open before they close, for example. For "(()())” “()”, 
// return true. Given ”)()” “(“, return false: not every parenthesis is closed.

//1. Create our function with the correct parameters
//2. Create a stack variable. (Empty array variable)
//3. Iterate through the string using a for loop
//4. If an opening paren is encountered then that value will get added to the stack
// if a closing paren is encountered the the last value in the stack will get popped off
//5. return if stack.length == 0. If true then parens are valid, if false the parens are invalid

let parensValid = (string)=>{
    let stack = []

    for(let i = 0;i<string.length;i++){
        if(string[i] == "(") stack.push("(")
        else stack.pop()
    }

    return stack.length == 0
}

// console.log(parensValid(")("))


let constant = (arr) =>{
    return arr[0]
}

//Given two arrays that are sorted but not necessarily the same length, find the median value. 
//Given ([1,5,9], [1,2,3,4,5,6]), return 4. If the number of values is even, return the average of the two middle values. 
//Given ([1,5,9], [1,2,3,4,5]), return 3.5. Hint: Combine and sort both arrays.​

//1.Create a function with the correct parameters
//2. Combine both arrays using .concat and store them into a variable
//3. Sort the combined array
//4. Find the middle value in the sorted array. If the length of the combined array is even
// then we'll take the average of the two middle values. If the lenghth of the combined array 
// is odd then we'll return the middle value.

let median = (arr1,arr2) =>{
    let combinedArr = arr1.concat(arr2)

    combinedArr.sort((a,b) => a-b)

    let middle = Math.floor(combinedArr.length / 2)

    if(combinedArr.length %2  == 0){
        return (combinedArr[middle] + combinedArr[middle-1]) / 2
    }

    return combinedArr[middle]
}


// console.log(median([1,5,9], [1,2,3,4,5]))

// Array: Filter Range. Given arr and values min and max, retain only the array values between min and max 
// indexes. Given [1,2,3,4,5],2,4 return [3,4,5].No built-in array functions. This does not have to be done 
// in place meaning you don't have to return the same array that was passed in as a parameter.

//1. Create a function with the correct parameters.
//2. Create an output array
//3. Create a for loop that starts at min and ends at max
//4. Inside the for loop we will push the values between min max to the output array
//5. return the output array

let filterRange = (arr,min,max) =>{
    let output = []

    for(let i = min;i<=max;i++){
        output.push(arr[i])
    }

    return output
}

// console.log(filterRange([1,2,3,4,5],2,4)) 

// Given a string of words (sentence) create a function that capitalizes every word in the string. Given
// “hello there skillspire” return “Hello There Skillspire”. Remember don’t use any built in methods to
// complete this task except any methods that capitalize a character. Remember don’t use any built in method.

//1. Create a function with the correct parameters
//2. Create an empty output string. Capitalize and add the first character of the input string
//3. Create a for loop that starts at index 1 of the string and ends at the end of string.
//4. Inside the loop check every element if the element before it is a space. If it is capitalize the current character
// and add it to the output string. Otherwise leave as is.
//5. Return the output string.

let capitalizeSentence = (string) =>{
    let output = `${string[0].toUpperCase()}`

    for(let i = 1;i<string.length;i++){
        if(string[i - 1] == " "){
            output += string[i].toUpperCase()
        }else{
            output += string[i]
        }
    }

    return output
}

// console.log(capitalizeSentence("hello there skillspire"))

// Create a standalone function that accepts an input string,removes leading and trailing white spaces
// (at beginning and end only) from the string and capitalizes the first letter of every word, and return
// that string. ​
// Given  "        whitspaces are cool        "  ​
// return “Whitespaces Are Cool”. Remember don’t use any built in methods to complete this task
// except any methods that capitalize a character.

//1. Create a function that accepts the correct params
//2. Create a start variable that starts at 0 and an end variable that starts at len -1
//3. Create a while loop that start at 0 and continue until it hits a character that is not a space
//4. Do the same thing for the end variable as well
//5. We're going to create a substring that will start at the whatever the start index is and end at whatever the end index is
// This can be done using a for loop
//6. Return captialized string

let removeLeadingTrailingWhitespaces = (string) =>{
    let start = 0, end = string.length -1, output = ""

    while(string[start] == " ") start++ 
    
    while(string[end] == " ") end--

    for(let i = start;i<=end;i++) output += string[i]


    return capitalizeSentence(output)
}

console.log(removeLeadingTrailingWhitespaces("      whitspaces are cool      "))