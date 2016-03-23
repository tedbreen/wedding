var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Katie & Ted'})
})

/*
router.get('/location', function (req, res, next) {
  res.render('location')
})

router.get('/lodging', function (req, res, next) {
  res.render('lodging')
})
*/
module.exports = router
