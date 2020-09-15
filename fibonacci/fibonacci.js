const fibonacci = function(userNum) {
    let num = parseInt(userNum);
    if (num < 0) return "OOPS"
    
    let fibStart = [1, 1];
    for (let i = fibStart.length; i < num; i++) {
        fibStart.unshift(fibStart[0] + fibStart[1]);
    }
    return fibStart[0];
}

module.exports = fibonacci
