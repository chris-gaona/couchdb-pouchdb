var express = require('express');
var router = express.Router();

// var PouchDB = require('pouchdb');
// var localdb = new PouchDB('kittens');
// var remotedb = new PouchDB('http://localhost:5984/kittens');
//
// remotedb.info().then(function (info) {
//   console.log(info);
// });

// var doc = {
//   "_id": "mittens",
//   "name": "Mittens",
//   "occupation": "kitten",
//   "age": 3,
//   "hobbies": [
//     "playing with balls of yarn",
//     "chasing laser pointers",
//     "lookin' hella cute"
//   ]
// };
// localdb.put(doc);

/* GET home page. */
router.get('/', function(req, res, next) {
  // localdb.get('mittens').then(function (doc) {
  //   console.log(doc);
  // });
  res.render('index', { title: 'Express' });
});

module.exports = router;
