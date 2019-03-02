const axios = require('axios');

const validId = (id) => {
    /* Function validates id are of proper type and that are valid */
    if(typeof id !== 'number'){ throw 'number provided is not a number'}
    if(id <= 0){ throw 'number must be greater than 0'}
}

const validateBoundaries = (id, listLength) => {
    /* Function validates id is in boundary with the arrayLength */
    if(id > listLength){ throw 'number is out of bounds'; }
    return true;
}

const validateName = (firstName, lastName) => {
    /* Function validates firstname and lastname are of proper type and that are valid */
    if(firstName === undefined || lastName === undefined){throw 'you must pass two parameters: firstName and lastName'}
    if(typeof firstName !== 'string' && typeof lastName !== 'string' ){
        throw 'please enter valid first name or last name'
    }
}

exports.getPersonBySocial = async (social) => {
    /* Function takes ssn if found then returns the person of who it belongs */
    const people = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    let person = people.data.find((item) => {
        if (item.ssn === social){
            return item;
        }
    })
    return person;
}

exports.getPersonByName = async (firstName, lastName) => {
    /* Function takes firstname and lastName if found then returns the person of who it belongs */
    validateName(firstName, lastName)
    const people = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    let person = people.data.find((item) => {
        if (item.firstName.toLowerCase() === firstName.toLowerCase() && item.lastName.toLowerCase() === lastName.toLowerCase()){
            return item;
        }
    })
    return person;
}

exports.getPersonById = async (id) => {
    /* Function takes id if found then check the ssn and returns the person's first and Last Name of who it belongs */
    validId(id);
    try{
        const people = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        validateBoundaries(id, people.data.length)
        let person = people.data.find((item) => item.id === id)
        return `${person.firstName} ${person.lastName}`;
    }
    catch(err){
        return err
    }

}

exports.lexIndex = async (index) => {
    /* Function sorts the people list by lastName then seach the index provided if found then returns the person's first and Last Name */
    validId(index);
    try{
        const people = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        validateBoundaries(index, people.data.length - 1)
        people.data.sort((a, b) => a.lastName.toLowerCase() === b.lastName.toLowerCase() ? 0 : a.lastName.toLowerCase() < b.lastName.toLowerCase() ? -1 : 1)
        let person = people.data[index];
        return `${person.firstName} ${person.lastName}`;
    }
    catch(err){
        return err
    }
}


exports.firstNameMetrics = async () => {
    /* Function returns an object of metrics with total number of letters, vowels, consonants found in first name
        it also returns the longest and shortest name from people list */
    metrics = {
        totalLetters: 0,
        totalVowels: 0,
        totalConsonants: 0,
        longestName: '',
        shortestName: ''
    }
    try{
        const people = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        for(let p of people.data){
            metrics.totalLetters += p.firstName.length;
            metrics.totalVowels += parseInt((p.firstName.match(/[aeiou]/gi) || []).length);
            metrics.totalConsonants += parseInt((p.firstName.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length)
            metrics.longestName = metrics.longestName.length === 0 ? p.firstName : (metrics.longestName.length < p.firstName.length) ? p.firstName : metrics.longestName
            metrics.shortestName = metrics.shortestName.length === 0 ? p.firstName : (metrics.shortestName.length < p.firstName.length) ? metrics.shortestName : p.firstName
        }
        return metrics
    }
    catch(err){
        return err
    }
}
