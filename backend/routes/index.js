var express = require('express');
var router = express.Router();
var mongoose = require('../bdd/connexion');
var SHA256 = require('crypto-js/sha256')
var encBase64 = require('crypto-js/enc-base64')
var HoteModel = require('../bdd/SchemaHote');
var eventModel = require('../bdd/SchemaEvent')
var tourdevoteModel = require('../bdd/SchemaTourdevote')
var top124Model = require('../bdd/SchemaTop50');
var playlistModel = require('../bdd/SchemaPlaylistTitresProposes');

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
    res.json({ result: false, hote: hotes })
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


router.post('/enregistrement', async function (req, res, next) {

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
      eventId: req.body.eventIdFromFront,
      isOpen: true
    })

    if (eventExist) {

      // const passwordEncrypt = SHA256(req.body.passwordFromFront + user.salt).toString(encBase64)

      if (req.body.eventPasswordFromFront == eventExist.password) {
        result = true

      } else {
        result = false
        error.push('ID / mot de passe incorrect')
      }

    }

  }

  res.json({ result, eventExist, error })
})

router.post('/eventcreation', async function (req, res, next) {

  var error = []
  var result = false
  var saveEvent = null
  var date = new Date() // a verifier le format

  if (req.body.eventNameFromFront == ''
    || req.body.eventPasswordFromFront == '') {
    error.push('champs vides')
  }

  if (req.body.eventPasswordFromFront.length < 3) {
    error.push('mot de passe trop court')
  }

  if (error.length == 0) {


    var userId = await eventModel.findOne(
      { user: req.body.idUserFromFront, isOpen: true }
    );

    console.log("userID", userId);

    if (userId) {

      console.log("userId.user", userId.user);

      await eventModel.updateMany(
        { user: userId.user },
        { isOpen: false }
      );
    }

    var newEvent = new eventModel({

      user: req.body.idUserFromFront,
      nameEvent: req.body.eventNameFromFront,
      date: date,
      isOpen: true,
      eventId: (Math.floor(Math.random() * 10000) + 10000).toString().substring(1),
      password: req.body.eventPasswordFromFront,
    })

    var saveEvent = await newEvent.save()

    var eventIsOpen = await eventModel.findOne({
      isOpen: true,
    })

    var eventIsClosed = await eventModel.findOne({
      isOpen: false,
    })

    if (saveEvent) {
      await playlistModel.updateMany({ $set: {votes: [] }});
      result = true
    }
  }
  res.json({ result, eventIsOpen, eventIsClosed, error })
})





router.post('/tourdevotecreation', async function (req, res, next) {

  var isEventOpen = await eventModel.findOne(
    { isOpen: true, user: req.body.idUserFromFront }
  )

  console.log("event", isEventOpen);


  await tourdevoteModel.updateMany(
    { event: isEventOpen._id },
    { isOpen: false }
  );

  var newTourdevote = new tourdevoteModel({
    event: isEventOpen._id,
    date: new Date(),
    isOpen: true,
    participants: [],

  })

  var saveTourdevote = await newTourdevote.save();

  // var reset = await playlistModel.updateMany({ $set: {votes: [] }});


  if (saveTourdevote) {

    console.log('result')
    await playlistModel.updateMany({ $set: {votes: [] }});

    res.json({ result: true, idTourdeVote: saveTourdevote._id })
  }

  else {
    res.json({ result: false })
  }

}
)


router.post('/ajoutertitre', async function (req, res, next) {

  var newPlaylist = new playlistModel({
    titre: req.body.titreFromFront,
    vote: [],
  })

  var playlistSaved = await newPlaylist.save();


  res.json({ playlist: playlistSaved })
});

router.post('/supprimertitre', async function (req, res, next) {

  var playlistSaved = await playlistModel.findByIdAndDelete(req.body.titreIdFromFront)

  res.json({ playlist: playlistSaved })

})

router.post('/voteguest', async function (req, res, next) {

  mongoose.set('useFindAndModify', false);


  var hasAlreadyVote = await playlistModel.findOne(
    { votes: req.body.tokenFromFront }
  )

  console.log('hasAlreadyVote', hasAlreadyVote);

  if (hasAlreadyVote == null) {

    var vote = await playlistModel.findOneAndUpdate(
      { titre: req.body.titreFromFront },
      { $push: { votes: req.body.tokenFromFront } }
    )

    console.log('vote', vote)
  }



  if (hasAlreadyVote) {
    console.log('result')
    res.json({ result: false, hasAlreadyVote })
  }

  else {
    res.json({ result: true })
  }

}
)

router.post('/votehost', async function (req, res, next) {

  mongoose.set('useFindAndModify', false);


  var hasAlreadyVote = await playlistModel.findOne(
    { votes: req.body.userIdFromFront }
  )

  console.log('hasAlreadyVote', hasAlreadyVote);

  if (hasAlreadyVote == null) {

    var vote = await playlistModel.findOneAndUpdate(
      { titre: req.body.titreFromFront },
      { $push: { votes: req.body.userIdFromFront } }
    )

    console.log('vote', vote)
  }



  if (hasAlreadyVote) {
    console.log('result')
    res.json({ result: false, hasAlreadyVote })
  }

  else {
    res.json({ result: true })
  }

}
)

module.exports = router;

