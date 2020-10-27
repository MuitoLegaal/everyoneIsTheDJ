var express = require('express');
var router = express.Router();
var mongoose = require('../bdd/connexion');
var HoteModel = require('../bdd/SchemaHote');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function(req, res, next) {
  var hotes = await HoteModel.findOne({email: req.body.email});

  if(hotes === null){

    var newHote = new HoteModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
  
    var hoteSaved = await newHote.save();
    console.log('welcome')
    res.json({result: true, hote: hoteSaved})
  }else{
    console.log('not welcome')
    res.json({result: false, hote: hoteSaved})
  }
  
  
  
  

  
})


router.post('/sign-in', async function(req, res, next) {
  var hotes = await HoteModel.findOne({email: req.body.email, password: req.body.password});

  if(hotes === null){
    console.log('no')
    res.json({result: false, user: hotes})
  }else{
    console.log('yes')
    res.json({result: true, user: hotes})
  }

  
})

module.exports = router;
