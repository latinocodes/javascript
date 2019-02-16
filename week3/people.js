const validId = (id, listLength) => {
    if(typeof id !== 'number'){
        throw 'id must be a number';
    }
    else if(id <= 0){
        throw 'id must be greater than 0';
    }
    else if(id > listLength){
        throw 'id is out of bounds';
    }
    else{
        return true;
    }
}


exports.getPersonById = (id) => {

}

exports.lexIndex = (index) => {

}


exports.firstNameMetrics = () => {
    metrics = {
        totalLetters: '',
        totalVowels: '',
        totalConsonants: '',
        longestName: '',
        shortestName: ''
    }


}

try{
    console.log(validId("61", 50))
}
catch(err){
    console.log(err)
}

// await getPersonById(-1)
// await getPersonById(1000) \\ Throws Error
// await getPersonById() \\ Throws Error