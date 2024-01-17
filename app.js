const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/**
 * global variables for ejs dynamic
 * template engine
 * it tells to use ejs as view engine and find all views
 * in the views folder
 */
app.set('view engine', 'ejs');
app.set('views', 'views');

// controllers
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

/**
 * middlewares for body parsing and
 * serving static files to client
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * routing logic is implemented using
 * middleware func use() feature of expressjs
 */
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
