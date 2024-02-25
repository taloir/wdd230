const visitMessage = document.querySelector("#visitMessage");
let lastVisit = Number(window.localStorage.getItem("lastVisit")) || Date.now();
let numVisits = Number(window.localStorage.getItem("visitCount")) || 0;

let lastVisitSpan = (Date.getDate() - lastVisit.getDate());
localStorage.setItem("lastVisit", Date.now());
localStorage.setItem("visitCount", numVisits);

if(visitCount = 0){
	visitCount = 1
	visitMessage.textContent = "Welcome! Let us know if you have any questions."
}
else{
	if(lastVisitSpan < 1){
		visitMessage.textContent = "Back so soon! Awesome!"
	}
	else{
		if(lastVisitSPan < 2){
			visitMessage.textContent = "You last visited 1 day ago.";
		}
		visitMessage.textContent = `You last visited ${lastVisitSpan} days ago.`;
	}
}
