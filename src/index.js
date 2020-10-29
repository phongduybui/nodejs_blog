const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const port = 3000;

//Config static file (img, css...)
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');

//Config views folders
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'));
 

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/news', function (req, res) {
    res.render('news');
});
// 127.0.0.1 - localhost
app.listen(port, () => console.log(`App listening at port http://localhost:${port}`))