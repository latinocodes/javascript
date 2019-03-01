const axios = require('axios');
const people = require('./people');

exports.whereDoTheyWork = async (firstName, lastName) => {
    /* Function takes firstname and last name calls get personByName from people if found then check the ssn for
    to see where they work and returns whether the person should would be fire or not along with full name, job title, and company */
    try{
        let person = await people.getPersonByName(firstName, lastName);
        if(person){
            const workData = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
            let work = workData.data.find((item) => item.ssn === person.ssn);
            if (work !== undefined){ return `${person.firstName} ${person.lastName} - ${work.jobTitle} at ${work.company}. they will ${(work.willBeFired === true ? '' : 'not ')}be fired.`}
            else { throw 'person ssn is not in work'}
        }
        else{ throw 'person does not exist' }
    }
    catch(err){
        return err
    }   
}

exports.findTheHacker = async (ip) => {
    /* Function takes ip address test against regular Expression to validate checks if ip exist on work data
    if found gets the ssn and calls get personBySocial from people if found then returns person full name */
    const RegEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    if(RegEx.test(ip)){
        try{
            const workData = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
            let work = workData.data.find((item) => item.ip === ip);
            if (work !== undefined) {
                let person = await people.getPersonBySocial(work.ssn);
                if(person){ return `${person.firstName} ${person.lastName} is the Hacker` }
            }
            else { throw 'Hacker does not exist'}
        }
        catch(err){
            return err
        } 
    }
    else{ throw 'invalid ip address!' }
}