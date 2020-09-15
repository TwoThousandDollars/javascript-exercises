const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    let largeNum;
    let smallNum;
    let sumNum = 0;
    
    if (num1 > num2) {
        largeNum = num1;
        smallNum = num2;
    } else {
        largeNum = num2;
        smallNum = num1;
    }

    for (let i = smallNum; i <= largeNum; i++) {
        sumNum += i;
    }

    return sumNum;
}

module.exports = sumAll
