var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'New Graduate Tech Collective: Home' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'ngtc.tech' });
})

router.get('/works', function(req, res, next) {
    res.render('works', { title: 'ngtc.tech' });
})

router.get('/team', function(req, res, next) {
    res.render('team', { title: 'ngtc.tech' });
})

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'ngtc.tech' });
})

module.exports = router;