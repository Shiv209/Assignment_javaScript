function concatenateArrays(array1, array2) {
    return array1.concat(array2);
}
const array1 = ['apple', 'mango', 'banana'];
const array2 = ['red', 'yellow', 'green'];
let conc = concatenateArrays(array1, array2);
console.log(`Array after concatination: ${conc}`);