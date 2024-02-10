const modeButton = document.querySelector("#mode");
const darkSwitch = document.querySelector(".switch");
const main = document.querySelector("main");

darkSwitch.addEventListener("click", () => {
	if (modeButton.checked()) {
		main.style.background = "#000";
		main.style.color = "#fff";
	} else {
		main.style.backgroundColor =  "#F5ECFE";
        main.style.color = "#000";
	}
});