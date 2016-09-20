module.exports = function () {

	let ay = 'ay';
	let vowelArray = ['a','e','i','o','u'];

	function isPigLatin(word) {
		if(startsWithVowel(word)) {
			if(word.substring(word.length - 2) === 'ay') {
				return true;
			}
		} else {
			throw new Error('That\'s not in Pig Latin!');
		}
	};

	function startsWithVowel(word) {
		for (let i = 0; i < vowelArray.length; i++) {
			if (word.charAt(0).toLowerCase() === vowelArray[i]) {
				return true;
			}
		}
		return false;
			
	};

	function sentenceToArrOfWords(sentence) {
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
	};


	return {
		
		toPigLatin: function(sentence) {
			let sentenceArray = sentenceToArrOfWords(sentence);
			let i = 0;
			let pigLatinArray = [];
			while(sentenceArray[i]){
				if(startsWithVowel(sentenceArray[i])) {
					pigLatinArray.push(sentenceArray[i] + '-' + ay);
				} else {
					let firstConsonant = '-';
					while(!startsWithVowel(sentenceArray[i])) {
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

		toNativeLanguage: function(sentence) {
			let sentenceArray = sentenceToArrOfWords(sentence);
			let i = 0;
			let nativeLanguageArray = []; 
			while(sentenceArray[i] && isPigLatin(sentenceArray[i])) {
				if (sentenceArray[i].substring(sentenceArray[i].length - 3) === '-ay') {
					nativeLanguageArray.push(sentenceArray[i].substring(0, sentenceArray[i].length - 3));
				} else {
					let firstConst = sentenceArray[i].substring(sentenceArray[i].indexOf('-') + 1,sentenceArray[i].length -2);
					nativeLanguageArray.push(firstConst + sentenceArray[i].substring(0, sentenceArray[i].indexOf('-')));
				}
				i++;
			}
			return nativeLanguageArray.join(' ');
		},		

	};
};