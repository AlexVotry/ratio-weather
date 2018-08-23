var express = require('express');
var Request = require('request');
var router = express.Router();

/* GET weather info. */
router.get('/:location', function(req, res, next) {
  let location = req.params.location;
  const weatherUrl = 'https://api.darksky.net/forecast/60cd0dc0048d10e5834fcc2dbf43d40b'
  Request.get(`${weatherUrl}/${location}`, (error, response, body) => {
    if(error) {
      return console.log(error);
    }
    res.send(body);
  });

});


module.exports = router;
