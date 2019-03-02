const people = require('./people');
const weather = require('./weather');
const work = require('./work');

async function main(){
    try{
        let person = await people.firstNameMetrics()
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        let person = await people.getPersonById(1000)
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        let person = await people.lexIndex(2)
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        let person = await people.lexIndex(-1)
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
    try{
        let person = await people.lexIndex(500)
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
    try{
        let person = await people.lexIndex()
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        let person = await weather.shouldTheyGoOutside("Scotty", "Barajaz")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
    try{
        let person = await weather.shouldTheyGoOutside("Calli", "Ondrasek")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
    try{
        let person = await weather.shouldTheyGoOutside()
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
    try{
        let person = await weather.shouldTheyGoOutside("bob")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
    try{
        let person = await weather.shouldTheyGoOutside("bob", "smith")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    // WORK TESTING
    try{
        let person = await work.whereDoTheyWork("bob", "smith")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        let person = await work.whereDoTheyWork("Calli", "Ondrasek")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        let person = await work.whereDoTheyWork("Hank", "Tarling")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
    try{
        let person = await work.whereDoTheyWork()
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        let person = await work.whereDoTheyWork("Hank", "Tarling")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
    try{
        let person = await work.findTheHacker("79.222.167.180")
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        let person = await work.findTheHacker('192.1.1.0')
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        let person = await work.findTheHacker('foobar')
        console.log(person)
    }
    catch(err){
        console.log(err)
    }

    try{
        let person = await work.findTheHacker()
        console.log(person)
    }
    catch(err){
        console.log(err)
    }
}

main();