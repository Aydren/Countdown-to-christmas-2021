const countdown = () => {
const countDate = new Date('Dec 25, 2021 00:00:00').getTime();
const now = new Date().getTime();
const gap = countDate - now;

    //how time works
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate time
    const textDate = Math.floor(gap / day);
    const textHour = Math.floor((gap % day ) / hour)
    const textMinute = Math.floor((gap % hour ) / minute)
    const textSeconds = Math.floor((gap % minute ) / second)

    //update html
    document.querySelector('.day').innerText = textDate;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSeconds;
};

setInterval(countdown, 1000)