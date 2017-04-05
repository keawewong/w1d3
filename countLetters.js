function countletters(str) {
    var obj = {};
    var str = str.join('').toLowerCase();
    for (chr of str) {
        obj[chr] = (!obj[chr] ? 1 : ++obj[chr]);
    }
    return obj;
}
console.log(countletters(process.argv.slice(2)))