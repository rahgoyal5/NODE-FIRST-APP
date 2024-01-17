const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '..', 'data', 'products.json');

const getProductFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log('🚀 ~ Product ~ fs.writeFile ~ err:', err);
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
};
