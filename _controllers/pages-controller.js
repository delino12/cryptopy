// export the home page controller
exports.homePage = function (req, res){
	res.render('welcome')
}

// export the home page controller
exports.currency = function (req, res){
	res.render('exchange')
}

// export the home page controller
exports.alert = function (req, res){
	res.render('price-alert')
}

// export the home page controller
exports.contact = function (req, res){
	res.render('contact')
}
