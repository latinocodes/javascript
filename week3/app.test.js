const people = require('./people');
const weather = require('./weather');
const work = require('./work');

// -2; getPersonById does not throw id out of range Test: getPersonById(9000) Expected: undefined, Actual: undefined 
// -2; lexIndex does not throw id out of range Test: lexIndex(9000) Expected: undefined, Actual: undefined 
// -2; shouldTheyGoOutside does not throw for missing arguments Test: shouldTheyGoOutside() Expected: undefined, Actual: undefined 
// -2; shouldTheyGoOutside does not throw for bad arguments Test: shouldTheyGoOutside(12, 34) Expected: undefined, Actual: undefined 
// -2; shouldTheyGoOutside does not throw for invalid name Test: shouldTheyGoOutside("foo", "bar") Expected: undefined, Actual: undefined 
// -2; whereDoTheyWork does not throw for missing arguments Test: whereDoTheyWork() Expected: undefined, Actual: undefined 
// -2; whereDoTheyWork does not throw for bad arguments Test: whereDoTheyWork(12, 34) Expected: undefined, Actual: undefined 
// -2; whereDoTheyWork does not throw for invalid name Test: whereDoTheyWork("foo", "bar") Expected: undefined, Actual: undefined 
// -2; findTheHacker does not throw for invalid ip Test: findTheHacker("1.1.1.1") Expected: undefined, Actual: undefined

const main = async () =>{
    try{  
        console.log("\nTesting getPersonById: 9000 ")
        let person = await people.getPersonById(9000)
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        console.log("\nTesting lexIndex:  9000")
        let person = await people.lexIndex(9000)
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    
    try{
        console.log("\nTesting Should they go outside: ")
        let person = await weather.shouldTheyGoOutside()
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        console.log("\nTesting Should they go outside: 12, 34 ")
        let person = await weather.shouldTheyGoOutside(12, 34)
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        console.log("\nTesting Should they go outside: foo, bar")
        let person = await weather.shouldTheyGoOutside("foo", "bar")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
    

    try{
        console.log("\nTesting whereDoTheyWork()")
        let person = await work.whereDoTheyWork()
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        console.log("\nTesting whereDoTheyWork(12, 34)")
        let person = await work.whereDoTheyWork(12, 34)
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        console.log("\nTesting whereDoTheyWork(foo, bar)")
        let person = await work.whereDoTheyWork("foo", "bar")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
    
    
    

    try{
        console.log("\nTesting findTheHacker('foobar')")
        let person = await work.findTheHacker('foobar')
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        console.log("\nTesting findTheHacker()")
        let person = await work.findTheHacker()
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
}

main();