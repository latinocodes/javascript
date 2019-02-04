const validateArray = (arr) => {
    // Validates array 
    if(arr == undefined){
        throw "Error with passing array"
    }
    else if(!Array.isArray(arr)){
        throw "item must be an array"
    }
    return true;
}

const isOutOfRange = (arr, index=0) => {
    // checks if array is out of range
    let flag;
    if((arr.length) < index){
        flag = true
        throw "array is out of range"
    }
    flag = false
    return flag
}

const isArrayEmpty = (arr) => {
    // Checks if the array is empty
    return arr.length === 0 ? true : false;
}

exports.head = (arr) => {
    // function returns the first element of the array
    let result = validateArray(arr)

    if(result == true && !isArrayEmpty(arr)){
        return arr[0]
    }
    return "";
}

exports.last = (arr) => {
    // function returns the first element of the array
    let result = validateArray(arr)
    
    if(result == true && !isArrayEmpty(arr)){
        return arr[arr.length-1];
    }
    return ""
}


exports.remove = (arr, index) => {
    // removes index passed element from array 
    let result = validateArray(arr)
    isOutOfRange(arr, index)

    if(result == true && !isArrayEmpty(arr)){
        arr.splice(index, 1)
        return arr
    }
    return ""
}

exports.range = (num, value='') => {
    // Returns the range of upto a number but no including it, if a value is pass it will return the VALUEx of times
    let result = [];
    if(num === undefined)
        throw "must pass a value"

    else if(typeof num !== 'number')
        throw "first parameter must be a number"

    else if(value.length !== 0)
        for(let val=0; val < num; val++)
            result.push(value)
    else
        for(let val=0; val < num; val++)
            result.push(val)

    return result;
}

exports.countElements = (arr) => {
    // Count the instances of each element in array
    dict = {}
    let result = validateArray(arr)

    if(result === true){
        arr.forEach(item => {
            return dict[item] ? dict[item] += 1 : dict[item] = 1
        })
    }
    return dict;
}

exports.isEqual = (arr1, arr2) => {
    //  checks if both arrays are equal 
    let arrOneResult = validateArray(arr1)
    let arrTwoResult = validateArray(arr2)

    if(arrOneResult === true && arrTwoResult === true){

        if (arr1.length != arr2.length) 
            return false;

        for(let count=0; count < arr1.length; count++)  // Loop throught each element and check if they are the same
            if(arr1[count] !== arr2[count])
                return false

        return true;
    }
}
