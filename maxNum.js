class Max{
    constructor(num) {
        this.num = num;  
    }
    getMax() {
        let max = this.num[0];
        for(let i=0; i<this.num.length; i++){
            if(this.num[i] > max){
                max = this.num[i];
            }
        }
        console.log(`Max number is: ${max}`);
    }
}

let disp = new Max([22,11,10]);
disp.getMax();