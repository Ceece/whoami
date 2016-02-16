module.exports = function(req, res) {
	res.json({
		ip: req.ip,
		language: req.headers['accept-language'].split(',')[0],
		software: req.headers['user-agent'].match(/\((.*?)\)/)[1]
	});
};