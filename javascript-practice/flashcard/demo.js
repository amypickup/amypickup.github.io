
$(document).ready( function() {

$('.leftbutton').on("click", function() {
	p = parseInt($('#bigbox').css('top'))-300;

	console.log($('#bigbox').css('top'));
	console.log(p);

	$('#bigbox').css('top', p);
})
});