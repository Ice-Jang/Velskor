const day=document.getElementById('days');
const hour=document.getElementById('hours');
const minute=document.getElementById('minutes');
const second=document.getElementById('seconds');

const currentYear=new Date().getFullYear();
const newYearTime=new Date(`January 01, ${currentYear+1} 00:00:00`);

function updateCountDown() {
    const currentTime=new Date();
    const diff=newYearTime-currentTime;
    console.log(diff);
    const d=Math.floor(diff/1000/60/60/24);
    console.log(d);
    const h=Math.floor(diff/1000/60/60)%24;
    console.log(h);
    const m=Math.floor(diff/1000/60)%60;
    console.log(m);
    const s=Math.floor(diff/1000)%60;
    console.log(s);

    day.innerHTML=d;
    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s;
}

setInterval(updateCountDown,1000);