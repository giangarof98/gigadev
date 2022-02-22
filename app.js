const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'))
app.use(express.static("style"));

app.get('/portofolio', (req, res) => {
    res.render('Home');
})

app.listen(3000, () => {
    console.log('server running')
})