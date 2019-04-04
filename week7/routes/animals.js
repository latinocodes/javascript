const express = require('express');
const router = express.Router();
const data = require('../data');
const animalsData = data.animals;

router.get('/', async (req, res) => {
  try{
    const animals = await animalsData.getAll();
    return res.json(animals)
  }
  catch(e) { res.sendStatus(500); }
});

router.get('/:id', async (req, res) => {
    try {
      if(!req.params.id) throw 'id must be provided and valid';
      if(typeof req.params.id !== 'string') throw 'please provide a valid id of type string'

      const animal = await animalsData.get(req.params.id);
      if(animal === null) { return res.status(404).json({error: "animal not found"}); }
      return res.status(200).json(animal);
    } catch(e) { res.sendStatus(500); }
  });

  router.post('/', async (req, res) => {
    const info = req.body;
    if(!info){ return res.status(400).json({error: "You must provide data"}); }
    if(!info.name){ return res.status(400).json({error: "You must provide a name for the animal"}); }
    if(!info.animalType){ return res.status(400).json({error: "You must provide an animal type"}); }

    try{
      const newAnimal = await animalsData.create(
        info.name,
        info.animalType
      );
      return res.json(newAnimal);
    }
    catch(e){
      return res.sendStatus(500);
    }
  });

  router.put('/:id', async (req, res) => {
    const info = req.body;
    if(!info){ res.status(400).json({error: "You must provide data"}); }
    if(!info.name && !info.animalType){ res.status(400).json({error: "You must provide data for the animal"}); }

    try {
      const animal = await animalsData.get(req.params.id);
      if(!animal) { return res.status(404).json({error: "animal not found"}); }
      const updatedAnimal = await animalsData.update(req.params.id, info.name, info.animalType);
      return res.status(200).json({updatedAnimal})

    } catch (e) {
      return res.sendStatus(500);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      // Check if id exist
      const animal = await animalsData.get(req.params.id);
      if(!animal){ return res.status(404).json({error: "user not found"}); }
      await animalsData.remove(req.params.id);
      return res.status(200).json({delete: true, data: animal});

    } catch (error) { return res.sendStatus(500); }
  });

  module.exports = router;