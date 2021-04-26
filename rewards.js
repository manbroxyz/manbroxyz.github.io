let localStorage = window.localStorage;

let darkText = document.getElementById("darkTheme");
let darkDiv = document.getElementById("darkmodeDiv");

let clicks = localStorage.getItem("Clicks");
let parsedClicks = parseInt(clicks);

if (parsedClicks >= 10000){
    darkDiv.style.display = "block";
}
else{
    darkDiv.style.display = "none";
}

darkText.innerHTML = "Dark theme: " + clicks + " / 10000";

function ToggleDarkmode(){
    if(parsedClicks >= 10000){
        if (localStorage.getItem("DMON") === "0"){
            localStorage.setItem("DMON", "1");
        }
        else if (localStorage.getItem("DMON") === "1"){
            localStorage.setItem("DMON", "0");
        }
        else{
            localStorage.setItem("DMON", "0");
        }

        if (localStorage.getItem("DMON") === "1"){
            document.body.style.setProperty("--customcolor", "#303030");
        }
        else{
            document.body.style.setProperty("--customcolor", "blueviolet");
        }
    }
}