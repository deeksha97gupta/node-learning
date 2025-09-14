const fs = require('fs');
const https = require('https');

console.log('hello world');
const a = 12345;
const b = 345;

https.get("https://dummyjson.com/products/1", (res) => {
    console.log('fetched successfully');
})

setTimeout(() => {
    console.log('timeout called after 5 sec');
}, 5000)

fs.readFile('./file.txt', 'utf8', (err, data) => {
    console.log('reading File', data);
})

function sum(){
    return a + b;
}

const c = sum();

console.log('sum result', c);