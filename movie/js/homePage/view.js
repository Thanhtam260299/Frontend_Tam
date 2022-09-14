addActiveDot(current)

getCommentLocalstorage()[0] ? false : setCommentLocalstorage()

showComment()

if(getDataSaveAccount().user) {
    ELEMENT_SIGN_IN_SUCCESS.style.display = 'block'
    ELEMENT_BTN_SIGN_UP.style.display   = 'none'
    ELEMENT_BTN_SIGN_IN.style.display   = 'none'
    ELEMENT_USER.style.display          = 'block'
    ELEMENT_SHOW_NAME_USER.innerText = getDataSaveAccount().user
    console.log(getDataSaveAccount().avatar)
    if(getDataSaveAccount().avatar) {
        console.log('ok')
        ELEMENT_AVATAR.src = getDataSaveAccount().avatar 
        ELEMENT_AVATAR_HOME.src = getDataSaveAccount().avatar 
        ELEMENT_AVATAR_COMMENT.src = getDataSaveAccount().avatar 
    } 
}

renderItemsGenre(ITEM_GENRE, arrListGenre)
renderItemsGenre(ITEM_COUNTRY, arrListCountry)
renderDataTopView(TOP_VIEW, "https://api.themoviedb.org/3/movie/361743/videos?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos", "top-top")
renderData(GENRE_RENDER[0], "https://api.themoviedb.org/3/movie/297762/videos?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos", "slide-movie-nomination")
renderData(GENRE_RENDER[1], "https://api.themoviedb.org/3/movie/297762/videos?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos", "slide-movie-nomination")
renderData(ODD_RENDER,      "https://api.themoviedb.org/3/movie/297761/videos?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos", "slide-movie-odd")
renderData(SERIES_MOVIE,    "https://api.themoviedb.org/3/movie/616037/videos?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos", "series-movie")
renderData(MOVIE_COMING[0], "https://api.themoviedb.org/3/movie/157336/videos?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos", "")
renderData(MOVIE_COMING[1], "https://api.themoviedb.org/3/movie/157336/videos?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos", "")


