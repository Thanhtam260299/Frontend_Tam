// taoj bieens
const ELEMENT_GAME_SQUARE            = document.getElementById('game_inner')
let numberTotal = 25;
const ELEMENT_BTN_PLAY               = document.getElementById('js-btn-play')
const ELEMENT_HEALTH                 = document.querySelector('.notification-health')
const ELEMENT_HEALTH_LEVEL_HIGH      = document.querySelectorAll('.health-icons-level-high')
const ELEMENT_GUIDE                  = document.querySelector('.notification-guide')
const ELEMENT_SHOW_RESULT            = document.querySelector('.notification-result')
const ELEMENT_SHOW_NUMBER_RESULT     = document.querySelector('.notification-number-result')
const ELEMENT_LIST_ICON              = (document.getElementById('list-icon')).getElementsByClassName('notification-health-icons');
const ELEMENT_SHOW_RESULT_WIN        = document.querySelector('.show-result-win')
const ELEMENT_SHOW_RESULT_FAIL       = document.querySelector('.show-result-fail')
const ELEMENT_SHOW_RESULT_CONFIRM    = document.querySelector('.confirm-pause')
const ELEMENT_SHOW_NEW_GAME          = document.querySelector('.confirm-new-game')
const ELEMENT_SHOW_RESULT_BTN_WIN    = document.querySelector('.btn-continue-win')
const ELEMENT_SHOW_RESULT_BTN_FAIL   = document.querySelector('.btn-continue-fail')
const ELEMENT_BTN_SAVE               = document.getElementById('select-save-game')
const ELEMENT_BTN_CONTINUE           = document.querySelector('.select-continue')
const ELEMENT_SHOW_PLAY_CONTINUE     = document.querySelector('.confirm-play-continue')
const ELEMENT_LIST_BTN_SELECT        = (document.getElementById('row-select')).getElementsByClassName('c-3');
const ELEMENT_INPUT_NUMBER_SECRET    = document.getElementById('number-secret-value')
const ELEMENT_CHANGE_LEVEL_EASY      = document.querySelector('.change-center')
const ELEMENT_SHOW_CONFIRM_LEVEL     = document.querySelector('.confirm-play-level')
const ELEMENT_SHOW_LEVEL_INNER       = document.querySelector('.level-inner')
const ELEMENT_DARK_MODE              = document.querySelector('.item-dark-mode')

var numberSecret;
let numberLevel     = '';
let compare         = '';
let result          = '';
let arrData         = [];
let toggleSave      = true;
let toggleNewGame   = true;
let comparePause    = true;
let darkMode        = true;
let blockNumber     = 4;
arrData = getItemLocalstorage()
// tạo biến num
if(arrData.length == 0) {
    var num = 1 
} else {
    num = (arrData[arrData.length-1].num) + 1;
}

// tạo biến numberSecret
numberSecretLcal=getNumberSecretLocalstorage()
if (numberSecretLcal.length === 0) {
    numberSecret = randomNumber()
} else {
    numberSecret = numberSecretLcal.numberSecret
    numberTotal  = numberSecretLcal.numberTotal
    numberLevel  = numberSecretLcal.numberLevel
}

if(numberLevel === 3) {
    ELEMENT_HEALTH_LEVEL_HIGH[0].style.display = 'block'
    ELEMENT_HEALTH_LEVEL_HIGH[1].style.display = 'block'
    blockNumber = 6
}