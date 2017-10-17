const SimpleEventEmitter = require('./simple-event-emitter.js');

let myEmitter  = new SimpleEventEmitter(250);

myEmitter.on('all', (value) => {
    console.log(`ALL: ${value}`);
});

myEmitter.on('even', (value) => {
    console.log(`EVEN: ${value}`);
});

myEmitter.on('odd', (value) => {
    console.log(`ODD: ${value}`);
});