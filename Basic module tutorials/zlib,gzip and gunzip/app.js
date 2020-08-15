const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

// const readstream = fs.createReadStream('./example.txt');
//  const writeStream = fs.createWriteStream('./example2.txt.gz');
//  readstream.pipe(gzip).pipe(writeStream);


const readstream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('./uncompressed.txt');
readstream.pipe(gunzip).pipe(writeStream);