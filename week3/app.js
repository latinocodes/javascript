const people = require('./people');

async function main(){
    try{
        const peopleData = await people.getPersonById(43);
        console.log(peopleData);
    }
    catch(err){
        console.log(err)
    }
    try{
        const peopleData = await people.getPersonById();
        console.log(peopleData);
    }
    catch(err){
        console.log(err)
    }

    try{
        const peopleData = await people.getPersonById(-1);
        console.log(peopleData);
    }
    catch(err){
        console.log("should failed: ", err)
    }
}


main();