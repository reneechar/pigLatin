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
			expect(pigLatinSentence.substring(0,12)).to.equal('anslate-Tray');
			expect(pigLatinSentence.substring(19,26)).to.equal('into-ay');
			expect(pigLatinSentence).to.equal('anslate-Tray e-may into-ay ig-Pay atin-Lay ease!-play');
		});

	});

	describe('toNativeLanguage', () => {
		beforeEach(function() {
			pigLatinObj = pigLatin();
		});

		it('should exist', () => {
			expect(pigLatinObj.toNativeLanguage).to.exist;
		});

		it('should be a function', () => {
			expect(pigLatinObj.toNativeLanguage).to.be.a('function');
		});

		it('should throw an error if the parameter is not a string', () => {
			expect(pigLatinObj.toNativeLanguage.bind(this,false)).to.throw(Error);
		});

		it('should throw an error if the parameter is not in Pig Latin', () => {
			expect(pigLatinObj.toNativeLanguage.bind(this,'Hello there')).to.throw(Error);
		});

		it('should take a sentence and return the Native Language translation', () => {
			let pigLatinSentence = 'anslate-Tray e-may into-ay English-ay ease!-play';
			expect(pigLatinObj.toNativeLanguage(pigLatinSentence)).to.equal('Translate me into English please!');
			// expect(translatedInArr.splice(1,1).toString()).to.equal('');
			// expect(translatedInArr.join(' ')).to.equal('');
		});

	});
	
});














