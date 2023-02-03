fetch('https://corsproxy.io/?' + encodeURIComponent('https://rss.slashdot.org/Slashdot/slashdotMain'))
	.then(rsp => rsp.text())
	.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
	.then(data => console.log(data))