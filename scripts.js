window.addEventListener('wheel', handleScroll);

let frame = 0;

function handleScroll(event) {
	// event.deltaY;
	let productElm = document.querySelector('.product-demo');
	productElm.style.cssText = "background-position-x: calc("+ Math.floor(frame) +" * -605px);";
	frame += 0.1;
	if(frame > 3) frame = 0;
}
