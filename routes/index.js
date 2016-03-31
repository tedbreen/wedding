var express = require('express')
var router = express.Router()

var details = require('../data/details.json')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Katie & Ted'})
})

router.get('/details', function (req, res, next) {
  res.render('details', {details: details})
})

router.get('/lodging', function (req, res, next) {
  res.render('lodging')
})

module.exports = router
