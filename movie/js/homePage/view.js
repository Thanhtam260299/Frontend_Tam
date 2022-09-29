addActiveDot(current)
dotBtn()
ELEMENT_HOME_ACTIVE.classList.add("active-change-page")

getCommentLocalstorage()[0] ? false : setCommentLocalstorage()

showComment()

// thèn này phải để phía sau thì saveaccount để lỡ nó có save thì show, thèn này dùng để check là phải đang đăng nhập không
if(getLoginLocalstorage().user) {
    ELEMENT_SIGN_IN_SUCCESS.style.display = 'block'
    ELEMENT_BTN_SIGN_UP.style.display   = 'none'
    ELEMENT_BTN_SIGN_IN.style.display   = 'none'
    ELEMENT_USER.style.display          = 'block'
    ELEMENT_SHOW_NAME_USER.innerText = getLoginLocalstorage().user
    if(getLoginLocalstorage().avatar) {
        ELEMENT_AVATAR.src = getLoginLocalstorage().avatar 
        ELEMENT_AVATAR_HOME.src = getLoginLocalstorage().avatar 
        ELEMENT_AVATAR_COMMENT.src = getLoginLocalstorage().avatar 
    }
}

// check xem có phải đang lưu mật khẩu không 
if(getDataSaveAccount().user) {
    ELEMENT_SIGN_IN_SUCCESS.style.display = 'block'
    ELEMENT_BTN_SIGN_UP.style.display   = 'none'
    ELEMENT_BTN_SIGN_IN.style.display   = 'none'
    ELEMENT_USER.style.display          = 'block'
    ELEMENT_SHOW_NAME_USER.innerText = getDataSaveAccount().user
    if(getDataSaveAccount().avatar) {
        ELEMENT_AVATAR.src = getDataSaveAccount().avatar 
        ELEMENT_AVATAR_HOME.src = getDataSaveAccount().avatar 
        ELEMENT_AVATAR_COMMENT.src = getDataSaveAccount().avatar 
    } 
}

// check có data xem sau không 
if (getWatchedLocalstorage()[0]) {
    arrWatched = getWatchedLocalstorage()
    ShowPageFavourite(arrWatched, ELEMENT_WATCHED)
}

renderItemsGenre(ITEM_GENRE, arrListGenre)
renderItemsGenre(ITEM_COUNTRY, arrListCountry)
renderDataTopView(TOP_VIEW, "361743", "top-top")
renderData(GENRE_RENDER[0], "297762", "slide-movie-nomination")
renderData(GENRE_RENDER[1], "297762", "slide-movie-nomination")
renderData(ODD_RENDER,      "297761", "slide-movie-odd")
renderData(SERIES_MOVIE,    "616037", "series-movie")
renderData(MOVIE_COMING[0], "157336", "")
renderData(MOVIE_COMING[1], "157336", "")

// set cái này tại vì mỗi lần đăng nhập phải xóa, phải đợi api lấy xong để xét favourite nên phải xét thời gian cho thèn này
setTimeout(() => {
    localStorage.setItem('login', JSON.stringify([])) 
}, 1000);

