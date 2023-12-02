// Pemanggilan Express JS dan router untuk dapat digunakan
const express = require('express')
const router = express.Router()

// Pemanggilan pool yang sudah ditulis di query.js
const pool = require('../query')

// Query module untuk menampilkan seluruh list film yang terdapat pada sampel data
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM film`, (err, res) => {
        if (err) {
            throw err
        }
        res.send (results.rows[0])
    })
})

// Query module untuk menampilkan data film tertentu dari id
router.get ('./:id', (req, res) => {
    pool.query (`SELECT * FROM film WHERE film_id = ${req.params.id}`,
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