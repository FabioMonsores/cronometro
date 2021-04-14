"use strict"

let hour = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start(){
    pause();
    cron = setInterval(() => { timer(); }, 10);
}

function pause(){
    clearInterval(cron);
}

function reset(){
    hour = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.getElementById('milliseconds').innerText = '00';
}

function timer(){
    if((milliseconds +=10) == 1000){
        milliseconds = 0;
        seconds++;
    }

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hour++;
    }

    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minutes').innerText = returnData(minutes);
    document.getElementById('seconds').innerText = returnData(seconds);
    document.getElementById('milliseconds').innerText = returnData(milliseconds);
}

function returnData(input){
    return input > 10 ? input : `0${input}`;
}