function hightestDigit(num) {
    // let hight = (String(num).split('')).map(Number);
    // console.log(Math.max(...hight)); ...เอาค่าในarrayออกมา
    return((String(num).split('')).sort().pop());
}
console.log(hightestDigit(379));
console.log(hightestDigit(2));
console.log(hightestDigit(377401));
//.sort() เรียงน้อยไปมาก
//.pop() เอาค่าหลังออก
//...เอาค่าในarrayออกมา