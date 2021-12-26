let curPos = 0;
function init() { 
  new WOW().init();
  jQuery('.item').hide()
  jQuery('.active').show()
 }
function prev(){
  if(curPos > 0){
    $('button').removeAttr('disabled')
    document.querySelectorAll('.item')[curPos].classList.toggle("active");
    document.querySelectorAll('.step')[curPos].classList.toggle("active-step");
    jQuery('.item').hide()
    curPos -= 1;
    document.querySelectorAll('.item')[curPos].classList.toggle("active");
    document.querySelectorAll('.step')[curPos].classList.toggle("active-step");
    jQuery('.active').fadeIn()
  }

  if(curPos == 0){
    console.log($('button')[0])
    $('button')[0].setAttribute('disabled', 'true')
  }
}
function next(){
  if(curPos < 3){
    $('button').removeAttr('disabled')
    document.querySelectorAll('.item')[curPos].classList.toggle("active");
    document.querySelectorAll('.step')[curPos].classList.toggle("active-step");
    jQuery('.item').hide()
    curPos += 1;
    document.querySelectorAll('.item')[curPos].classList.toggle("active");
    document.querySelectorAll('.step')[curPos].classList.toggle("active-step");
    jQuery('.active').fadeIn()
  }

  if(curPos == 3){
    $('button')[1].setAttribute('disabled', 'true')
  }
}
$(document).ready(function(){
  // console.log($(".item"))
  init()
});