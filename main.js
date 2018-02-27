let request = require('request');

const argv = require('yargs').argv;

//OpenWeatherMap API
let apiKey = "c033c7d88ddd656c159ed45f9a39923e";
let city = argv.c || "London";
//note that to use template literals like ${} you need to use backticks ``
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
//let url = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=c033c7d88ddd656c159ed45f9a39923e";

//this function requests a url and if there is an error it logs the errors and ends
//OR if there is no error, logs the body.

request(url, function(err,res,body){
  if(err){
    console.log('error:',err);
  }
  else{
    let weather = JSON.parse(body);
    let message = `${weather.name}'s Temperature:${weather.main.temp} Degrees`;
    console.log(message);
  }
});
//console.log(ci)
