// load blockchain info
let blockchain = require('blockchain.info');
let exchange   = require('blockchain.info/exchange');

// export tickers 
exports.tickers = function (req, res){
	// initilze block chain
	exchange.getTicker().then(function (e){
		res.header(200);
		res.header('Content-Type', 'application/json');
	    res.send(JSON.stringify(e));
	}).catch(function (e){
		var data = {
			status: 'Error',
			message: 'Fail to request chain'
		};
		res.header(200);
		res.header('Content-Type', 'application/json');
	    res.send(JSON.stringify(data));
	});
}