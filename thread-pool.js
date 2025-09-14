const fs = require('fs')
const crypto = require('crypto')

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('password generated 1')
})

fs.readFile('./file.txt', 'utf8', () => {
    copnsole.log(' file reading done')
})

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('password generated 2')
})