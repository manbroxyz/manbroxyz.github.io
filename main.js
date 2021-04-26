localStorage = window.localStorage

if (localStorage.getItem("Clicks") === null){
    localStorage.setItem("Clicks", "0");
}

if (localStorage.getItem("DMON") === null){
    localStorage.setItem("DMON", "0");
}

if (localStorage.getItem("DMON") === "1"){
    document.body.style.setProperty("--customcolor", "#303030");
}
else{
    document.body.style.setProperty("--customcolor", "blueviolet");
}