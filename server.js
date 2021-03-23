const express = require('express');
const app = express();
const Guitars = require('./models/Guitars.js')
const Basses = require('./models/Basses.js')
const Amps = require('./models/Amps.js')
const Acoustic = require('./models/Acoustic.js')
const cors = require('cors');

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/guitars', (req, res) => {
    res.send(Guitars)
})

app.get('/guitars/:brand', (req, res) => {
    let brandTobeFound = req.params.brand.charAt(0).toUpperCase() + req.params.brand.slice(1)
    res.send(Guitars.filter(guitar => guitar.brand == brandTobeFound))
})

app.get('/basses', (req, res) => {
    res.send(Basses);
})

app.get('/basses/:brand', (req, res) => {
    let brandTobeFound = req.params.brand.charAt(0).toUpperCase() + req.params.brand.slice(1)
    res.send(Basses.filter(item => item.brand == brandTobeFound))
})

app.get('/amps', (req, res) => {
    res.send(Amps);
})

app.get('/amps/:brand', (req, res) => {
    let brandTobeFound = req.params.brand.charAt(0).toUpperCase() + req.params.brand.slice(1)
    res.send(Amps.filter(item => item.brand == brandTobeFound))
})

app.get('/acoustic', (req, res) => {
    res.send(Acoustic);
})

app.get('/acoustic/:brand', (req, res) => {
    let brandTobeFound = req.params.brand.charAt(0).toUpperCase() + req.params.brand.slice(1)
    res.send(Acoustic.filter(item => item.brand == brandTobeFound))
})

app.listen(3000, () => console.log('Express running on port 3000'))