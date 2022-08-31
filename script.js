let inputs, clock, alarm, hours, minutes, seconds, repeater;

window.addEventListener("load", ()=>{
    inputs = Array.from(document.getElementsByClassName("number"));
    clock = document.querySelector(".clock");
    alarm = new Audio ("./sound/sound_alarm.mp3");
});

function startTimer(){
    //leer los inputs
    parseTime();
    //actualizar la vista
    setTimer();
    //arrancar el timer
    countdown();

}


function setTimer() {
    /* Cambio la hora en pantalla */
    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p><span>hs</span><p class="number">${minutes > 9 ? minutes : ('0' + minutes)}</p><span>min</span><p class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p><span>sec</span>`;

    /* Cambio la hora en la pestaña */
    document.title = `${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}`;
}

function parseTime(){
    //guardamos las horas, minutos y horas en number.
    hours = Number(inputs[0].value); 
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);
}


function countdown(){
    repeater = setInterval(runner, 1000);
}

function runner(){
    if (seconds > 0) {
        seconds--;
    } else {
        if(minutes > 0){
            seconds = 59;
            minutes--;
        }else{
            if(hours > 0){
                seconds = 59;
                minutes = 59;
                hours--;
            }else{
                alarm.play();
            }
        }
    }

    setTimer();

}

function stopTimer(){
    clearInterval(repeater);
    location.reload();
}