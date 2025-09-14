const fs = require('fs');

const a = 100;

setImmediate(() => console.log('set immediate is called'));

Promise.resolve("promise").then(() => console.log('promice is called'));

fs.readFile('./file.txt', 'utf8', (err, data) => {
    setImmediate(() => console.log('set  2 immediate is called'));

    process.nextTick(() => {console.log('process.nextTick 2')});

    setTimeout(() => { console.log('timer run 2')}, 0)
    
    console.log('reading file done')
})

setTimeout(() => { console.log('timer run')}, 0)

process.nextTick(() => {console.log('process.nextTick')});

function printA() {
    console.log('a =', a);
}

printA();

console.log('last line of code')



// output
/*
    a = 100
    last line of code
    process.nextTick
    promice is called
    timer run
    set immediate is called
    reading file done
    process.nextTick 2
    set  2 immediate is called
    timer run 2
*/