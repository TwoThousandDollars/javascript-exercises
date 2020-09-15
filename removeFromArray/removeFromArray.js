const removeFromArray = function() {
    // create a copy array 
    // loop over every elemnt in the argument rray
    // if that item is equal to the argument don't copy it.
    // if it is not equal, do copy it 

    // grab the first argument into an array 
    // store all remaining arguments into an array
    // create a copy array to store the new value in

    // loop over the items in the array 
    // for each item, check if that item is in the arguments array 
    //     if it's in the arguments array, then skip that item
    //     if it is not in the arguments array, then copy that value into a new array

    let arr = arguments[0];
    let args = [];
    let copyArr = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (inArray(arr[i], args) === false) {
            copyArr.push(arr[i]);
        }
    }
    return copyArr;
}

function inArray(item, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) return true;
    }
    return false;
}

module.exports = removeFromArray
