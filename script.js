var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');
var body = document.getElementById('body');
var button = document.querySelector('button')


function changeBackground() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+")";

	h3.textContent = 'background: ' + body.style.background + ";";
}

function generateRandomColor() {
	var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, "
	+ randomColor
	+ ", "
	+ randomColor2
	+")";

	h3.textContent = 'background: ' + body.style.background + ";";
}

color1.addEventListener('input', changeBackground);

color2.addEventListener('input', changeBackground);

button.addEventListener('click', generateRandomColor);

