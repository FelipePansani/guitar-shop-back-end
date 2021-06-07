const express = require('express');
const app = express();
const Guitars = require('./models/Guitars.js')
const Basses = require('./models/Basses.js')
const Amps = require('./models/Amps.js')
const Acoustic = require('./models/Acoustic.js')
const path = require("path");
const cors = require('cors');
require('dotenv');

const whiteList = []

const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/:category', (req, res) => {
    let categoryToBeFound = req.params.category;

    switch (categoryToBeFound) {
        case "guitars":
            res.send(Guitars)
            break;
        case "amps":
            res.send(Amps)
            break;
        case "basses":
            res.send(Basses)
            break;
        case "acoustic":
            res.send(Acoustic)
            break;
        default:
            res.send("Page not found")
    }
})

app.get('/guitars/:brand', (req, res) => {
    let brandToBeFound = req.params.brand;

    if (brandToBeFound == 'allguitars') {
        res.send(Guitars)
    }
    else {
        res.send(Guitars.filter(guitar => guitar.brand.toLowerCase() == brandToBeFound))
    }
})

app.get('/basses/:brand', (req, res) => {
    let brandToBeFound = req.params.brand;

    if (brandToBeFound == 'allbasses') {
        res.send(Basses)
    }
    else {
        res.send(Basses.filter(item => item.brand.toLowerCase() == brandToBeFound))
    }
})

app.get('/amps/:brand', (req, res) => {
    let brandToBeFound = req.params.brand;

    if (brandToBeFound == 'allamps') {
        res.send(Amps)
    }
    else {
        res.send(Amps.filter(item => item.brand.toLowerCase() == brandToBeFound))
    }
})

app.get('/acoustic/:brand', (req, res) => {
    let brandToBeFound = req.params.brand;

    if (brandToBeFound == 'allacoustic') {
        res.send(Acoustic)
    }
    else {
        res.send(Acoustic.filter(item => item.brand.toLowerCase() == brandToBeFound))
    }
})

// >> Entrar em cada produto << //
app.get('/guitars/item/:product', (req, res) => {
    res.send(Guitars.filter(item => item.id == req.params.product))
})

app.get('/basses/item/:product', (req, res) => {
    res.send(Basses.filter(item => item.id == req.params.product))
})

app.get('/amps/item/:product', (req, res) => {
    res.send(Amps.filter(item => item.id == req.params.product))
})

app.get('/acoustic/item/:product', (req, res) => {
    res.send(Acoustic.filter(item => item.id == req.params.product))
})
// >> Entrar em cada produto << //

const port = process.env.PORT;

app.listen(port, () => console.log(`BACKEND is running on port ${port}.`))