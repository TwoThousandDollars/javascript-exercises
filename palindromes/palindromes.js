const palindromes = function(str) {
// 1. take String
    let specialChars = [" ", ",", ".", "!"];

// 2. remove all spaces and punctuation (create array with all special characters, compare current char to see if it's in array)
    let clean = cleanStr(str, specialChars).toLocaleLowerCase();

// 3. reverse the string 
    let reverse = reverseStr(clean).toLocaleLowerCase();

// 4. if the string is the same forward as it is backwards, return true
    if (reverse === clean) return true;
    return false;

}

function cleanStr(str, arr) {
    let clean = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (arr.includes(char)) continue;
        else clean += char;
    }
    return clean;
}

function reverseStr(str) {
    let reverse = "";
    for (let i = (str.length - 1); i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

module.exports = palindromes
