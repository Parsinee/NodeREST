function capToFront(myStr){
    // let asciiArray = [];
    // for (let i = 0; i < myStr.length; i++) {
    //     asciiArray.push(myStr.charCodeAt(i));
    // }
    // asciiArray.sort((a,b)=>a-b); //เรียงเลขแอสกี้น้อยไปมาก
    // let charArray = asciiArray.map(asciiArray=>String.fromCharCode(asciiArray));

    // console.log(charArray.join(''));
    return(Array.from(myStr).sort().join(''));
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));

//.lengthหาความยาวของข้อความ
//.charCodeAt(0)หาแอสกี้
//.fromCharCode เปลี่ยนเลขแอสกี้เป็นchar
//.join('') ถูกใช้เพื่อรวมสมาชิกทั้งหมดของอาเรย์ให้เป็นสตริงเดียว
//.sort() ใช้กับarrayที่เก็บค่าเป็น string,char ได้ 