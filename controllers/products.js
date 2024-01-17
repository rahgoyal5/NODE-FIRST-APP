const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formCSS: true,
    prodcutCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  /**
   * express by default is using ejs as dynamic template engine as we
   * mentioned in app.js
   * dont need to give .ejs extension as we have set ejs as engine
   * so it will only look for .ejs files
   */
  Product.fetchAll((products) => {
    console.log('🚀 ~ Product.fetchAll ~ products:', products);
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
};
