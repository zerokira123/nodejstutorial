const fs = require('fs');


// create a file

fs.writeFile('example.txt',"this is an example",(err) => {
    if(err)
    console.log(err);
    else
    {
     console.log('File successfully created');

     fs.readFile('example.txt','utf8',(err,file) => {
        if(err)
        console.log(err);
        else
        console.log(file);
     });
    }

// })

// Reanme a file

// fs.rename('example.txt','rename.txt',(err) =>{
//     if(err)
//     console.log(err);
//     else
//     console.log('succesfully renamed the file');
// });

// Append a file

// fs.appendFile('rename.txt',' some data being appended',(err) =>{
//     if(err)
//     console.log(err);
//     else
//     console.log('Successfully appended data to the file');
// });

// Delete a file

// fs.unlink('rename.txt',(err) => {
//     if(err)
//     console.log(err);
//     else
//     console.log('successfully deleted the file');
// });