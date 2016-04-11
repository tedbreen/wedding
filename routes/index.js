var express = require('express')
var router = express.Router()

var details = require('../data/details.json')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Katie & Ted'
  , headerClass: 'index-main-image'
  })
})

router.get('/details', function (req, res, next) {
  res.render('details', {
    details: details
  , headerClass: 'details-main-image'
  })
})

router.get('/lodging', function (req, res, next) {
  res.render('lodging', {
    headerClass: 'lodging-main-image'
  })
})

module.exports = router
