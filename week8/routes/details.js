const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;

router.get('/', (req, res) => {
    let errors = [];
    errors.push('id was not passed')
    return res.render('person/details',{ title: "Details page", errors: errors, hasErrors: true,  keywords: "people find" })
});

router.get('/:id', async (req, res) => {
    errors = []
    try{
        const person = await peopleData.getPersonById(req.params.id);
        if(!person){ 
            errors.push('Person not found')
            return res.render("person/details", {title: "Details page", errors: errors, hasErrors: true, keywords: "people find"})
        }
        return res.render('person/details', {title: "Details page", person: person, hasErrors: false, keywords: "people find"})
    }
    catch(e){
        errors.push(e.toString())
        return res.render("person/details", {
            title: "Details page",
            errors: errors,
            hasErrors: true,
            keywords: "people find"
        })
    }
});

module.exports = router;