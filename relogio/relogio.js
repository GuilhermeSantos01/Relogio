const hour = document.querySelector(".hours");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const relogioDigital = document.getElementById("digital-time");

function getTime(){
    const time = new Date();

    const getHoursRot = (360/12) * time.getHours();
    const getMinRot = (360/60) * time.getMinutes();
    const getSecRot = (360/60) * time.getSeconds();

    hour.style.transform = `rotate(${getHoursRot}deg)`;
    min.style.transform = `rotate(${getMinRot}deg)`;
    sec.style.transform = `rotate(${getSecRot}deg)`;

}

setInterval(() => {
    getTime();
}, 1000);

getTime();

function obterHoraDigital() {
    const data = new Date();
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');

    relogioDigital.textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(() => {
    obterHoraDigital();
}, 1000);

obterHoraDigital();