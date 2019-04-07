const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;

router.post('/', async (req, res) => {
    let errors = [];
    try{
        if(!req.body.name){
            errors.push("Please enter a name in the form")
            return res.status(400).render('person/search', {title: "People Found", hasErrors: true, errors: errors,  keywords: "people find" })
        }
        const people = await peopleData.getTwentyPeople(req.body.name);
        if(people.length !== 0){
            return res.render('person/search', {found: true, people: people, title: "People Found",  keywords: "people find"})
        }
        return res.render('person/search', {title: "People Found", found: false, message: `We're sorry, but no results were found for ${req.body.name}.`,  keywords: "people find"})
       
    }catch(e){
        errors.push(e.toString())
        return res.render("person/search", {
            title: "Details page",
            errors: errors,
            hasErrors: true,
            keywords: "people find"
        })
    };
});

module.exports = router;