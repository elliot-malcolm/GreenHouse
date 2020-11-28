const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

 ////

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

 ////

router.post('/', (req, res, next) => {
  //C in CRUD
    const name = req.body.name;
    const type = req.body.type
    const size = req.body.size
    const notes = req.body.notes
    const list = req.body.list
    const sci_name = req.body.sci_name
    const img_url = req.body.img_url
    const user_id = req.body.user_id
  
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

router.get('/:id', (req, res) => {
  const queryText = `SELECT * FROM "plant" WHERE "id"=$1`
  pool.query(queryText, [req.params.id]).then((result) => [
    res.send(result.rows)
  ]).catch((error) => {
    console.log('error in getby ID', error);
    res.sendStatus(500);
  })
});

 ////

router.delete('/:id', (req, res) => {
  // D in CRUD
    // if (req.isAuthenticated()) {
      let queryText = `DELETE FROM "plant" WHERE id = $1;`;
      pool.query(queryText, [req.params.id]).then((result) => {
        console.log('success deleting plant', result);
        res.send(result);
      }).catch((error) => {
        console.log('error in deleting plant', error);
        res.sendStatus(500);
      })
    // } else {
    //   res.sendStatus(403);
    // }
  });


router.put('/:id', (req, res) => {
  console.log('put router body + params', req.body, req.params);
 
    const name = req.body.name;
    const type = req.body.type
    const size = req.body.size
    const notes = req.body.notes
    const list = req.body.list
    const sci_name = req.body.sci_name
    const img_url = req.body.img_url
    const id = req.params.id

  if (req.isAuthenticated()) {

        const queryText = 
        `UPDATE "plant" SET 
          "name" = $1, 
          "type" = $2, 
          "size" = $3, 
          "notes" = $4, 
          "list" = $5, 
          "sci_name" = $6, 
          "img_url" = $7 
        WHERE "id" = $8;`;
        pool.query(queryText, [name, type, size, notes, list, sci_name, img_url, id]).then((result) => {
          console.log('success updating plant', result);
          res.sendStatus(200);
        }).catch((error) => {
          console.log('error in updating plant', error);
          res.sendStatus(500);
        })
      } else {
        res.sendStatus(403);
    };
  });

  module.exports = router;
  