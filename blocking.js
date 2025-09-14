const crypto = require('crypto')

const a = 1234;
const b = 345;


// sync call - will block the main thread (don't use this)
const result = crypto.pbkdf2Sync('password', 'salt', 500000, 50, 'sha512');
console.log('first key is generated', result);

//async call
crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('password generated', key)
})

function sum(){
    return a + b;
}

const c = sum();

console.log('sum result', c);