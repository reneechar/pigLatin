const Chai = require('chai');
const expect = Chai.expect;
const pigLatin = require('../pigLatin');
let pigLatinObj = pigLatin();

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

	describe('sentenceToArrOfWords', () => {
		beforeEach(function() {
			pigLatinObj = pigLatin();
		});

		it('should exist', () => {
			expect(pigLatinObj.sentenceToArrOfWords).to.exist;
		});
		
		it('should be a function', () => {
			expect(pigLatinObj.sentenceToArrOfWords).to.be.a('function');
		});

		it('should throw an error if the parameter is not a string', () => {
			expect(pigLatinObj.sentenceToArrOfWords.bind(this,235)).to.throw(Error);
		});

		it('should return an array', () => {
			let stringTest = 'Hello there, my name is Renee!';
			let ArrayedString = pigLatinObj.sentenceToArrOfWords(stringTest);
			expect(ArrayedString.pop()).to.equal('Renee!');
			expect(ArrayedString.splice(1,1).toString()).to.equal('there,');
		})

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

		it('should return true if the parameter starts with a vowel', () => {
			expect(pigLatinObj.startsWithVowel('yellow')).to.equal(false);
			expect(pigLatinObj.startsWithVowel('hollow')).to.equal(false);
		});

		it('should return false if the parameter does not start with a vowel', () => {
			expect(pigLatinObj.startsWithVowel('opposite')).to.equal(true);
			expect(pigLatinObj.startsWithVowel('awkward')).to.equal(true);
		});

	});

	describe('toPigLatin', () => {
		beforeEach(function() {
			pigLatinObj = pigLatin();
		});

		it('should exist', () => {
			expect(pigLatinObj.toPigLatin).to.exist;
		});

		it('should be a function', () => {
			expect(pigLatinObj.toPigLatin).to.be.a('function');
		});

		it('should throw an error if the parameter is not a string', () => {
			expect(pigLatinObj.toPigLatin.bind(this,false)).to.throw(Error);
		});

		it('should take a sentence and return the Pig Latin translation', () => {
			let englishSentence = 'Translate me into Pig Latin please!';
			let pigLatinSentence = pigLatinObj.toPigLatin(englishSentence);
			let translatedInArr = pigLatinObj.sentenceToArrOfWords(pigLatinSentence);
			expect(translatedInArr.shift().toString()).to.equal('anslateTray');
		});

	});
	
});














