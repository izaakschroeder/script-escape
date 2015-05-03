
function pad(value) {
	return '0000'.substring(0, 4 - value.length) + value;
}

module.exports = function escape(value) {
	return value.replace(/[/\\<>&=']/g, function(match) {
		return '\\u' + pad('' + match.charCodeAt(0));
	});
};
