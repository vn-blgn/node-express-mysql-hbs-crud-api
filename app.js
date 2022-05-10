const express = require("express");
const exphbs = require('express-handlebars');
require('dotenv').config();
const path = require('path');
const lib = require('./lib/helpers');
const port = (process.env.PORT || 3000);

const indexRouter = require('./routes/index');
const createRouter = require('./routes/create');
const editRouter = require('./routes/edit');
const deleteRouter = require('./routes/delete');

const app = express();

const hbs = exphbs.create({
    defaultLayout: "layout",
    helpers: lib.helpers,
    extname: '.hbs',
    partialsDir: path.join(__dirname, 'views/partials/'),
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/create', createRouter);
app.use('/edit', editRouter);
app.use('/delete', deleteRouter);

app.listen(port, () => {
    console.log("http://localhost:3000/");
});