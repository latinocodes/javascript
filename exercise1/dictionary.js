const words = {
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}

const checkInput = (input) => {
    if(typeof input != "string") { throw "input is not a String, please check your input."};
    return input;
}

const lookupDefinition = (input) => {
    checkInput(input)
    if(words[input] === undefined) { throw "Word not found in dictionary"};
    return words[input];
}

const getWord = (input) => {
    checkInput(input)
    let value = Object.keys(words).find(item => words[item] === input);
    if (value === undefined){ throw "Key not found in Dictionary"};
    return value;
}


module.exports = {
    getWord,
    lookupDefinition
}

