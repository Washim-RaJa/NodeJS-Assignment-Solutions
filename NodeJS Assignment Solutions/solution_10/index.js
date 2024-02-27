const eventEmitter = require('events');

const myEmitter = new eventEmitter();

myEmitter.on('subscribe', (msg)=>{
    console.log(`Thanks For Subscribing to ${msg}`);
})

myEmitter.emit('subscribe', 'College Wallah');

console.log(`The default maximum number of event listeners are: ${myEmitter.getMaxListeners()}`);

myEmitter.setMaxListeners(5)

console.log(`The updated maximum number of event listeners are: ${myEmitter.getMaxListeners()}`);
