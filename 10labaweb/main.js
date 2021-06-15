const btn = document.getElementById('thebtn');
const div = document.getElementById('photo');

const fetchpix = () => {
    fetch('https://picsum.photos/500/500')
		.then((data) => {
			const oldImg = document.getElementById('currentImg');
			if (oldImg) div.removeChild(oldImg);

			const newImg = document.createElement('img');
			newImg.setAttribute('src', data.url);
			newImg.setAttribute('id', 'currentImg');

			div.appendChild(newImg);
		});
}

btn.addEventListener('click', fetchpix);