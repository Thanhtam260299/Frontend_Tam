// showListNumber
const showListNumber = () =>{
    let xhtml = '';
    for (var i = 1; i <= numberTotal; i ++) {
        xhtml += ` <div class="l-2-4 col space-top game_square ">
                        <div class="game_cover">
                            <span class="game_number" id="game_number${i}" ${numberSecret == undefined || comparePause === false ? '' : "onclick=checkNumber("+ i +")"} >
                                ${i}
                            </span>
                        </div>    
                    </div>`
    }
    ELEMENT_GAME_SQUARE.innerHTML = xhtml
}

// show result
const showResult = () => {
    var contentResult = '';
    arrData.forEach((item, index) => {
    contentResult +=`
    <div class="result-fail">
        ${item.result}
        <p class="result-fail-text">
            Lần ${index + 1}: ${item.number} - ${item.compare}
        </p>
        <button hidden value="" id="number-secret-value">
         </button>
    </div>`
    })
    ELEMENT_SHOW_RESULT.innerHTML = contentResult
}

//random number
const randomNumber = () =>{
    numberSecret = Math.floor(Math.random() * numberTotal) + 1;
}

// show number onclick
const showNumberOnClick = () => {
    arrData.forEach((item) => {
        document.getElementById('game_number'+ item.number).classList.add('game_cover_onclick_fail')
    })
}

// show img win
const showImgWin = () => {
    ELEMENT_SHOW_RESULT_WIN.style.display = 'block';
    ELEMENT_SHOW_RESULT_BTN_WIN.addEventListener('click', function(){
        ELEMENT_SHOW_RESULT_WIN.style.display = 'none';
    })
}

//showImgWin
const showImgFail = () => {
    ELEMENT_SHOW_RESULT_FAIL.style.display = 'block';
    ELEMENT_SHOW_RESULT_BTN_FAIL.addEventListener('click', function(){
        ELEMENT_SHOW_RESULT_FAIL.style.display = 'none';
    })  
}
 
// confirm newGameYes
const newGameYes = () => {
    resetLocalStorege()
    earlyGameAttributes()
    ELEMENT_SHOW_NEW_GAME.style.display     = 'none';
    ELEMENT_SHOW_NUMBER_RESULT.innerText    = "?";
    ELEMENT_BTN_CONTINUE.innerHTML          = 'SAVE GAME';
    toggleSave      = true
    arrData         = []
    num             = 1;
    comparePause    = true
    randomNumber()
    //thêm reset máu nữa
    colorHealthRed()
    showResult()
    showListNumber()
}

// confirm newGameNo
const newGameNo = () => {
    ELEMENT_SHOW_NEW_GAME.style.display = 'none';
    showListNumber()
    showNumberOnClick()
}

// getItemLocalstorage
const getItemLocalstorage = () => {
    let dataArray = JSON.parse(localStorage.getItem('data'))
    dataArray = dataArray ? dataArray : []
    return dataArray
}

// getNumberSecretLocalstorage
const getNumberSecretLocalstorage = () => {
    let numberSecretLcal = JSON.parse(localStorage.getItem('number'))
    numberSecretLcal = numberSecretLcal ? numberSecretLcal : []
    return numberSecretLcal
}

// setItemLocalstorage
const setItemLocalstorage = () => {
    localStorage.setItem('data', JSON.stringify(arrData))
}

// setNumberSecretLocalstorage
const setNumberSecretLocalstorage = () => {
    localStorage.setItem('number', JSON.stringify({numberSecret, numberTotal, numberLevel}))
}

// confirm save Yes
const saveYes = () => {
    ELEMENT_SHOW_RESULT_CONFIRM.style.display   = 'none';
    ELEMENT_BTN_CONTINUE.innerHTML              = 'CONTINUE';
    setItemLocalstorage()
    setNumberSecretLocalstorage()
    comparePause = false
    // showlist để reLoad lại chỉ số onclick nhưng như vậy sẽ bị mất thuộc tính màu 
    showListNumber()
    showNumberOnClick()
}

// confirm save no
const saveNo = () => {
    ELEMENT_SHOW_RESULT_CONFIRM.style.display = 'none';
}

// confirm playContinue
const playContinue = () => {
    ELEMENT_SHOW_PLAY_CONTINUE.style.display = 'none';
    resetLocalStorege()
    for (j = 0; j < num - 1; j++) {
        ELEMENT_LIST_ICON[j].style.color = '#fff'
    }
    earlyGameAttributes()
    toggleNewGame = false
}

// confirm playNew
const playNew = () => {
    earlyGameAttributes()
    ELEMENT_SHOW_PLAY_CONTINUE.style.display = 'none';
    resetLocalStorege()
    showListNumber()
    arrData = []
    colorHealthRed()
    num = 1;
    toggleNewGame = false
    showResult()
}

// color health red
const colorHealthRed = () => {
    for (h = 0; h <= ELEMENT_LIST_ICON.length-1; h++) {
        ELEMENT_LIST_ICON[h].style.color = '#e01717'
    }
}

