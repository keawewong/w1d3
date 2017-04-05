function countletters(str) {
    var obj = {};
    var str = str.join('').toLowerCase();
    var i = 0
    for (char of str) {
        obj[char] = (!obj[char] ? [i] : obj[char].concat(i));
        i++
    }
    return obj
}
console.log(countletters(process.argv.slice(2)))
