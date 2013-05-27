// Based on Nib.js

exports.path = __dirname;

exports = module.exports = function () {
	return function(style){
		style.include(__dirname);
	}
}