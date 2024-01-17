function removeDups(myArray) {
    return([...new Set(myArray)]);
}
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["Joth","Opo","Opo"]));

