const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Update a plant's information
router.put('/:id', (req, res, next) => {
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
          "img_url" = $7, 
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
    