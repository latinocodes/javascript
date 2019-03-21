const express = require("express");
const router = express.Router();
const educationData = require("../data/educationData")

router.get("/", (req, res) => {
  try {
    res.json(educationData);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
