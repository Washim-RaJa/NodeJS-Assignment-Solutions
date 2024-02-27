const eventEmitter = require('events');

const myEmitter = new eventEmitter();

myEmitter.on('subscribe', (msg)=>{
    console.log(`Thanks For Subscribing to ${msg}`);
})

myEmitter.emit('subscribe', 'College Wallah');