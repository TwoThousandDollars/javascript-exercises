const repeatString = function(str, x) {
    // receive a string 
    // return that string repeated x number of times
    if (!x) {
        return "";
    } else if (x < 0) {
        return "ERROR";
    } else if (str === "") {
        return "";
    } else {
        let repeatStr = "";
        for (let i = 0; i < x; i++) {
            repeatStr += str;
        }
    
        return repeatStr;
    }
}

module.exports = repeatString
