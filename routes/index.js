var express = require('express')
var router = express.Router()

var hotels = require('../data/hotels.json')
var activities = require('../data/activities.json')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Katie & Ted: Home'
  , headerClass: 'index-banner'
  })
})

router.get('/details', function (req, res, next) {
  res.render('details', {
    title: 'Katie & Ted: Details'
  , activities: activities
  , headerClass: 'details-banner'
  })
})

router.get('/lodging', function (req, res, next) {
  res.render('lodging', {
    title: 'Katie & Ted: Lodging'
  , headerClass: 'lodging-banner'
  , hotels: hotels
  })
})

router.get('/registry', function (req, res, next) {
  res.render('registry', {
    title: 'Katie & Ted: Registry'
  , headerClass: 'registry-banner'
  })
})

module.exports = router
