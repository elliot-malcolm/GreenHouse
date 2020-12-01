const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// AWS image upload in progress

router.post('/', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = router;
