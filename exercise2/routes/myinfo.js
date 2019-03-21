const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
    const myInfo = {
	name     : 'Jose Lara',
	dob      : '10/02',
	hometown : 'Santo Domingo, DR'
    };
    res.json(myInfo);
});

module.exports = router;