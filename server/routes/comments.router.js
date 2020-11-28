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

 ////

 router.post('/', (req, res, next) => {
      const comment = req.body.comment
      const plant_id = req.body.user_id
    
    console.log('name, size', req.body.name, req.body.size);
  
    if (req.isAuthenticated()) {
      const queryText = `INSERT INTO "plant" (name, type, size, notes, list, sci_name, img_url, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
      pool
        .query(queryText, [name, type, size, notes, list, sci_name, img_url, user_id])
        .then(() => res.sendStatus(201))
        .catch((err) => {
          console.log('Plant creation failed ', err);
          res.sendStatus(500);
        });
      }
    });
   
    ////