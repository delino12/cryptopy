// init express & express router
let express = require('express')
let router = express.Router()

// init controller
let pages      = require('../_controllers/pages-controller')
let blockchain = require('../_controllers/blockchain-controller'); 

// blockchain API [API ROUTE]
router.get('/api/tickers', blockchain.tickers);

// get homepage [APP ROUTE]
router.get('/', pages.homePage)

module.exports = router;