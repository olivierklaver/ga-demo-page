window.addEventListener('wheel', handleScroll);

function handleScroll(event) {
	// event.deltaY;
	let productElm = document.querySelector('.product-demo');
	productElm.style.cssText = "border: 5px solid green;";
}
