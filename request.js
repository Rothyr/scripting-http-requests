var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         console.log('Error Encounted')
       })
       .on('response', function (response) {
         console.log('Response Status Code is: ' + response.statusCode);
         console.log('Reponse status message is: ' + response.statusMessage);
          console.log('Content type is: ' + response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));