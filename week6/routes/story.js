const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
      res.json({
          "storyTitle": "I can't come out with an story!",
          "story": "I really suck at making up stories. So yea! lol :)"
      });
    } catch (e) {
      res.status(500).send();
    }
  });

  module.exports = router;