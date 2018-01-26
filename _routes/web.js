// init express & express router
let express = require('express')
let router = express.Router()

// init controller
let pages = require('../_controllers/pages-controller')

router.get('/', pages.homePage)
router.get('/currencies', pages.currency);
router.get('/price-alert', pages.alert);
router.get('/contact', pages.contact);

module.exports = router;