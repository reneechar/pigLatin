module.exports = function () {

	let ay = 'ay';
	let vowelArray = ['a','e','i','o','u'];

	return {
		sentenceToArrOfWords: function(sentence) {
			if(typeof sentence !== 'string') {
				throw new Error('That\'s not a string!');
			} else {
				let arrayOfWords = [];
				let i = 0;
				let temp = '';
				while(sentence.charAt(i)) {
					if(sentence.charAt(i) === ' ') {
						arrayOfWords.push(temp);
						temp = '';
					} else {
						temp += sentence.charAt(i)
					}
					i++;
				}
				arrayOfWords.push(temp);
				return arrayOfWords;
			}
		},

		toPigLatin: function(sentence) {
			let sentenceArray = this.sentenceToArrOfWords(sentence);
			let i = 0;
			let pigLatinArray = [];
			while(sentenceArray[i]){
				if(this.startsWithVowel(sentenceArray[i])) {
					pigLatinArray.push(sentenceArray[i] + '-' + ay);
				} else {
					let firstConsonant = '-';
					while(!this.startsWithVowel(sentenceArray[i])) {
						firstConsonant += sentenceArray[i].charAt(0);
						sentenceArray[i] = sentenceArray[i].substring(1);
					}
					pigLatinArray.push(sentenceArray[i] + firstConsonant + ay);
				}
				i++;
			}
			let stringPigLatin = pigLatinArray.join(' ');			
			if (stringPigLatin.charAt(stringPigLatin.length -1) === ' '){
				stringPigLatin.slice(0, -1);
				return stringPigLatin;
			} else {
				return stringPigLatin;
			}
		},

		startsWithVowel: function(stringToTranslate) {
			for (let i = 0; i < vowelArray.length; i++) {
				if (stringToTranslate.charAt(0).toLowerCase() === vowelArray[i]) {
					return true;
				}
			}
			return false;
			
		}

	};

};