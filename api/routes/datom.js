const express = require('express');
const router = express.Router();

// middleware
const { auth, requireAuth } = require('../../middleware');

//controllers
const { 
    createDatom, 
    appendDatom, 
    getDatom,
    } = require('../../controllers/datom');

/*
router
  .route('/')
  .post(auth, createDatom)
  .get(auth, getDatom);

router
  .route('/:key')
  .get(auth, getDatom)
  .put(auth, appendDatom)
*/

router.get('/', function(req, res, next) {
    res.send('Datoms is ready');
});

module.exports = router;