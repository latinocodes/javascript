const questionOne = function questionOne(arr=[]) {
    // This function takes an array and it checks that each element is a number and it provides the sum of the numbers
    // is a value is not valid, it will skip that value but continue to check each element and provide sum of
    // each element square value
    
    let total = 0;
    let exp = /\d+/;

    // Check if the array is grater than 
    if(arr.length < 1) console.log("Array must be greater than 1");

    else{
        arr.forEach(item => {
            if(!exp.test((item))) console.log("invalid input found in array, it will be skipped.");
            else {
                item *= item
                total += item
            }
        });
    }
    return total;
}

const questionTwo = function questionTwo(num=0) { 
    // this function takes a number and recursively returns the sequence sum of the previously 2 numbers

    if(num < 1) return 0;
    else if(num === 1) return 1;
    else return questionTwo(num - 1) + questionTwo(num - 2)
}

const questionThree = function questionThree(text="") {
    // This function takes the number of vowels inside a string and returns it's total

    let exp = /^[aeiou]$/i;
    let total = 0;

    if(text.split(" ") < 1) return "string must not be empty";

    text.split("").forEach(item => {
        if(exp.test(item)){
            total += 1
        }
    })
    return total;
}

const questionFour = function questionFour(num) {
    // this function takes a number and recursively returns the Factorial of the number
    
    if(num < 0) return NaN;
    else if(num === 0) return 1;
    else return num * questionFour(num - 1);

}

module.exports = {
    firstName: "Jose", 
    lastName: "Lara", 
    studentId: "10416385",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
