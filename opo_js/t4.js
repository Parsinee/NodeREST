function totalVolume(...num) {
    // let sumArray = [];
    // for (let i = 0; i < num.length; i++) {
    //     sumArray += ','+(num[i].reduce((a, b) => a * b, 1)); 
    // }
    // let number = sumArray.split(',').map(Number);
    // let sum = number.reduce((a,b)=>a+b);
    let sumArray = num.map( n => n.reduce(( a , b ) => a * b ));
    let sum = sumArray.reduce(( a , b ) => a + b );
    
    return(sum);
    
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
//  (4*2*4) + (3*3*3) + (1*1*2) + (2*1*1) = 32 + 27 + 2 + 2 = 63
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
//  (2*2*2) + (2*1*1) = 8 + 2 = 10
console.log(totalVolume([1, 1, 1]));
//  (1*1*1) = 1