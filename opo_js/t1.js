function numberSplit(num){
    // let numSplit = [];
    // let number = 0;
    // number = Math.ceil(num/2);
    // numSplit.push(num-number,number);
    // console.log(numSplit);
    return ([(num-(Math.ceil(num/2))),(Math.ceil(num/2))]);
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
