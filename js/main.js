// Check Service Workers support
if('serviceWorker' in navigator) {
	console.log('Service Worker Supported')
}

//$('h1#heading1').hide();
$('h1.heading2').hide();
$('p span').css('color', '#f1a');
$('li:first-child').css('color', '#f1a');
$('li:last-child').css('color', '#a1f');
$('li:even').css('color', '#1af');
//$(':submit').hide();
$('[href]').css('color', '#1af');
$('[href="https://yahoo.com"]').css('color', '#1fa');

/*****************************************************
EVENTS
*/
$('#btn1').on('mousedown', (function(){
	//alert('Button Clicked!');
	$('#container p:last-child').toggle();
}));

$('#btn1').on('mouseup', (function(){
	//alert('Button Clicked!');
	$('#container p:last-child').toggle();
}));
// $('#btn2').click(function(){
// 	$('#container p:last-child').hide();
// })
