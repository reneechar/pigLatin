module.exports = function () {

	let ay = 'ay';
	let vowelArray = ['a','e','i','o','u'];

	function isPigLatin(word) {
		if(startsWithVowel(word)) {
			if(word.indexOf('-') === word.lastIndexOf('-')) {
				let lastPart = word.substring(word.indexOf('-')+1);
				let possibleAy = lastPart.substring(lastPart.indexOf('a'));
				if(possibleAy === ay) {
					let shouldBeConsonants = lastPart.substring(0,lastPart.indexOf('a'));
					let isTrue = true;
					for (var i = 0; i < shouldBeConsonants.length; i++) {
						if(startsWithVowel(shouldBeConsonants.charAt(i))) {
							isTrue = false;
						}
					}
					return true;
				}
			}
		}
		return false;
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
			let inPigLatin = true;
			let nativeLanguageArray = []; 

			for (var i = 0; i < sentenceArray.length; i++) {
				if (!isPigLatin(sentenceArray[i])) {
					inPigLatin = false;
					i = sentenceArray.length;
				} 
			}
			if(!inPigLatin) {
				throw new Error('That\'s not in Pig Latin');
			}

			function vowelFirstLetter (word) {
				return word.substring(0,word.indexOf('-'));
			}

			function consonantFirstLetter(word) {
				//save first substring until - in variable
				//save second substring from after - to end of array -2 (the ay)
				//return second substring + first substring
				let beginning = word.substring(0, word.indexOf('-'));
				let ending = word.substring(word.indexOf('-') +1, word.length - 2);
				return ending + beginning;
			}

			function nativeStartsWithConsonant(word) {
				if (word.indexOf('-') === word.length - 3) {
					return false;
				} else {
					return true;
				}
			}

			for (var i = 0; i < sentenceArray.length; i++) {
				if (!nativeStartsWithConsonant(sentenceArray[i])) {
					nativeLanguageArray.push(vowelFirstLetter(sentenceArray[i]))
				} else {
					nativeLanguageArray.push(consonantFirstLetter(sentenceArray[i]));
				}
			}
			return nativeLanguageArray.join(' ');
		}		

	};
};