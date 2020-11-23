const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {

  let queryText = `SELECT * FROM "plant_type";`;
  pool.query(queryText).then((result) => [
    res.send(result.rows)
  ]).catch((error) => {
    console.log('error in get all the things', error);
    res.sendStatus(500);
  })
});


// router.post('/', (req, res, next) => {

//     const type = req.body.type
//     const scientific_name = req.body.scientific_name
//     const image_url = req.body.image_url
  
//   console.log('type, sciName, img', req.body.type, req.body.scientific_name, req.body.image_url);

//   if (req.isAuthenticated()) {
//     const queryText = `INSERT INTO "plant_type" (type, scientific_name, image_url)
//       VALUES ($1, $2, $3);`;
//     pool
//       .query(queryText, [type, scientific_name, image_url])
//       .then(() => res.sendStatus(201))
//       .catch((err) => {
//         console.log('Plant creation failed ', err);
//         res.sendStatus(500);
//       });
//     }
//   });

  module.exports = router;
  