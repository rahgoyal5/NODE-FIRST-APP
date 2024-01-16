const express = require('express');
const path = require('path');
// const rootDir = require('../utils/path');
const router = express.Router();

router.use('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.get('/product', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
