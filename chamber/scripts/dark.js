const darkButton = document.querySelector('#dark');
const background = document.querySelector('main');

darkButton.addEventListener('click', () => {
	darkButton.classList.toggle('drk');
    background.classList.toggle('drk');
    background.style.backgroundColor('black');
});