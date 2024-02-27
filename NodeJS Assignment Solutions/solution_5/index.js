const fs = require('fs');

fs.unlink('nodejs_architecture.txt', function(err){
    if (err) {
        return console.error(err)
    }
    console.log('File Deleted Successfully');
})

/* Run the above code to delete the file "nodejs_architecture.txt", which is present in
" NodeJS Assignment Solutions\solution_5 " directory */