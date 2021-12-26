
// 로또 번호를 관리하는데 필요한 변수들!
const lotto = []  // 추첨될 번호 보관할 배열
let isCreate =  false; // 추첨 중이냐 아니냐 ( 추첨중이면 다른추첨 불가능하게)
let step = 0; // 여섯개를 표시했나 체크하는 변수
let intervalId = 0; // 주기적동작의 id 백업하기 용도 변수
const createComment = ["생성중..","생성중...","생성중."]
const colors = ["red","green","blue","yellow","black"]


// 리셋버튼 누르면 추첨결과 싹 사라지게
function resetNumbers(){
    // 색칠없애기
    $(".selected").removeClass("selected") 
    // 추첨결과 없애기
    $(".result").empty()
    // 리셋버튼 숨기기
    $(".js-reset").hide()
}

/* function getColor(number){
    let color = "yellow"
    if(number >= 10 && number < 20){
        color = "blue"
    }else if(number >= 20 && number < 30){
        color = "red"
    }else if(number >= 30 && number < 40){
        color = "black"
    }else if(number >= 40){
        color = "green"
    }
    return color;
} */

// 추첨결과를 추가하자
function displayNumbers(){
    const numberContainer = $('<div class="dNumbers"></div>') // 여섯개를 모아놓은 영역
    for(let i = 0; i < 6; i++){
        const number = $('<div class="dNumber"> </div>')
        number.text(`${lotto[i]}`)

        number.css("background-color", colors[parseInt(lotto[i]/10)]) 
        // 로또번호[배열인덱스]를 10으로 나눈 몫으로 색상 인덱싱
        
        numberContainer.append(number)
    }
    numberContainer.css("display","none") // 안보이는요소로 만들고~
    $(".result").append(numberContainer) // ~그리고 추가한다!
    
    numberContainer.fadeIn(1200) // 추가되었으니 스르륵 나타나라~!

    $(".js-reset").show(); // 추첨결과가 하나 이상 있으니 초기화 버튼도 보자

}


// 추첨된 번호를 웹문서에 표시하자
function pointNumbers(){
    $(`#no-${lotto[step]}`).addClass('selected')
    $(".ing").text(createComment[step % 3]) // 생성중... 표시하기 위한 배열 인덱싱!
    step++;

    // 여섯 개 다 포인팅 하고 나면 ~
    if(step == 6){
        clearInterval(intervalId) // ~인터벌 동작 id를 불러와서 제거
        step = 0;
        isCreate = false;
        $(".ing").removeClass("visible") // '생성중' 이제 그만 보기
        displayNumbers() // 이제 결과 보여줘라
    }
}

// 번호 여섯개를 추첨하자
function createLottoNumbers(){

    // 추첨하는 중이면 추첨못하게하기
    if(isCreate){
        return; // 생성 중이면 함수 강제 종료
    }
    isCreate = true; // 생성 안하고 있었으면 하렴
    
    lotto.splice(0,6) // 로또 배열을 비운다!
    $(".selected").removeClass("selected") // 선택되어있던 요소들 초기화
    
    while(lotto.length < 6){
        const number = Math.floor(Math.random() * 45) + 1
        if(lotto.indexOf(number) === -1){
            lotto.push(number)
        }
    }
    
    $(".ing").addClass("visible") // '생성중' 보이기 시작!
    // pointNumbers를 주기적으로 호출한다
    // 셋인터벌은 0이 아닌 정수를 반환한다!
    intervalId = setInterval(pointNumbers, 300)
    
}

// 45개의 번호를 표시하자
function createWholeNumber(){
    for(let i = 1; i <= 45; i++){
        const numDiv = $(`<div id="no-${i}"> </div>`)
        numDiv.html(`<p class="number"> ${i} </p>`)
        $(".js-numbers").append(numDiv)
    }
}

function init(){
    createWholeNumber(); // 번호판 만들기
    $(".ing").removeClass("visible") // "생성중" 처음에 안보이게!
    $(".js-btn").click(createLottoNumbers) 
    $(".js-reset").click(resetNumbers)
}



$(document).ready(function(){
    init(); // 초기 UI 세팅, 이벤트 등록
})