// earlyGameAttributes thuộc tính đầu game
const earlyGameAttributes = () => {
    ELEMENT_BTN_PLAY.innerHTML      = 'NEW GAME'
    ELEMENT_GUIDE.style.display     = 'block'
    ELEMENT_HEALTH.style.display    = 'flex'
}

//select levelEasy
const levelEasy = () => {
    ELEMENT_SHOW_CONFIRM_LEVEL.style.display = 'block';
    numberLevel = 1
}

//select levelMedium
const levelMedium = () => {
    ELEMENT_SHOW_CONFIRM_LEVEL.style.display = 'block';
    numberLevel = 2
}

//select levelHigh
const levelHigh = () => {
    ELEMENT_SHOW_CONFIRM_LEVEL.style.display = 'block';
    numberLevel = 3
}

const playNewLevel = () => {
    switch (numberLevel) {
        case 1:
            numberTotal = 15
            ELEMENT_SHOW_LEVEL_INNER.innerHTML = 'EASY'
            ELEMENT_HEALTH_LEVEL_HIGH[0].style.display = 'none'
            ELEMENT_HEALTH_LEVEL_HIGH[1].style.display = 'none'
            blockNumber = 4
            break;
        case 2:
            numberTotal = 25
            ELEMENT_SHOW_LEVEL_INNER.innerHTML = 'MEDIUM'
            ELEMENT_HEALTH_LEVEL_HIGH[0].style.display = 'none'
            ELEMENT_HEALTH_LEVEL_HIGH[1].style.display = 'none'
            blockNumber = 4
            break;
        case 3:
            numberTotal = 45
            ELEMENT_SHOW_LEVEL_INNER.innerHTML = 'HIGH'
            ELEMENT_HEALTH_LEVEL_HIGH[0].style.display = 'block'
            ELEMENT_HEALTH_LEVEL_HIGH[1].style.display = 'block'
            blockNumber = 6
            break;
    
        default:
            break;
    }
    earlyGameAttributes()
    ELEMENT_SHOW_NUMBER_RESULT.innerText    = "?";
    ELEMENT_SHOW_CONFIRM_LEVEL.style.display = 'none';
    arrData = []
    num     = 1;
    randomNumber()
    //thêm reset máu nữa
    colorHealthRed()
    showListNumber()
    showResult()
}

const playOldLevel = () => {
    ELEMENT_SHOW_CONFIRM_LEVEL.style.display = 'none';
}

//toggle
function toggleFormSave(toggle) {
    if(toggle) {
        ELEMENT_SHOW_RESULT_CONFIRM.style.display = 'block'
    } else {
        ELEMENT_BTN_CONTINUE.innerHTML = 'SAVE GAME'
        comparePause = true
        showListNumber()
        showNumberOnClick()
        resetLocalStorege()
    }
}

//reset localsorage
const resetLocalStorege = () => {
    localStorage.setItem('data', JSON.stringify([]))
    localStorage.setItem('number', JSON.stringify(''))
}

//showNumberSecretAnimation
function showNumberSecretAnimation() {
    ELEMENT_SHOW_NUMBER_RESULT.innerText    = numberSecret;
    ELEMENT_SHOW_NUMBER_RESULT.classList.add('modalBlur')
}

// checkNumber
const checkNumber = (number) =>{ 
    console.log(numberSecret)
    if (num < blockNumber) {
        //đổi màu cho health point
        ELEMENT_LIST_ICON[num - 1].style.color = '#fff'
        result = `<span class="result-img result-img-fail">
                        Sai rồi! 
                        <i class="fa-solid fa-face-sad-cry"></i>
                </span>`
        document.getElementById('game_number'+ number).classList.add('game_cover_onclick_fail')
        //focus cho các ô number
        if(number == numberSecret) {
            result = `<span class="result-img result-img-success">
                            Chính xác! 
                            <i class="fa-solid fa-face-smile-beam"></i>
                    </span>`;
            compare = 'Bạn thắng - Bạn đã chọn đúng số bí mật'
            arrData.push({result, number, compare, num})
            showImgWin()
            //focus cho ô number màu xanh
            document.getElementById('game_number'+ number).classList.add('game_cover_onclick_success')
            // vô đây thì không đổi màu cho health point
            ELEMENT_LIST_ICON[num - 1].style.color = '#e01717'
            showNumberSecretAnimation()
            num = 4
        } else if (num === blockNumber - 1) {
            compare = 'Bạn thua - Số bí mật là ' + numberSecret
            arrData.push({result, number, compare, num})
            showImgFail()
            showNumberSecretAnimation()
        } else if (number > numberSecret) {
            compare = 'Số của bạn lớn hơn số bí mật'
            arrData.push({result, number, compare, num})
        } else {
            compare = 'Số của bạn nhỏ hơn số bí mật'
            arrData.push({result, number, compare, num})
        } 
        showResult();
    } 
    num ++;
}

