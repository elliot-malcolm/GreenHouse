// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// /**
//  * GET route template
//  */
// router.get('/', (req, res) => {
//   // GET route code here
// });

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });

// module.exports = router;

// // is that the password gets encrypted before being inserted
// router.post('/register', (req, res, next) => {

//     const username = req.body.username;
//     const password = encryptLib.encryptPassword(req.body.password);
//     const full_name = req.body.full_name
//     const favorite_plant = req.body.favorite_plant
//     const ecological_region = req.body.ecological_region
  
//     const queryText = `INSERT INTO "user" (username, password, full_name, favorite_plant, ecological_region)
//       VALUES ($1, $2, $3, $4, $5) RETURNING id`;
//     pool
//       .query(queryText, [username, password, full_name, favorite_plant, ecological_region])
//       .then(() => res.sendStatus(201))
//       .catch((err) => {
//         console.log('User registration failed: ', err);
//         res.sendStatus(500);
//       });
//   });
  