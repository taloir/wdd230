const temperature = document.getElementById("temp");
const wind = document.getElementById("wind");

if(parseInt(temperature.innerHTML()) < 50 && parseInt(wind.textContent()) > 3){
    index = 35.74 + 0.6215*parseInt(temperature.innerHTML()) - 35.75*(parseInt(wind.innerHTML())**0.16) + 0.4275*parseInt(temperature.innerHTML())*(parseInt(wind.innerHTML())**0.16)
}
else{
    index = "N/A"
}

document.getElementById("chill").innerHTML = index;