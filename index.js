$(document).ready(function(){
	Fade()
	Slide()
	Animation()
	StopIt()
});

function Fade() {
 $('#fout').click(function(){
 	$('#fdout').fadeOut(500);
 	//alert()
 });
$('#fin').click(function(){
	$('#fdin').fadeIn(500)
});
$('#ftoggle').click(function(){
	$('#fdtoggle').fadeToggle(500)
});
$('#ftoo').click(function(){
	$('#fdtoo').fadeTo(500 , 0.5)
});
}
function Slide() {
 $('#slide').click(function(){
 	$('.content').slideToggle(500);
 });
}
function Animation() {
 $('#anim').click(function(){
 	/*$('#block').animate({
 		height: '500px',
 		opacity: '0.6'},
 		"slow" );
 	*/
 var block = $('#block');
block.animate({ height: '300px' , opacity: '0.4'} , "slow");
block.animate({width: '300px' , opacity: '0.8'} , "slow");
block.animate({height: '300px' , opacity: '0.4'} , "slow");
block.animate({width: '300px' , opacity: '0.3'} , "slow");
block.animate({height: '300px' , opacity: '0.7'} , "slow");
 });
}
function StopIt() {
 
$('#stop').click(function(){
	$('#block').stop(false , true);
});
 
}