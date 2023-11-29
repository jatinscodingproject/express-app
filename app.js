const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error = require('./controllers/error')
const contactus = require('./routes/contact-us')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData);
app.use(shopRoutes);
app.use(contactus)

app.use(error.geterror)

app.listen(3000);
