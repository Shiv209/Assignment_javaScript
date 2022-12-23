class AverageNum {
    constructor(numbers) {
        let res = 0;
        for (const val of numbers) {
            res += val;
        }
        return res / numbers.length;
    }
}
numbers = [11, 34, 67, 64, 32]
const average = new AverageNum(numbers);
console.log(average);