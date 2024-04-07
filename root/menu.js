loadMenu = () => fetch('/root/menu.html')
	.then(response => response.text())
	.then((data) => {
		document.getElementById('menu').innerHTML = data;
	}).catch((error) => {
		console.error(error);
	});
