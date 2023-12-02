// Pemanggilan ExpressJs dan penggunaannya menggunakan "var app"
var express = require('express')
var app = express()
const router = require('./query')

const films = require ('./routes/films')
const categories = require ('./routes/category')

// Menggunakan callback function tentukan endpoint utamanya
app.get('/', (req, res) => {
    res.send('HW8 - Express Js & Database Integration')
})

// Menggunakan Express router untuk memudahkan pengambilan data sesuai kebutuhan
app.use('/films', films)
app.use('/categories', categories)

app.use(router)

app.listen(3000)