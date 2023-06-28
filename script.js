// declare all the variables.
let startBtn= document.getElementById("start");
let stopBtn= document.getElementById("stop");
let resetBtn= document.getElementById("reset");
let hrs= document.getElementsByClassName("time")[0];
let mints= document.getElementsByClassName("time")[1];
let secs= document.getElementsByClassName("time")[2];
let watchDisplay = document.getElementById("watchDisplay");
let minutes=0;
let hour=0;
let second=0;
let timeSt;

// if time is less then 10, so below function is for that.
let ten= (a)=>{
    if(second<a){
            secs.innerHTML="0"+second;
        }
        else{
            secs.innerHTML=second;
        }
        if(minutes<a){
            mints.innerHTML="0"+minutes;
        }
        else{
            mints.innerHTML=minutes;
        }
        if(hour<a){
            hrs.innerHTML="0"+hour;
        }
        else{
            hrs.innerHTML=hour;
        }
}

// start function will run whenever we click start button.
let start=()=>{
    
    watchDisplay.setAttribute("class","display");
    timeSt= setInterval(()=>{
        second++;
        if(second==60){
            minutes++;
            mints.innerHTML=minutes;
            second=0;  
        }
        else if(minutes==60){
            hour++;
            minutes=0;
            hrs.innerHTML=hour;
            mints.innerHTML=minutes;
        }
        ten(10);
    },1000)
    // console.log(timeSt);
    startBtn.disabled=true;
}

// for stop the time.
let stop=()=>{
    watchDisplay.removeAttribute("class","display");
    watchDisplay.style.background="#ffffae";
    clearInterval(timeSt);
    startBtn.disabled=false;
    ten(10);
    // console.log(timeSt);
    // console.log(hour+":"+minutes+":"+second);
}

// for reset the time.
let reset=()=>{
    watchDisplay.removeAttribute("class","display");
    watchDisplay.style.background="rgb(227, 255, 246)";
    clearInterval(timeSt);
    startBtn.disabled=false;
    minutes=0;
    hour=0;
    second=0;
    mints.innerHTML="0"+minutes;
    secs.innerHTML="0"+second;
    hrs.innerHTML="0"+hour;

}

// add events to the buttons.
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click",reset);