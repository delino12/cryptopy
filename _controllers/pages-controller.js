// load blockchain info
let blockchain = require('blockchain.info');
let exchange   = require('blockchain.info/exchange');


// export the home page controller
exports.homePage = function (req, res){
	// json data
	let data = new Array()

	// initilze block chain
	exchange.getTicker().then(function (e){
	    // data.push(e)
	    console.log(e)
	}).catch(function (e){
		var data = {
			status: 'Error',
			message: 'Fail to request chain'
		};
		console.log(JSON.stringify(data))
	});
	res.render('welcome')
}