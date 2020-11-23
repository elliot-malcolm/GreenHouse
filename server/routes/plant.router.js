const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  //R in CRUD
  let queryText = `SELECT * FROM "plant";`;
  pool.query(queryText).then((result) => [
    res.send(result.rows)
  ]).catch((error) => {
    console.log('error in get all the things', error);
    res.sendStatus(500);
  })
});


router.post('/', (req, res, next) => {
  //C in CRUD
    const name = req.body.name;
    const type = req.body.type
    const size = req.body.size
    const notes = req.body.notes
    const list = req.body.list
    const sci_name = req.body.scientific_name
    const image_url = req.body.image_url
  
  console.log('name, size', req.body.name, req.body.size);

  if (req.isAuthenticated()) {
    const queryText = `INSERT INTO "plant" (name, type, size, notes, list, sci_name, image_url)
      VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool
      .query(queryText, [name, type, size, notes, list, sci_name, image_url])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Plant creation failed ', err);
        res.sendStatus(500);
      });
    }
  });

router.delete('/:id', (req, res) => {
  // D in CRUD
    // if (req.isAuthenticated()) {
      let queryText = `DELETE FROM "plant" WHERE id = $1;`;
      // let testQuery = `
      // DELETE FROM "plant" 
      //   WHERE "id" = $1
      // `;
      // AND   "user_id" = $2
      pool.query(queryText, [req.params.id]).then((result) => {
        console.log('success deleting plant', result);
        res.send(result);
      }).catch((error) => {
        console.log('error in deleting plant', error);
        res.sendStatus(500);
      })
    // } else {
    //   res.sendStatus(403);
  });

  module.exports = router;
  