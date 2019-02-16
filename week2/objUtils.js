const helpConcatObj = (values, override=false) => {
    // function taskes array of objecs and merge each object into one 
    // an optional override param can be passed to override value already in object false by default
    let extended = {}
    
    // Loop through each object and conduct a merge
	for (let i = 0; i < values.length; i++) {

        if(typeof values[i] != "object"){
            throw 'arguments must be objects'
        }
         // Getting the entry from each object element
        let entries = Object.entries(values[i])

        // looping throught key value entry if not in extended dictionary, add it
        for (let [key, value] of entries) {
            if (!extended.hasOwnProperty(key) && override == false){
                extended[key] = value
            }
            else if(override == true){
                extended[key] = value
            }
        }
    }
    return extended;
}


exports.extend = (...values) => {
    // function taskes array of arguments and merge each object without overwriting properties from earlier entries

    if(values.length < 2)
        throw 'arguments must be at least two'

    return helpConcatObj(values, override=false);
}

exports.smush = (...values) => {
    // function taskes array of arguments and merge each object it overwrites properties from earlier entries

    if(values.length < 2)
        throw 'arguments must be at least two'

    return helpConcatObj(values, override=true);
}

exports.mapValues = (values, fun) => {
    //  this function takes an object and a function as arguments and map those objects values to the function returning a new modified object based on the function
    let modifiedObject = {}
    
    if(typeof values != "object"){
        throw 'arguments must be objects'
    }
    if(typeof fun != 'function'){
        throw 'arguments must be a valid function'
    }
    // Getting the entry from each object element
    let entries = Object.entries(values)

    // looping throught key value entry if not in extended dictionary, add it
    for (let [key, value] of entries) {
        if (!modifiedObject.hasOwnProperty(key)){
            modifiedObject[key] = fun(value)
        }
    }
    return modifiedObject;
}

exports.Student = {
    firstName: "Jose", 
    lastName: "Lara", 
    studentId: "10416385",
};