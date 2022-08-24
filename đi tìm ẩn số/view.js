console.log(getItemLocalstorage())
if (getItemLocalstorage().length === 0) {
    localStorage.setItem('number', JSON.stringify(''))
   // play game khỏi làm gì vì ko có local
} else {
    ELEMENT_SHOW_PLAY_CONTINUE.style.display = 'block';
    // muôn chơi tiếp or game mới
}

//show data game
ELEMENT_BTN_PLAY.addEventListener('click', function() {
    if(toggleNewGame) {
        earlyGameAttributes()
        randomNumber()
        toggleNewGame = false
    } else {
        ELEMENT_SHOW_NEW_GAME.style.display = 'block';
    }
    showListNumber()
})

ELEMENT_BTN_SAVE.addEventListener('click', function(){
    toggleFormSave(toggleSave)
    toggleSave = !toggleSave 
})

ELEMENT_DARK_MODE.addEventListener('click', function(){
    if(darkMode) {
        this.style.background = 'white'
        this.style.color      = 'black'
        document.body.style.background = 'black'
    } else {
        this.style.background = 'black'
        this.style.color      = 'white'
        document.body.style.background = '#3f8434'
    }
    darkMode = !darkMode
})

showListNumber()
// mấy nay để show dữ liệu từ local khi chơi tiếp tục game cũ
arrData = getItemLocalstorage()
showResult()
showNumberOnClick()
    