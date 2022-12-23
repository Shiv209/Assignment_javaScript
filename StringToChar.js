function splitIntoWords(str) {
    return str.trim().split(" ");
}
str = "good morning";
let getWords = splitIntoWords(str);
console.log(`String to Char: ${getWords}`);