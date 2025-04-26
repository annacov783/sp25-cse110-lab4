const interval = setInterval(returnTime, 1000);
function returnTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

