var express = require('express');
var router = express.Router();
var mongoose = require('../bdd/connexion');
var uid2 = require('uid2')
var SHA256 = require('crypto-js/sha256')
var encBase64 = require('crypto-js/enc-base64')
var HoteModel = require('../bdd/SchemaHote');
var eventModel = require('../bdd/SchemaEvent')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function (req, res, next) {
  var hotes = await HoteModel.findOne({ email: req.body.email });

  if (hotes === null) {

    var newHote = new HoteModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })

    var hoteSaved = await newHote.save();
    console.log('welcome')
    res.json({ result: true, hote: hoteSaved })
  } else {
    console.log('not welcome')
    res.json({ result: false, hote: hoteSaved })
  }
})


router.post('/sign-in', async function (req, res, next) {
  var hotes = await HoteModel.findOne({ email: req.body.email, password: req.body.password });

  if (hotes === null) {
    console.log('no')
    res.json({ result: false, user: hotes })
  } else {
    console.log('yes')
    res.json({ result: true, user: hotes })
  }


})


router.post('ajout-titre', async function (req, res, next) {


}
)

router.post('enregistrement', async function (req, res, next) {

  var error = []
  var result = false
  var eventExist = null


  if (req.body.pseudoFromFront == ''
    || req.body.eventIdFromFront == ''
    || req.body.eventPasswordFromFront == '') {
    error.push('champs vides')
  }

  if (error.length == 0) {
    const eventExist = await eventModel.findOne({
      id: req.body.eventIdFromFront,
    })

    if (eventExist) {

      // const passwordEncrypt = SHA256(req.body.passwordFromFront + user.salt).toString(encBase64)

      if (req.body.eventPasswordFromFront == eventExist.password) {
        result = true

      } else {
        result = false
        error.push('mot de passe incorrect')
      }

    } else {
      error.push('ID incorrect')
    }
  }

  res.json({ result, eventExist, error })
})

router.post('eventcreation', async function (req, res, next) {

  var error = []
  var result = false
  var saveEvent = null

  if (req.body.nameFromFront == ''
    || req.body.eventPasswordFromFront == '') {
    error.push('champs vides')
  }

  if (req.body.eventPasswordFromFront.length < 3){
    error.push('mot de passe trop court')
  }

  if (error.length == 0) {

    var newEvent = new eventModel({
      nameEvent: req.body.eventNameFromFront,
      password: req.body.password,
      //id: uid2(4)
    })
    
    saveEvent = await newEvent.save()
    
    if(saveUser){
      result = true
    }  
  }

  res.json({ result, eventExist, error })
})

module.exports = router;
