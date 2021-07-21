class DigitalClock{
    constructor(element){
        this.element=element;
        console.log(this.element);
    }

    start(){
        this.update();
        setInterval(() => {
            this.update();
        }, 100);
    }


    update(){
        const parts=this.getTimeParts();
        const minuteformatted= parts.minutes.toString().padStart(2,"0");
        const timeformatted=`${parts.hour}:${minuteformatted}`;
        const ampm= parts.isAm?"AM":"PM";
        this.element.querySelector(".clock-time").textContent=timeformatted;
        this.element.querySelector(".clock-ampm").textContent=ampm;
        console.log(timeformatted);
    }

    getTimeParts(){
        const now=new Date();

        return {
           hour: now.getHours()%12 || 12,
           minutes: now.getMinutes(),
           isAm: now.getHours<12
        };
    }
}

const clockElement=document.querySelector('.clock');
const clockObject =new DigitalClock(clockElement);

// console.log(clockObject.getTimeParts());
clockObject.start();