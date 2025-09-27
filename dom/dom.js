const hourHand = document.getElementById("hour");
const minHand = document.getElementById("min");
const secHand = document.getElementById("sec");

setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // Rotations
    let hrRotation = 30 * (hr % 12) + min / 2; // 360/12 = 30
    let minRotation = 6 * min;                 // 360/60 = 6
    let secRotation = 6 * sec;

    hourHand.style.transform = `rotate(${hrRotation}deg)`;
    minHand.style.transform = `rotate(${minRotation}deg)`;
    secHand.style.transform = `rotate(${secRotation}deg)`;
}, 1000);
