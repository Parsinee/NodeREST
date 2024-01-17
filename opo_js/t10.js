function isValidIP(idAdr) {
    let ipArray = idAdr.split('.');
    let status = 0;
    if(ipArray.length != 4){
        status +=1;
    }else{
        ipArray.forEach((element) => {
            if (element > 0 && element < 256 && element[0] != 0) {
            } else {
              status += 1;
            }
          });
    }

    return(status == 0);
};
console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));
