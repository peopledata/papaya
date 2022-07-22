const express = require('express');
const router = express.Router();

// middleware
const { auth, requireAuth } = require('../middleware');

const {
  createCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categories');

router
  .route('/')
  .post(auth, requireAuth, createCategory)
  .get(auth, getsingleCategories);

router
  .route('/:id')
  .get(auth, getSingleCategory)
  .put(auth, requireAuth, updateCategory)
  .delete(auth, requireAuth, deleteCategory);


module.exports = router;