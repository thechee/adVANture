const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/advanture';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database Connected');
});

const app = express();



app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, '/public')))



app.get('/', (req, res) => {
    res.send('This is the first page of the Advanture')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.listen(4000, () => {
    console.log(`Serving on port 4000`)
})