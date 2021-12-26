$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: false
	});
});



$('.P4_top .img:nth-child(1)').hover(function(e){
    if(e.type == "mouseenter"){
        $('.img__para').css('top', 50);
    }else{
        $('.img__para').css('top', 300);
    }
})


$('.P4_top .img:nth-child(2)').hover(function(e){
    if(e.type == "mouseenter"){
        $('.img__para2').css('top', 50);
    }else{
        $('.img__para2').css('top', 300);
    }
})

$('.P4_top .img:nth-child(3)').hover(function(e){
    if(e.type == "mouseenter"){
        $('.img__para3').css('top', 50);
    }else{
        $('.img__para3').css('top', 300);
    }
})
$('.P4_top .img:nth-child(4)').hover(function(e){
    if(e.type == "mouseenter"){
        $('.img__para4').css('top', 50);
    }else{
        $('.img__para4').css('top', 300);
    }
})
$('.P4_top .img:nth-child(5)').hover(function(e){
    if(e.type == "mouseenter"){
        $('.img__para5').css('top', 50);
    }else{
        $('.img__para5').css('top', 300);
    }
})