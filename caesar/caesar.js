const caesar = function(str, userIncrem) {
    let newStr = "";
    let increm = userIncrem % 26;
    
    for (let char in str) {
        if (isAlpha(str[char])) newStr += encryptChar(str[char], increm);
        else newStr += str[char];
    }
    return newStr;
}

function isAlpha(char) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) return true;
    if (charCode >= 65 && charCode <= 90) return true;
    else return false;
}

function encryptChar(char, increm) {
    let charCode = char.charCodeAt(0);
    let upperChar = char.toUpperCase().charCodeAt(0);

    if (upperChar + increm < 65) {
        charCode = wrapCharNeg(charCode)
    }
    
    if (upperChar + increm > 90) {
        charCode = wrapCharPos(charCode)
    }

    return String.fromCharCode(charCode + increm);
}

function wrapCharPos(charCode) {
    return charCode - 26;
}

function wrapCharNeg(charCode) {
    return charCode + 26;
}

module.exports = caesar
