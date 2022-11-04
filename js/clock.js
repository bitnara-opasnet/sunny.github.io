const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    // const now = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    const now = `${hours}:${minutes}`;
    clock.innerText = now;
};

getClock();
setInterval(getClock, 1000);
