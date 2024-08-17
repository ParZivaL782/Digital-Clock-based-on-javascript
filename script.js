//Digital Clock
let sec= document.querySelector('.second');
let hourss=document.querySelector('.hour');
let min=document.querySelector('.minute');

let ticking=function()
{
    let currentDate=new Date();
    let seconds=currentDate.getSeconds();
    let minutes=currentDate.getMinutes();
    let hours=currentDate.getHours()

    sec.textContent=seconds;
    min.textContent=minutes;
    hourss.textContent=hours;
}
setInterval(ticking,1000);
