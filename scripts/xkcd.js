function dispxkcd(xkcdjson) {
	var comictitle = document.getElementById('xkcdTitle');
	var comicimg = document.getElementById('xkcd');
	comicimg.src = xkcdjson.img;
	comicimg.title = xkcdjson.alt;
	comictitle.innerHTML = xkcdjson.title;
}

fetch('https://corsproxy.io/?' + encodeURIComponent('https://xkcd.com/info.0.json'))
	.then(rsp => rsp.json())
	.then(data => dispxkcd(data))
	.catch(function (error) {
		console.log("fuck: " + error);
	})