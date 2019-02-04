const extend = (...values) => {
    // function taskes array of arguments and merge each object
    let extended = {}

    if(values.length < 2)
        throw 'arguments must be at least two'

	// Loop through each object and conduct a merge
	for (let i = 0; i < values.length; i++) {

        if(typeof values[i] != "object"){
            throw 'arguments must be objects'
        }
         // Getting the entry from each object element
        let entries = Object.entries(values[i])

        // looping throught key value entry if not in extended dictionary, add it
        for (let [key, value] of entries) {
            if (!extended.hasOwnProperty(key)){
                extended[key] = value
            }
        }
	}

	return extended;
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

console.log(firstSecondThird)
console.log(secondThird)
console.log(thirdFirstSecond)

