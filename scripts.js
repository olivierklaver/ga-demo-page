window.addEventListener('wheel', handleScroll);

let frame = 0;

function handleScroll(event) {
	// event.deltaY;
	let productElm = document.querySelector('.product-demo');
	productElm.style.cssText = "background-position-x: calc("+ Math.floor(frame) +" * -605px);";
	frame += 0.05;
	if(frame > 3) frame = 0;
}


let orderBtn = document.querySelector('#order-button');
orderBtn.addEventListener('mousedown', handleOrderClick);

function handleOrderClick(event) {
	console.log('Order button was clicked');

	gtag('event', 'Order Click', {
		'event_category': 'order test',
		'event_label': 'order event happened'
	});
}
