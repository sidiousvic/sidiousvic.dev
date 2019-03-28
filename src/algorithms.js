///////////////////////////////////////////////////////////////////////////
//PIG LATIN FREECODECAMP INTERMEDIATE ALGORITHMS////////////////////////////
///////////////////////////////////////////////////////////////////////////
function translatePigLatin(str) {
	let pigLatin = str.split("");
	let vowRegex = /[aeiou]/gi;

	let firstVowelIndex = pigLatin.indexOf(
		pigLatin.find(function(element) {
			return element.match(vowRegex);
		})
	);

	console.log(firstVowelIndex + " //first vowel index");
	if (firstVowelIndex === 0) {
		return pigLatin.join("") + "way";
	} else {
		let consonantCluster = pigLatin.splice(0, firstVowelIndex);
		return pigLatin.concat(consonantCluster).join("") + "ay";
	}
}

console.log(translatePigLatin("algorithm"));

///////////////////////////////////////////////////////////////////////////
//IS PRIME ELOQUENT JAVASCRIPT CHAPTER 3///////////////////////////////////
///////////////////////////////////////////////////////////////////////////
const isPrime = integer => {
	if (integer === 1 || integer === 0) {
		return false;
	}
	for (var i = 2; i < integer - 1; i++) {
		if (integer % i === 0) {
			return false;
		}
	}
	return true;
};

///////////////////////////////////////////////////////////////////////////
//SUM OF A RANGE ELOQUENT JAVASCRIPT CHAPTER 4/////////////////////////////
///////////////////////////////////////////////////////////////////////////
const range = (start, end, steps = 1) => {
	let result = [];
	if (steps > 0) {
		for (let x = start; x <= end; x += steps) {
			result.push(x);
		}
	} else {
		for (let x = start; x >= end; x += steps) {
			result.push(x);
		}
	}
	return result;
};

const sum = range => {
	return range.reduce((a, b) => a + b);
};

console.log(range(1, 10));
console.log(sum(range(1, 10)));

///////////////////////////////////////////////////////////////////////////
//CODE CHRYSALIS APPLICATION REFACTORED////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

let myName = ["Vic", "Sidious"];

const join = (arr, separator = " ") => {
	return arr.reduce((str, a) => {
		return str + separator + a;
	});
};

const createProfile = (name, email) => {
	return {
		name: join(name),
		email: email,
	};
};

console.log(join(myName));
console.log(createProfile(myName, "vic@vicsidious.com"));

///////////////////////////////////////////////////////////////////////////
//CODE CHRYSALIS APPLICATION ORIGINAL//////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

let myName2 = ["Vic", "Sidious"];

let join2 = (arr, separator = " ") => {
	let result = "";
	for (var i = 0; i < arr.length; i++) {
		if (result) {
			result += separator;
		}
		result += arr[i];
	}
	return result;
};

function createProfile2(name) {
	var obj = {
		name: join2(name),
		email: "vic@vicsidious.com",
	};
	return obj;
}

console.log(join2(myName2));
console.log(createProfile2(myName2, "vic@vicsidious.com"));

///////////////////////////////////////////////////////////////////////////
//TORTOISE RACING CODEWARS 6KYU////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// Two tortoises named A and B must run a race.
// A starts with an average speed of 720 feet per hour.
// Young B knows she runs faster than A, and furthermore has not finished her cabbage.
// When she starts, at last, she can see that A has a 70 feet lead but B's
// speed is 850 feet per hour. How long will it take B to catch A?
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0)
// and a lead g (integer > 0) how long will it take B to catch A?
// The result will be an array [hour, min, sec] which is the time needed
// in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
// If v1 >= v2 then return null.
// Examples:
// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"

const race = (v1, v2, ft) => {
	if (v1 >= v2) {
		return null;
	}
	const decToTime = hours => {
		let minutes = 60 * (hours % 1),
			seconds = 60 * (minutes % 1);

		return [Math.floor(hours), Math.round(minutes), Math.floor(seconds)];
	};

	let t = ft / (v2 - v1);
	return decToTime(t);
};

///////////////////////////////////////////////////////////////////////////
//FLATTENING ELOQUENT JAVASCRIPT CHAPTER 5/////////////////////////////////
///////////////////////////////////////////////////////////////////////////

let arrays = [[1, 2, 3], [4, 5], [6], [7, 8, 9, 10]];

let flatten = arr => {
	return arr.reduce((a, b) => a.concat(b));
};

console.log(flatten(arrays));

///////////////////////////////////////////////////////////////////////////
//IMPLEMENT A LOOP ELOQUENT JAVASCRIPT CHAPTER 5///////////////////////////
///////////////////////////////////////////////////////////////////////////

// Write a higher-order function loop that provides
// something like a for loop statement.
// It takes a value, a test function, an update function,
// and a body function.
// Each iteration, it first runs the test function
// on the current loop value and stops if that returns false.
// Then it calls the body function, giving it the current value.
// Finally, it calls the update function to create a new value
// and starts from the beginning.

const loop = (num, test, update, body) => {
	for (let x = num; test(x); x = update(x)) {
		body(x);
	}
};

loop(7, n => n > 0, n => n - 1, console.log);


///////////////////////////////////////////////////////////////////////////
//UNITE UNIQUE FREECODECAMP INTERMEDIATE ALGORITHMS////////////////////////
///////////////////////////////////////////////////////////////////////////
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(...arr) {
	let x = [].concat(...arr);
	return [...new Set(x)]
	
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
