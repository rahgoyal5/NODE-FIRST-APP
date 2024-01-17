const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  /**
   * express by default is using pug as dynamic template engine as we
   * mentioned in app.js
   * dont need to give .pug extension as we have set pug as engine
   * so it will only look for .pug files
   */
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.lengh > 0,
    activeShop: true,
    productCSS: true,
    layout: false
  });
});

module.exports = router;
