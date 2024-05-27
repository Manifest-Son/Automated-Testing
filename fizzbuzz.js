// Write a function that will take in a num
// if the num is divisible by 3, it returns the string "Fizz"
// if the num is divisible by 5, it returns the "Buzz"
// if the num is divisible by both 3 and 5 , it returns the string "FizzBuzz"
// otherwise if the num is not divisible by 3 or 5, then it returns the num itself.


function fizzbuzz(num){
    if (num % 5 ===0 && num % 3 ===0){
        return "FizzBuzz"
    } else if(num % 3 === 0){
        return "Fizz"
    } else if(num % 5 === 0){
        return "Buzz"
    } else {
        return num
    }
}

module.exports = fizzbuzz