const Jimp = require('jimp'); // https://www.npmjs.com/package/jimp


const testFolder = './tests/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})


Jimp.read('1.JPG')
  .then(image => {
    return image
        .scaleToFit( 200, 200 )
        // .resize(256, 256) // resize
        // .quality(60) // set JPEG quality
        // .greyscale() // set greyscale
        .write('1-small.jpg'); // save
  })
  .catch(err => {
    console.error(err);
  });