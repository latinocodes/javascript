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
    if(arr.length === 0)
        return true;
    return false;
}

exports.head = (arr) => {
    // function returns the first element of the array
    let result = validateArray(arr)

    if(result == true && !isArrayEmpty(arr)){
        return arr[0]
    }
    return "";
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

exports.last = (arr) => {
    // function returns the first element of the array
    let result = validateArray(arr)
    
    if(result == true && !isArrayEmpty(arr)){
        return arr[arr.length-1];
    }
    return ""
}

exports.countElements = (arr) => {
    dict = {}

    arr.forEach(item => {
        if(dict[item]){
            dict[item] += 1
        }
        else{
            dict[item] = 1
        }
        console.log(dict)
    })
    return dict;
}

