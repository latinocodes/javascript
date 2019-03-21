const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
      res.json({
          "name": "Jose Lara",
          "cwid": "10416385",
          "biography": "I'm originally from the Dominincan Republic, came to the United States at Age 14.\nIt was very difficult to leave at first, but now I don't see myself living anywhere else but New Jersey :)",
          "favoriteShows": ["Friends", "How I met your mother", "Jersey Shore"],
          "hobbies": ["Programming", "Basketball", "Watch TV"],
      });
    } catch (e) {
      res.status(500).send();
    }
  });


  module.exports = router;