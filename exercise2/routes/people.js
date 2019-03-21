const express = require("express");
const router = express.Router();
const { peopleData } = require("../data/index");

router.get("/:id", async (req, res) => {
  try {
    let id = parseInt(req.params.id)
    const person = await peopleData.getPersonById(id);
    res.json(person);
  } catch (e) {
    res.status(404).json({ message: "Person not found" });
  }
});

router.get("/", async (req, res) => {
  try {
    const peopleList = await peopleData.getPeople();
    res.json(peopleList);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
