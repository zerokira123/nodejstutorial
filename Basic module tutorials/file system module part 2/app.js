const fs = require('fs');

//creating an Folder and File

// fs.mkdir('tutorial',(err)=>{
//     if(err)
//     console.log(err);
//     else{
//          console.log('Folder was succcesfully Created');
//          fs.writeFile('./tutorial/example.txt','123',(err) => {
//             if(err)
//             console.log(err);
//             else{
//                 console.log('Successfully created file')
//             }
//         });

//     }
// });


//Deleting an Folder and File

// fs.unlink('./tutorial/example.txt',(err) => {

//     if(err)
//     console.log(err);
//     else
//     {
//     console.log('successfully deleted the file');
//         fs.rmdir('tutorial',(err)=>{

//             if(err)
//                 console.log(err);
//             else{
//                 console.log('Folder was Deleted successfully');
//             }

//         });
//     }
// });

// delting multiple files in a directory

fs.readdir('example',(err,files) => {
    if(err)
    console.log(err);
    else{
        for(let file of files)
        fs.unlink('./example/' + file,(err) =>{

            if(err)
            console.log(err);
            else{
                console.log('successfully deleted file')
            }

        });
    }

});