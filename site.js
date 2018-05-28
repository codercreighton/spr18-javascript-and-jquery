$('#circle').hover(function(){
		// alert("Clicked!");

		// $('p').html("We have changed the text");


		$('img').attr('src','https://www.moj.io/wp-content/themes/mojio-child/assets/img/home/orangecar.png');



});


$('.square').click(function(){
		$(this).css('background-color','blue');
});

$('.square').hover(function(){
	$(this).css('width', '400px');
	$(this).css('height','400px');
});


$('#button').click(function(){

// $(function(){
	$('#circle').effect('shake');
	$('p').fadeIn(500);
	


});
// });



$(function(){
	$('#square').resizable();

});

$(function(){
	$('#sortable').sortable();
});

// $('.square').hover(function() {
//   $('img').attr('src','https://www.moj.io/wp-content/themes/mojio-child/assets/img/home/orangecar.png')
//   });


// $('.square').hover(function(){
// 	$(this).css('width', '400px');
// 	$(this).css('height','400px');
// })


// $(function() {
//   $('#circle').draggable();
//   })

// $(function() {
//   $('#resizeable').resizable();
//   })

