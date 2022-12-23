function extractCharacters(string, numCharacters) {
    return string.substring(0, numCharacters);
  }
string = "good morning..!";
let result = extractCharacters(string,4);
console.log(`Extracted substring from String is: ${result}`);  // ouput : "good" 