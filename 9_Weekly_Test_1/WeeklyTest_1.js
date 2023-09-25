// 1. String Reversal Function
function reverseString(str) {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// 2. Anagram Check Function
function areAnagrams(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
// 3. Array Intersection Function
function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [...set1].filter(item => set2.has(item));
    return intersection;
}
// 4. String Palindrome Function
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversed;
}
// 5. Array Rotation Function
function rotateArray(arr, k) {
    const n = arr.length;
    k %= n;
    const rotated = [...arr.slice(n-k), ...arr.slice(0, n-k)];
    return rotated;
}
// 6. String Compression Function
function compressString(str) {
    let compressed = '';
    let count = 1;
    for(let i = 1; i <= str.length; i++) {
        if(str[i] === str[i-1]) {
            count++;
        } else {
            compressed += str[i-1] + count;
            count = 1;
        }
    }
    return compressed;
}
// 7. Array Sum Function
function pairWithTargetSum(arr, target) {
    const seen = new Set();
    for(const num of arr) {
        if(seen.has(target - num)) {
            return [num, target - num];
        }
        seen.add(num);
    }
    return [];
}
// 8. Longest Substring Function
function lengthOfLongestSubstring(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let charSet = new Set();

    while (end < s.length) {
        if (!charSet.has(s[end])) {
            charSet.add(s[end]);
            maxLength = Math.max(maxLength, end - start + 1);
            end++;
        } else {
            charSet.delete(s[start]);
            start++;
        }
    }
    return maxLength;
}
// Test Inputs
// Test for String Reversal
const str1 = "abcdef";
console.log(`Original String: ${str1}`);
console.log(`Reversed String: ${reverseString(str1)}`);
// Test for Anagram Check
const str2a = "listen";
const str2b = "silent"; // An anagram of "listen"
console.log(`\nString 1: ${str2a}`);
console.log(`String 2: ${str2b}`);
console.log(`Are Anagrams: ${areAnagrams(str2a, str2b)}`);
// Test for Array Intersection
const arr3a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr3b = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log(`\nArray 1: ${arr3a}`);
console.log(`Array 2: ${arr3b}`);
console.log(`Intersection: ${arrayIntersection(arr3a, arr3b)}`);
// Test for String Palindrome
const baseStr = "radar";
const str4 = baseStr + baseStr.split('').reverse().join('');
console.log(`\nString: ${str4}`);
console.log(`Is Palindrome: ${isPalindrome(str4)}`);
// Test for Array Rotation
const arr5 = [10, 20, 30, 40, 50, 60, 70];
const k = 2;
console.log(`\nOriginal Array: ${arr5}`);
console.log(`Rotated by ${k} positions: ${rotateArray(arr5, k)}`);
// Test for String Compression
const str6 = 'aaa' + 'bbb' + 'ccc'; // "aaabbbccc"
console.log(`\nOriginal String: ${str6}`);
console.log(`Compressed String: ${compressString(str6)}`);
// Test for Array Sum
const arr7 = [10, 15, 20, 25, 30, 35, 40, 45];
const targetSum = 55;
console.log(`\nArray: ${arr7}`);
console.log(`Target Sum: ${targetSum}`);
console.log(`Pair with Target Sum: ${pairWithTargetSum(arr7, targetSum)}`);
// Test for Longest Substring Without Repeating Characters
const str8 = "abcabcbb";
console.log(`\nString: ${str8}`);
console.log(`Length of Longest Substring: ${lengthOfLongestSubstring(str8)}`);
