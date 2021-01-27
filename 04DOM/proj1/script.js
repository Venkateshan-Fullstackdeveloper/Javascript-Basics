var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1

setInterval(() => {// setinterval(funtion,milliseconds) is used to perform some task for some duration
    if (count < 1000) {
        count++;
        counter.innerHTML = count; // innerHTML or innerText is same
    } 
},1);

setTimeout(() => {
    followers.innerHTML = "Followers in Instagram";
},4000);

