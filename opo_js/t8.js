function simplePair(numArray,sum) {
    let pair = [];
    numArray.map((el)=>{
        numArray.reduce((a,b)=>{
            el * b == sum? pair.push([el,b]):null;
        })
    })
    let setArray = [...new Set(...pair)];
    if(setArray.length == 1){
        setArray = null;
    }
    return(setArray);
}
console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));
console.log(simplePair([1,2,3],2));