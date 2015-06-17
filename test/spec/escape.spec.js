
var escape = require('../../lib/escape');
var expect = require('chai').expect;

describe('#escape', function() {

	var target = 'sdasda<script>console.log(\'blah\');</script>sdfdsfsdf';

	it('should replace invalid characters', function() {
		var result = escape(target);
		expect(result).to.not.contain('<');
		expect(result).to.not.contain('>');
		expect(result).to.not.contain('\'');
	});

	it('should use valid hex codes', function() {
		expect(escape('<')).to.equal('\\u003c');
	});

	it('should result in the original string', function() {
		expect(eval('"'+target+'";')).to.equal(target);
	});
});
