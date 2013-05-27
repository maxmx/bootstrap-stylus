// Based on Nib.js

var stylus = require('stylus')
	, nodes = stylus.nodes
	, utils = stylus.utils

exports = module.exports = plugin;

exports.path = __dirname;

function plugin() {
	return function(style){
		style.include(__dirname);
	}
}
