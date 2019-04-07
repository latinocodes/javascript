const axios = require('axios');

const validId = (id) => {
    /* Function validates id are of proper type and that are valid */
    let newId = parseInt(id)
    if(isNaN(newId)){ throw 'number provided is not a number'}
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

    try{
        validId(id);
        const people = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        validateBoundaries(parseInt(id), people.data.length)
        let person = people.data.find((item) => item.id === parseInt(id));
        return person;
    }
    catch(err){ throw err; }
}

exports.getTwentyPeople = async (name) => {
    try{
        let newList = [];
        const people = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        people.data.find((item) => {
            if(item.firstName.includes(name) || item.lastName.includes(name)){
                if(newList.length < 20){ newList.push(item)}
            }
        })
        return newList;
    }
    catch(err){ throw err; }
}
