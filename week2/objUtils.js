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


const extend = (...values) => {
    // function taskes array of arguments and merge each object without overwriting properties from earlier entries

    if(values.length < 2)
        throw 'arguments must be at least two'

    return helpConcatObj(values, false);
}

const smush = (...values) => {
    // function taskes array of arguments and merge each object it overwrites properties from earlier entries

    if(values.length < 2)
        throw 'arguments must be at least two'

    return helpConcatObj(values, true);
}



const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 }

const firstSecondThird = extend(first, second, third);
// { x: 2, y: 3, a: 70, z: 5, q: 10 }

const secondThird = extend(second, third);
// { a: 70, x: 4, z: 5, y: 9, q: 10 } 

const thirdFirstSecond = extend(third, first, second);
// { x: 0, y: 9, q: 10, a: 70, z: 5 }

console.log("printing extend")
console.log(firstSecondThird)
console.log(secondThird)
console.log(thirdFirstSecond)


const firstSecondThird1 = smush(first, second, third);
// { x: 2, y: 3, a: 70, z: 5, q: 10 }

const secondThird1 = smush(second, third);
// { a: 70, x: 4, z: 5, y: 9, q: 10 } 

const thirdFirstSecond1 = smush(third, first, second);
// { x: 0, y: 9, q: 10, a: 70, z: 5 }

console.log("printing smush")
console.log(firstSecondThird1)
console.log(secondThird1)
console.log(thirdFirstSecond1)

