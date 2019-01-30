const lab1 = require("./lab1");

console.log("Test for Function questionOne: ")
console.log(lab1.questionOne([1, 2, 3])); // returns 6
console.log(lab1.questionOne([3, 9, 3])); // returns 15
console.log(lab1.questionOne([1, 2, 3])); // Output should be 14
console.log("\n")

console.log("Test for Function questionTwo: ")
console.log(lab1.questionTwo(7)); // should output 13 
console.log(lab1.questionTwo(1)); // should output 1
console.log(lab1.questionTwo(10)); // should output 55
console.log(lab1.questionTwo(12)); // should output 144
console.log("\n")


console.log("Test for Function questionThree: ")
console.log(lab1.questionThree("Jose")); // should output 2
console.log(lab1.questionThree("Isaac")); // should output 3
console.log(lab1.questionThree("San Diego")); // should output 4
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); // should output 196
console.log("\n")

console.log("Test for Function questionFour: ")
console.log(lab1.questionFour(3)); // should output 6
console.log(lab1.questionFour(7)); // should output 5040
console.log(lab1.questionFour(0)); // should output 1
console.log(lab1.questionFour(4)); // should output 24
console.log(lab1.questionFour(-4)); // should output 1
console.log("\n")