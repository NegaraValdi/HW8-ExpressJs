// Pemanggilan fs untuk melakukan read / write file
const fs = require('fs')
const pool = require('../query')

// Pembuatan variabel seedQuery untuk membaca file
const seedQuery = fs.readFileSync('seeding/seeding.sql', {encoding: utf8})

pool.query (seedQuery, (err, res) => {
    console.log(err)
    console.log('Seeding Complete!')
    pool.end()
})