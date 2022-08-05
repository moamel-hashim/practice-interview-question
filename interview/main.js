// // first we need to find the most repeated words in a string
// // to do so we create a function that holds a string
// // then we split the string into words
// // we loop over each word to check if words are repeated if they are we increment the counter

// function words(string) {
//   const word = string.split(' ');
//   let counter = 0;
//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < word.length; j++) {
//       if (word[i] === word[j]) {
//         counter = word[i].length;
//         return word[i] && counter;
//       }
//     }
//   }
// }

// console.log(words('Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on.'));

// /* first we create a function that holds 2 parameters
// then we split the string into letters then we check if each letter in a string matches each other
// and if they do then we return true if they dont we return false

// function anagrams(string1, string2) {
//   const firstWord = string.split('').sort().join('')
//   const secondWord = string.split('').sort().join('')
//   if(firstWord === secondWord) {
//     return true
//   } else {
//     return false
//   }
// }
// */

// function anagrams(string1, string2) {
//   const firstWord = string1.split('').sort().join('').toLowerCase();
//   console.log(firstWord);
//   const secondWord = string2.split('').sort().join('').toLowerCase();
//   if (firstWord.length !== secondWord.length) {
//     return false;
//   }
//   console.log(secondWord);
//   if (firstWord !== secondWord) {
//     return false;
//   }
//   return true;
// }

// console.log(anagrams('finder', 'friend'));

// Find the 2nd largest and 2nd smallest number in two arrays of numbers combined.Also the index of the first occurrence of those numbers in the array
// I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1 ----------**

// console.log('I');
// setTimeout(() => {
//   console.log('love');
// }, 0);
// console.log('javascript');

// let rainForestAcres = 10;
// let animals = 0;
// while (rainForestAcres < 13 || animals <=2) {
//   rainForestAcres++
//   animals += 2;
// }
// const twoSum = function (nums, target) {
//   const result = [];
//   const hashmap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const difference = target - nums[i];
//     if (hashmap.has(difference)) {
//       result[0] = i;
//       result[1] = hashmap.get(difference);
//     } else {
//       hashmap.set(nums[i], i);
//     }
//   }
//   return result;
// };

/* first we create a variable that holds the return the numbers from the array
then we add 1 to the total number
then we create the array again
*/

// const plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     digits[i]++;
//     if (digits[i] > 9) {
//       digits[i] = 0;
//     } else {
//       return digits;
//     }
//   }
//   digits.unshift(1);
//   return digits;
// };

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

/*
we have an array of numbers [3,2,2,3] and we are giving a value 3
we need to filter out the array and remove value number from the array
then replace it with underscore
*/

// const removeElement = function (nums, val) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[count++] = nums[i];
//     }
//   }
//   return count;
// };

// console.log(removeElement([3, 2, 2, 3], 3));

// const removeElement = function (nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//         i--
//     }
//   }
// };

/*
firs we need to check if a string is palindrome
1- create a function that takes in a string
2- then we need to lowercase the string
3- we can make the string into an array
then save that array
4- we make another copy of the array then we reverse that array
5- then we join both arrays back together so its one word
6- then we create an if statement that checks if the forward string is equal to backward string
7- if it is then we return true if its not then we return false
8- i need to filter out anything that is not a character from the array
*/

// const isPalindrome = function (s) {
//   const regex = /[\W_]/g;
//   const lowerCased = s.toLowerCase().replace(regex, '');
//   const backward = lowerCased.split('').reverse().join('');
//   if (lowerCased === backward) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrome('A man, a plan, a canal: Panama'));

// function solution(inputArray) {
//   const multipliedArrayNumbers = [];
//   let result = null;
//   for (let i = 0; i < inputArray.length - 1; i++) {
//     multipliedArrayNumbers.push(inputArray[i] * inputArray[i + 1]);
//   }
//   result = Math.max(...multipliedArrayNumbers);
//   return result;
// }

// console.log(solution([3, 6, -2, -5, 7, 3]));

// function findDifferenceValue(firstString, secondString) {
//   const index = [];
//   const secondIndex = [];
//   let output = 0;
//   if (secondString === 'ABA') {
//     return 0;
//   }

//   for (let i = 0; i < firstString.length - 1; i++) {
//     if (firstString[i] !== secondString[j]) {
//       index.push(i + 1);
//     }
//   }

//   if (index.length === 0) {
//     output = secondIndex[0] - secondIndex[secondIndex.length - 1] + 1;
//   } else {
//     output = index[0] - index[index.length - 1] + 1;
//   }
//   return output;
// }

// console.log(findDifferenceValue('ABA', 'ABACCA'));

// finding the first non-repeated character in a string;
// var firstUniqChar = function (s) {
//   const result = {};
//   for (let i = 0; i < s.length; i++) {
//     if (!result[s[i]]) {
//       result[s[i]] = 1;
//     } else {
//       result[s[i]]++;
//     }
//     console.log(result);
//   }
//   for (const key in result) {
//     if (result[key] === 1) {
//       return s.indexOf(key);
//     }
//   }
//   return -1;
// };

// console.log(firstUniqChar('loveleetcode'));

// make array consecutive 2

/* first we need to sort the array so that it starts from smallest to largest
then we need to keep track of how many times we push into the array
then we need create a variable that starts at the first index of the array
after that we create a for loop and we loop over the array
then we create an if statement that checks if the sortedArray at i is equal to the index
if it is then we push that index into the statues array
then we sort the sortedArray again
then we increment the tracker by 1
after that we increment the index by 1
lastly we return the tracker
*/

// function solution(statues) {
//   const sortedArray = statues.sort((a, b) => a - b);
//   let tracker = 0;
//   let index = sortedArray[0];
//   for (let i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] !== index) {
//       statues.push(index);
//       sortedArray.sort((a, b) => a - b);
//       tracker++;
//     }
//     index++;
//   }
//   return tracker;
// }

// console.log(solution([6, 2, 3, 8]));

// const romanToInt = function (s) {
//   const symbals = {
//     M: 1000,
//     D: 500,
//     C: 100,
//     L: 50,
//     X: 10,
//     V: 5,
//     I: 1
//   };
//   let numbers = 0;

//   for (let i = 0; i < s.length; i++) {
//     const currentNumber = symbals[s[i]];
//     const nextNumber = symbals[s[i + 1]];
//     if (currentNumber < nextNumber) {
//       numbers += nextNumber - currentNumber;
//       i++;
//     } else {
//       numbers += symbals[s[i]];
//     }
//   }
//   return numbers;
// };

/* so first we need to check if the numbers in the array are strictly increasing

what we need to do is re order the array from smallest to largest number
then we check if the number is equal to the tracker if it is then we return false if not then we
keep looping
then we check if the number is not equal to the tracker and then we return false if thats the case
*/

// function solution(sequence) {
//   let invalidItemCount = 0;
//   for (let i = 0; i < sequence.length; i++) {
//     if (sequence[i] <= sequence[i - 1]) {
//       invalidItemCount++;
//     }
//     if (invalidItemCount > 1) {
//       return false;
//     }
//     if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(solution([1, 3, 2, 1]));

/*

we are giving a string and then we want to check if the needle has an indexOf
so we want to check the indexOf needle and if its not in the string then we return -1

we create function that takes in a string and the second parameter is going to be a substring
then we check if the substring has indexOf in the string if it doesnt then we return -1 if it does then we return the index

function (haystack, needle) {
  return haystack.indexOf(needle);
}
*/

// const strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

// console.log(strStr('hello', 'll'));
