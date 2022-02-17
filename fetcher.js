const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

const URL = args[0];
const PATH = args[1];

request(URL, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  };
  fs.writeFile(PATH, body, err => {
    if (err) {
      console.error(err)
      return
    }
    const fileSize = fs.statSync(PATH).size;
    console.log(`Downloaded and saved ${fileSize} bytes to ${PATH}`);
  })

});