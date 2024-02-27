const fs = require('fs');

const appendedData = ` Compared to other server-side languages, Node js has distinct advantages. Its asynchronouse model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.`

fs.appendFile('nodejs_architecture.txt',appendedData,function(err){
    if (err) {
        return console.error(err)
    }
    fs.readFile('nodejs_architecture.txt',function(err, data){
        if (err) {
            return console.error(err)
        }
        console.log(data.toString());
    })
})
