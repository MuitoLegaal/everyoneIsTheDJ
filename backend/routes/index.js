var express = require('express');
var router = express.Router();
var mongoose = require('../bdd/connexion');
var uid2 = require('uid2');
var SHA256 = require('crypto-js/sha256');
var encBase64 = require('crypto-js/enc-base64');
var hoteModel = require('../bdd/SchemaHote');
var eventModel = require('../bdd/SchemaEvent');
var tourdevoteModel = require('../bdd/SchemaTourdevote')
var top124Model = require('../bdd/SchemaTop50');


// /* Web Socket */


//var io = require('socket.io')(server);

// io.on('connection', function(socket){
//   console.log('a user connected');
// });



/* GET home page. */

// -------------------- route du TOP124 --------------------------------------------------------
router.post('/findTOP', async function(req,res,next){

  var TOP = await top124Model.find();
  
  res.json({TOP})
  
  console.log(TOP)
  })
  



router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function (req, res, next) {

  var hotes = await hoteModel.findOne({ email: req.body.email });

  if (hotes === null) {

    var newHote = new hoteModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })

    var hoteSaved = await newHote.save();
    console.log('welcome')
    res.json({ result: true, hote: hoteSaved })
  } else {
    console.log('not welcome')
    res.json({ result: false, hote: hotes })
  }


})


router.post('/sign-in', async function (req, res, next) {
  var hotes = await hoteModel.findOne({ email: req.body.email, password: req.body.password });

  if (hotes === null) {
    console.log('no')
    res.json({ result: false, user: hotes })
  } else {
    console.log('yes')
    res.json({ result: true, user: hotes })
  }

})


router.post('/ajout-titre', async function (req, res, next) {


}
)

router.post('/enregistrement', async function (req, res, next) {

  var error = []
  var result = false
  var eventExist = null


  if (req.body.pseudoFromFront == ''
    || req.body.eventIdFromFront == ''
    || req.body.eventPasswordFromFront == '') {
    error.push('/champs vides')
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

router.post('/eventcreation', async function (req, res, next) {

  var error = []
  var result = false
  var saveEvent = null

  if (req.body.eventNameFromFront == ''
    || req.body.eventPasswordFromFront == '') {
    error.push('champs vides')
  }

  if (req.body.eventPasswordFromFront.length < 3) {
    error.push('mot de passe trop court')
  }

  if (error.length == 0) {

    var newEvent = new eventModel({
      user: req.body.idUserFromFront,
      nameEvent: req.body.eventNameFromFront,
      date: new Date(),
      isOpen: true,
      eventId: uid2(4),
      password: req.body.eventPasswordFromFront,
    })

    var saveEvent = await newEvent.save()

    //  RENDRE IS OPEN FALSE LES AUTRES EVENTS A LA CREATION D UN NOUVEL EVENT
    // saveEvent = await newEvent.update(
    //   {'id': {"$ne": saveEvent._id}, 'nameEvent': req.body.eventNameFromFront }, {isOpen: false}
    // )

    var eventIsOpen = await eventModel.findOne({
      isOpen: true,
    })

    var eventIsClosed = await eventModel.findOne({
      isOpen: false,
    })

    if (saveEvent) {
      result = true
    }
  }
  res.json({ result, eventIsOpen, eventIsClosed, error })
})





router.post('/tourdevotecreation', async function (req, res, next) {

  var result = false
  

  var isEventOpen = await eventModel.findOne(
    { isOpen: true, user: req.body.idUserFromFront }
  )

  console.log("event", isEventOpen);

  var newTourdevote = new tourdevoteModel({
    event: isEventOpen._id,
    date: new Date(),
    isOpen: true,
    participants: []
  })

 var saveTourdevote = await newTourdevote.save();

  console.log("tourdevote", saveTourdevote);

  if (saveTourdevote!=null) {
    console.log('result')
    res.json({result: true})
  }

  else{
  res.json({ result: false })
  }

}
)





router.post('/vote', async function (req, res, next) {

  var isTourdevoteOpen = await tourdevoteModel.findOneAndUpdate(
    { isOpen: true },
    { $push: { participants: req.body.tokenFromFront } }
  )

  // var isTourdevoteOpen = await tourdevoteModel.findOne(
  //     {isOpen: true}, function (err, doc){

  //       doc.playlist.titre = req.body.titreFromFront;
  //       doc.save();

  //     }
  // );


  console.log(isTourdevoteOpen);

  // var vote = await isTourdevoteOpen.updateOne({
  //   _id: isTourdevoteOpen._id
  // }, {
  //   playlist.titre: req.body.titleFromFront
  // }
  // )

}
)


module.exports = router;
