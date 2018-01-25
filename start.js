/*================== Run Application ====================*/
// set appliction path
var app = require('./app');

// set application port 
var port = process.env.PORT || 3000;

// start application server
app.listen(port, function (){
	console.log('Launching Cryptopy');
	console.log("Server starting....");
	console.log("Server running: http://localhost:"+port);
	console.log("Press Ctrl+C to terminate server");
	console.log("----------(^±^)----------");
});
/*================== End Application ====================*/