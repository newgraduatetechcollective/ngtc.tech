var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home | New Graduate Tech Collective: Home' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About | ngtc.tech' });
})

router.get('/works', function(req, res, next) {
    res.render('works', { title: 'Our Works | ngtc.tech' });
})

router.get('/team', function(req, res, next) {
    res.render('team', { title: 'Team | ngtc.tech' });
})

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us | ngtc.tech' });
})

module.exports = router;