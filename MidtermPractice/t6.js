function removeDups(dups){
    return ([...new Set(dups)]);

}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["Jonh","Taylor","Jonh"]));