module.exports = function () {

	var ay = 'ay';
	var vowelArray = ['a','e','i','o','u'];


	return {
		startsWithVowel: function(stringToTranslate) {
			if(typeof stringToTranslate !== 'string') {
				throw new Error('That\'s not a string!');
			} else {
				for (var i = 0; i < vowelArray.length; i++) {
					if (stringToTranslate.charAt(0).toLowerCase() === vowelArray[i]) {
						return true;
					}
				}
				return false;
			}
		}
	};

};