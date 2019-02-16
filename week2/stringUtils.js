const checkIfString = (value) => {
    // check is value is a string
    return typeof value !== 'string' ? false : true
}

const isEmpty = (value) => {
    // Checks if string is empty or not
    if(value.length === 0)
        return true
    else if(!value)
        return true
    return false
}

exports.capitalize = (value) => {
    if(!isEmpty(value) && checkIfString(value)){
        let newString = value.toLowerCase()
        return newString.replace(newString.charAt(0), newString.charAt(0).toUpperCase());  
    }
    else { throw "invalid String" } ;
}

exports.repeat = (value, num) => {
    if(!isEmpty(value) && checkIfString(value)){
        return value.repeat(num);
    }

    else { throw "invalid String"}; 
}

exports.countChars = (value) => {
        // Count the instances of each letter in string
    dict = {}
    if(!isEmpty(value) && checkIfString(value)){
        value = value.split('')
        value.forEach(item => {
            dict[item] ? dict[item] += 1 : dict[item] = 1
        })
        return dict;
    }

    else { throw "invalid String" };
    
}

exports.Student = {
    firstName: "Jose", 
    lastName: "Lara", 
    studentId: "10416385",
};
