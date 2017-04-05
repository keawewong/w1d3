function countletters(str) {
    var obj = {};
    var str = str.join('').toLowerCase();
    for (key in str) {
        obj[str[key]] ? obj[str[key]].push(key) : obj[str[key]] = [key];
    }
    return obj
}
console.log(countletters(process.argv.slice(2)))
