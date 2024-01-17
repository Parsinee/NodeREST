function digitalClock(clock){
    let total = clock / 3600;
    let total2 = (clock % 360);
    return (total, " : " ,total2);
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));