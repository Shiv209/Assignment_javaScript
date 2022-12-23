//bubble sort 
function sortAscending(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap the elements
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

const Arr = [12,45,32,78,56,45,78];
const getResult = sortAscending(Arr);
console.log(`Sorted array is: ${getResult}`);