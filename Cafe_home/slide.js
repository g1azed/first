let curPos = 0;
let position = 0;
const IMAGE_WIDTH = 640;

const prevBtn = document.querySelector(".prev")
const nextBtn =  document.querySelector(".next")
const images = document.querySelector(".P3_top > div")


function prev(){
    if(curPos > 0){
        nextBtn.removeAttribute("disabled")
        position += IMAGE_WIDTH
        images.style.transform = `translateX(${position}px )`
        curPos -= 5
    }
    if(curPos == 0){
        prevBtn.setAttribute("disabled", 'true')
    }
}
function next(){
    if(curPos < 5){
        prevBtn.removeAttribute("disabled")
        position -= IMAGE_WIDTH
        images.style.transform = `translateX(${position}px )`
        curPos += 5
    }
    if(curPos == 5){
        nextBtn.setAttribute("disabled", 'true')
    }
}

function init(){
    prevBtn.setAttribute("disabled",'true')
    prevBtn.addEventListener("click", prev)
    nextBtn.addEventListener("click", next)
}

init();