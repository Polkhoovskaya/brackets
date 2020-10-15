module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) return false;

    let testStr = str;
    let brackets = [];

    bracketsConfig.forEach(el => brackets.push(el[0] + (el[1])));

    brackets.forEach(el => {
        // testStr = testStr.replace(el, ''); of replaceAll
        testStr = testStr.split(el).join('');
    });

    if (str === testStr) {
        return false;
    } else if (testStr.length === 0) {
        return true;
    } else {
        return check(testStr, bracketsConfig);
    }
}
