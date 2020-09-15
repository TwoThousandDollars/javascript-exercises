let findTheOldest = function(arr) {
    return arr.sort((a, b) => {
        if (!a.yearOfDeath || !b.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
            b.yearOfDeath = new Date().getFullYear();
        }
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })[0];
}

module.exports = findTheOldest
