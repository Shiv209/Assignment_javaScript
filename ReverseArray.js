function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
    return reversedArray;
  }

  let result = reverseArray([12,45,75,34,56,89]);
  console.log(`Reverse Array is: ${result}`);