const fs = require('fs');

fs.readFile('nodejs_architecture.txt', function(err, data){
    if (err) {
        return console.error(err)
    }
    console.log(data.toString());
})
