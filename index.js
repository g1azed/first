

// 각 그래프가 그려졌나 여부
let photoshop = false
let ilust = false
let after = false
let light = false

let html = false
let css = false
let js = false
let react = false



$(document).ready(function(){
  window.onscroll = function(e){
    if($(window).scrollTop() >= 700 && !photoshop){
      photoshop = true;
      var i=1;
      var func1 = setInterval(function(){
          if(i<86){
              color1(i);
              i++;
          } else {
              clearInterval(func1);
          }
      },10);
    }else if($(window).scrollTop() >= 700 && !ilust){
      ilust = true;
      var i=2;
      var func2 = setInterval(function(){
          if(i<91){
              color2(i);
              i++;
          } else {
              clearInterval(func2);
          }
      },10);
    }else if($(window).scrollTop() >= 700 && !after){
      after = true;
      var i=3;
      var func3 = setInterval(function(){
          if(i<73){
              color3(i);
              i++;
          } else {
              clearInterval(func3);
          }
      },10);
    }else if($(window).scrollTop() >= 700 && !light){
      light = true;
      var i=4;
      var func4 = setInterval(function(){
          if(i<94){
              color4(i);
              i++;
          } else {
              clearInterval(func4);
          }
      },10);
    }else if($(window).scrollTop() >= 700 && !html){
      html = true;
      var i=5;
      var func5 = setInterval(function(){
          if(i<70){
              color5(i);
              i++;
          } else {
              clearInterval(func5);
          }
      },10);
    }else if($(window).scrollTop() >= 700 && !css){
      css = true;
      var i=6;
      var func6 = setInterval(function(){
          if(i<50){
              color6(i);
              i++;
          } else {
              clearInterval(func6);
          }
      },10);
    }else if($(window).scrollTop() >= 700 && !js){
      js = true;
      var i=7;
      var func7 = setInterval(function(){
          if(i<43){
              color7(i);
              i++;
          } else {
              clearInterval(func7);
          }
      },10);
    }else if($(window).scrollTop() >= 700 && !react){
      react = true;
      var i=8;
      var func8 = setInterval(function(){
          if(i<30){
              color8(i);
              i++;
          } else {
              clearInterval(func8);
          }
      },10);
    }

  }
});





function color1(i){
  $(".conic:nth-child(1)").css({
      "background":"conic-gradient(#003399 0% "+i+"%, #ffffff "+i+"% 100%)"
      });
  
}
function color2(i){
  $(".conic:nth-child(2)").css({
      "background":"conic-gradient(orange 0% "+i+"%, #ffffff "+i+"% 100%)"
      });
   
}
function color3(i){
  $(".conic:nth-child(3)").css({
      "background":"conic-gradient(#C98AFF 0% "+i+"%, #ffffff "+i+"% 100%)"
      });
   
}
function color4(i){
  $(".conic:nth-child(4)").css({
      "background":"conic-gradient(#6799FF 0% "+i+"%, #ffffff "+i+"% 100%)"
      });
   
}function color5(i){
  $(".conic:nth-child(5)").css({
      "background":"conic-gradient(#FFB85A 0% "+i+"%, #ffffff "+i+"% 100%)"
      });
   
}function color6(i){
  $(".conic:nth-child(6)").css({
      "background":"conic-gradient(#4374D9 0% "+i+"%, #ffffff "+i+"% 100%)"
      });
   
}function color7(i){
  $(".conic:nth-child(7)").css({
      "background":"conic-gradient(#FFE400 0% "+i+"%, #ffffff "+i+"% 100%)"
      });
   
}function color8(i){
  $(".conic:nth-child(8)").css({
      "background":"conic-gradient(#C4FDFF 0% "+i+"%, #ffffff "+i+"% 100%)"
      });
   
}

function replay(){
  i=1;
  func1 = setInterval(function(){
      if(i<86){
          color1(i);
          i++;
      } else if(i<91){
          color2(i);
          i++;
      } else if(i<73){
          color3(i);
          i++;
      } else if(i<94){
        color4(i);
        i++;
      } else if(i<70){
        color5(i);
        i++;
      } else if(i<50){
        color6(i);
        i++;
      } else if(i<43){
        color7(i);
        i++;
      } else if(i<30){
        color8(i);
        i++;
      } else {
          clearInterval(func1);
      }
  },10);
}





