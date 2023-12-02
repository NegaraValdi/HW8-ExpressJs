// Pemanggilan Express JS dan router untuk dapat digunakan
var express = require('express')
var router = express.Router()

// Pemanggilan pool yang sudah ditulis di query.js
const pool = require('../query')
const router = express.Router

// Query module untuk menampilkan seluruh list category film yang terdapat pada sampel data
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM category`, (err, res) => {
        if (err) {
            throw err
        }
        res.send (results.rows[0])
    })
})

// Query module untuk menampilkan data film tertentu dari category filmnya
router.get ('./:category', (req, res) => {
    pool.query (`SELECT * FROM film_category fc INNER JOIN film f ON fc.film_id = f.film.id INNER JOIN category c ON fc.category.id = c.category_id WHERE c.name = '${req.params.category}'`,
    (err, res) => {
        if (err) {
            throw err
        }
        res.send (results.rows[0])
    }
    )
})

// Exports router agar dapat dipanggil
module.exports = router