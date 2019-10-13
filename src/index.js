module.exports = function check(str, bracketsConfig) {

    let testStr = '';
    
    if (str.length % 2 !== 0) return false;
    
    let bracketsString = bracketsConfig.join().replace(/,/g, '');

    nextBracket: for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsString.length; j++) {
            if (str[i] == bracketsString[j]) {
                testStr += str[i];
                continue nextBracket;
            }
        }
    }
     return str === testStr ? true : false;  
}
