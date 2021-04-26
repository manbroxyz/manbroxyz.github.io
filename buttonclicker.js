let localStorage = window.localStorage;

function buttonClick(){
    let clicks = localStorage.getItem("Clicks");
    if (clicks === null) {
        clicks = "0";
    }

    let parsedClicks = parseInt(clicks.toString());
    let clickText = document.getElementById("clickText");
    parsedClicks += 1;
    clickText.innerHTML = "Clicks: " + clicks.toString();
    localStorage.setItem("Clicks", parsedClicks.toString());
}