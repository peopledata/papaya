const express = require('express');
const router = express.Router();

// middleware
const { auth, requireAuth } = require('../../middleware');

// route
const {
  createCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require('../../controllers/categories');

router.get('/', function(req, res, next) {
  res.send('Category API is ok');
});

router.get('/create', function(req, res, next) {

  res.send('Create category...');
  //todo 
});

/*
router
  .route('/')
  .post(auth, requireAuth, createCategory)
  .get(auth, getSingleCategory);

router
  .route('/:id')
  .get(auth, getSingleCategory)
  .put(auth, requireAuth, updateCategory)
  .delete(auth, requireAuth, deleteCategory);
*/


module.exports = router;