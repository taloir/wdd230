const banButton = document.querySelector('#close');
const banner = document.querySelector('.banner');

banButton.addEventListener('click', () => {
	banner.remove();
	banButton.remove();
});

const d = new Date();
let day = d.getDay();

if(day == 0 || day >= 4){
	banner.remove();
	banButton.remove();
}