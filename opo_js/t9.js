function digitalClock(time) {
    let hour = Math.floor(time / (60*60));
    let mins = Math.floor((time % 3600)/60);
    let secs = Math.floor((time % 3600)%60);
    if(hour >= 24){
        let n = hour - 24;
        hour = 0;
        hour = n;
    }
    hour < 10?hour = '0'+hour:hour=hour;
    mins < 10?mins = '0'+mins:mins=mins;
    secs < 10?secs = '0'+secs:secs=secs;

    return (`\"${hour}:${mins}\:${secs}"`);
};
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));
