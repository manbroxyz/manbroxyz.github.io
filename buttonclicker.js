let localStorage = window.localStorage;

let firstDate = new Date();
let firstTimeInMS = 0;

let lastDate = new Date();
let lastTimeInMS = 0;

let clicksSinceFirstTime = 0;
let cps = 0;

let timeInMS = 0;

clickText.innerHTML = "Clicks: " + localStorage.getItem("Clicks");

function buttonClick(){
    let clicks = localStorage.getItem("Clicks");
    if (clicks === null) {
        clicks = "0";
    }

    if (firstTimeInMS === 0){
        firstDate = new Date();
        firstTimeInMS = 
            firstDate.getHours() * 60 * 60 * 1000
            + firstDate.getMinutes() * 60 * 1000
            + firstDate.getSeconds() * 1000
            + firstDate.getMilliseconds();
    }

    let date = new Date();
    timeInMS =
        date.getHours() * 60 * 60 * 1000
        + date.getMinutes() * 60 * 1000
        + date.getSeconds() * 1000
        + date.getMilliseconds();

    if (lastTimeInMS === 0){
        lastTimeInMS = timeInMS;
    }

    if (timeInMS - lastTimeInMS > 1000){
        firstTimeInMS = timeInMS;
        clicksSinceFirstTime = 0;
    }

    lastDate = date;
    lastTimeInMS = timeInMS;

    let parsedClicks = parseInt(clicks);
    parsedClicks++;
    clicksSinceFirstTime++;

    if (clicksSinceFirstTime === 1){
        cps = 0;
    }
    else{
        cps = (clicksSinceFirstTime / (timeInMS - firstTimeInMS) * 1000);
    }
    
    if (cps > 19.94){
        parsedClicks--;
    }

    let clickText = document.getElementById("clickText");
    let cpsText = document.getElementById("CPS");

    clickText.innerHTML = "Clicks: " + parsedClicks.toString();
    cpsText.innerHTML = "CPS: " + cps.toFixed(2).toString();
    
    localStorage.setItem("Clicks", parsedClicks.toString());
}