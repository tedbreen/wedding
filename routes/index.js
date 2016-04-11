var express = require('express')
var router = express.Router()

var details = require('../data/details.json')

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
  , details: details
  , headerClass: 'details-banner'
  })
})

router.get('/lodging', function (req, res, next) {
  res.render('lodging', {
    title: 'Katie & Ted: Lodging'
  , headerClass: 'lodging-banner'
  })
})

module.exports = router
