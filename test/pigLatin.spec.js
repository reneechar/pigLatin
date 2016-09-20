const Chai = require('chai');
const expect = Chai.expect;
const pigLatin = require('../pigLatin');
var pigLatinObj = pigLatin();

describe('pigLatin', () => {
	beforeEach(function() {
		pigLatinObj = pigLatin();
	});

	it('should exist', () => {
		expect(pigLatin).to.exist;
	});

	it('should be a function', () => {
		expect(pigLatin).to.be.a('function');
	});

	it('should return an object', () => {
		expect(pigLatinObj).to.not.be.undefined;
		expect(pigLatinObj).to.be.an('object');
	});

	describe('startsWithVowel', () => {
		beforeEach(function() {
			pigLatinObj = pigLatin();
		});

		it('should exist', () => {
			expect(pigLatinObj.startsWithVowel).to.exist;
		});

		it('should be a function', () => {
			expect(pigLatinObj.startsWithVowel).to.be.a('function');
		});

		it('should throw an error if the parameter is not a string', () => {
			expect(pigLatinObj.startsWithVowel.bind(this,235)).to.throw(Error);
		});

		it('should return true if the parameter starts with a vowel', () => {
			expect(pigLatinObj.startsWithVowel('yellow')).to.equal(false);
			expect(pigLatinObj.startsWithVowel('hollow')).to.equal(false);
		});

		it('should return false if the parameter does not start with a vowel', () => {
			expect(pigLatinObj.startsWithVowel('opposite')).to.equal(true);
			expect(pigLatinObj.startsWithVowel('awkward')).to.equal(true);
		});

	});

	describe('', () => {


	});
});














