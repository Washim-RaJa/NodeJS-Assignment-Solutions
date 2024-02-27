const eventEmitter = require('events');

const myEmitter = new eventEmitter();

const listener = ()=>{
    console.log(`Event triggered successfully !`);
}
myEmitter.addListener('calling', listener)

myEmitter.emit('calling');

// removing the event
myEmitter.off('calling', listener);

myEmitter.emit('calling');      // It won't print any results since the event got removed now.

