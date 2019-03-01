const axios = require('axios');
const people = require('./people');

exports.shouldTheyGoOutside = async (firstName, lastName) => {
    /* Function takes firstname and last name calls get personByName from people if found then check the zipcode for
        the weather in that zipcode and returns whether the person should go out or not if weather is >= 34 */
    try{
        let person = await people.getPersonByName(firstName, lastName);
        if(person){
            const weather = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json');
            let temperature = weather.data.find((item) => item.zip === person.zip);
            if (temperature.temp >= 34){ return `Yes, ${person.firstName} should go outside."`}
            return `No, ${person.firstName} should not go outside."`;
        }
        else{ throw 'person does not exist' }
    }
    catch(err){
        return err
    }    
}