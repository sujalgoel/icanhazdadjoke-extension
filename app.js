const getNewJoke = async () => {
	const config = { headers: { Accept: 'text/plain' } };
	const res = await fetch('https://icanhazdadjoke.com', config);
	document.querySelector('.joke').innerHTML = await res.text();

	const r1 = Math.floor(Math.random() * 255) + 1;
	const g1 = Math.floor(Math.random() * 255) + 1;
	const b1 = Math.floor(Math.random() * 255) + 1;

	document.getElementById('background').style.opacity = '1';
	document.getElementById(
		'background',
	).style.backgroundColor = `rgb(${r1},${g1},${b1})`;

	let brightness = Math.round((r1 * 299 + g1 * 587 + b1 * 114) / 1000);
	brightness = brightness > 125 ? '#000000' : '#ffffff';
	document.documentElement.style.setProperty('--primary-color', brightness);

	document
		.querySelectorAll('#broughtToYouByURL')[0]
		.addEventListener('click', () => {
			window.open('https://icanhazdadjoke.com/', '_blank');
		});

	document
		.querySelectorAll('#broughtToYouByURL')[1]
		.addEventListener('click', () => {
			window.open('https://sujalgoel.engineer', '_blank');
		});
};

window.addEventListener('DOMContentLoaded', getNewJoke);
