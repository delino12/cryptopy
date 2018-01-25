 // require configuration file
require('dotenv').config()

// import packages
let express      = require('express')
let path         = require('path')
let favicon      = require('serve-favicon')
let mongoose     = require('mongoose')
let cookieParser = require('cookie-parser')
let session      = require('express-session')
let flash        = require('connect-flash')
let bodyParser   = require('body-parser')
let route        = require('./_routes/web')

// database 
let db           = require('./database/db')

// init express
let app = express();

// init pug
app.set('view engine', 'pug')

// set public static path
app.use(express.static(path.join(__dirname, './public')))

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// init body-parser
app.use(cookieParser())

// init app session
app.use(session({
  secret: 'lizards',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// init connect flash 
app.use(flash());

// set flash middleware
app.use(function (req, res, next){
	res.locals.flashes = req.flash();
	next();
});

// routes web entry
app.use('/', route)

// export app to entry
module.exports = app