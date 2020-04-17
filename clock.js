const clockContainner = document.querySelector(".js-clock");
const clockTitle = clockContainner.querySelector("h1");

// console.log(clockContainner);
// console.log(clockTitle);
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hours = date.getHours();
    clockTitle.innerText = `${hours < 10? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${
        seconds < 10 ? `0${seconds}`: seconds
    }`;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();