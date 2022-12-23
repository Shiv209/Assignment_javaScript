class MaxMin {
    constructor(num) {
        this.num = num;
    }
    getMax() {
        let max = this.num[0];
        for (let i = 0; i < this.num.length; i++) {
            if (this.num[i] > max) {
                max = this.num[i];
            }
        }
        console.log(`Max number is: ${max}`);
    }
    getMin() {
        let min = this.num[0];
        for (let i = 0; i < this.num.length; i++) {
            if (this.num[i] < min) {
                min = this.num[i];
            }
        }
        console.log(`Min number is: ${min}`)
    }
}

let disp = new MaxMin([22, 11, 10, 56, 78, 86]);
disp.getMax();
disp.getMin();