const request = require('request');

//this function requests a url and if there is an error it logs the errors and ends
//OR if there is no error, logs the body.
request(url, function(err,response,body){
  if(err){
    console.log('error:',error);
  }
  else{
    console.log('body:',body);
  }

});

function hi(){
  console.log(3);
}
