const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

 ////

router.get('/', (req, res) => {
  let queryText = `SELECT * FROM "comments";`;
  pool.query(queryText).then((result) => [
    res.send(result.rows)
  ]).catch((error) => {
    console.log('error in get all the things', error);
    res.sendStatus(500);
  })
});

 router.post('/', (req, res) => {
      const commentPass = req.body.comment
      const commentor_name = req.body.commentor_name
      const plant_id = req.body.plant_id
    
    console.log('name, size', req.body.name, req.body.size);
  
    if (req.isAuthenticated()) {
      const queryText = `INSERT INTO "comments" (comment, commentor_name, plant_id)
        VALUES ($1, $2, $3);`;
      pool
        .query(queryText, [commentPass, commentor_name, plant_id])
        .then(() => res.sendStatus(201))
        .catch((err) => {
          console.log('Plant creation failed ', err);
          res.sendStatus(500);
        });
      }
    });
   
    ////

    module.exports = router;