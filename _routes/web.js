// init express & express router
let express = require('express')
let router = express.Router()

// init controller
let pages = require('../_controllers/pages-controller')

router.get('/', pages.homePage)

module.exports = router;