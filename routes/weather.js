var express = require('express');
var Request = require('request');
var router = express.Router();

/* GET weather info. */
router.get('/:location', function(req, res, next) {
  let location = req.params.location;
  const weatherUrl =  process.env.WEATHER_API;

  Request.get(`${weatherUrl}/${location}`, (error, response, body) => {
    if(error) {
      return console.log(error);
    }
      console.log('ENV: ', process.env.WEATHER_API);
    res.send(body);
  });

});

module.exports = router;
