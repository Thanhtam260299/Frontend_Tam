

nextBtn.addEventListener('click', nextImg)
prevBtn.addEventListener('click', prevImg)

function addActiveDot(n) {
    dotPage.forEach(element => {
        element.classList.remove('active')
    })
    dotPage[n].classList.add('active')
}

function showImg(n) {
    ELEMENT_SLIDE_SHOW.forEach((slide) => {
        slide.style.transform = "translateX(" + (-n*100) + "%)";
    });
}

function nextImg() {
    if (current < ELEMENT_SLIDE_SHOW.length - 1) {
        current++;
    } else {
        current = 0;
    }
    showImg(current);
    addActiveDot(current);
}

function prevImg() {
    if (current <= 0) {
        current = ELEMENT_SLIDE_SHOW.length - 1;
    } else {
        current--;
    }
    showImg(current);
    addActiveDot(current);
}

function dotBtn() {
    dotPage.forEach((element, index) => {
        element.addEventListener('click', function(){
            current = index
            showImg(current)
            addActiveDot(current)
        })    
    })
}

dotBtn()

setInterval(() => {
    nextImg();
    addActiveDot(current);
}, 3000);

// slider header 3
nextBtnHeader3.addEventListener('click', function() {
    nextImgHeader3(ELEMENT_SLIDE_MOVIE_CAST)
})
prevBtnHeader3.addEventListener('click', function(){
    prevImgHeader3(ELEMENT_SLIDE_MOVIE_CAST)
})

function showImgHeader3(n, element) {
    element.forEach((slide) => {
        slide.style.transform = "translateX(" + (-n*1200) + "%)";
    });
}

function nextImgHeader3(element) {
    if (currentHeader3 < element.length / 12 - 1) {
        currentHeader3++;
    }
    showImgHeader3(currentHeader3, element);
}

function prevImgHeader3(element) {
    if (currentHeader3 <= 0) {
    } else {
        currentHeader3--;
    }
    showImgHeader3(currentHeader3, element);
}


///////////////

// click show page watch movie
function clickItem(element, n) {
    if ( element == "slide-movie-nomination") {
        arrData = dataMovieGenre
        id_movie = "id_genre" + n
        genreHeader = 'Phim đề cử'
    } else if (element == "slide-movie-odd") {
        arrData = dataMovieOrr 
        id_movie = "id_orr" + n
        genreHeader = 'Phim lẻ mới cập nhật'
    } else if (element == "series-movie") {
        arrData = dataMovieSerie
        id_movie = "id_serie" + n
        genreHeader = 'Phim bộ mới cập nhật'
    } else if (element == ""){
        arrData = dataMovieComing
        id_movie = "id_coming" + n
        genreHeader = 'Phim sắp chiếu'
    } else if (element == "top-top") {
        arrData = dataTopView
        id_movie = "id_topView" + n
        genreHeader = 'Phim nhiều lượt xem'
    }

    // tạo 2 biến này để phân biệt nhóm nào khi lưu vào tệp favourite
        elItemMovie = element
        indexItemMovie = n
        getFavouriteLocalstorage().forEach(item => {
            if(item.idMovie == id_movie ) {
                btnFavourite = 'Đã yêu thích'
                console.log(btnFavourite)
            } else {
                btnFavourite = 'Yêu thích'
                console.log(item.idMovie)
            }
        })

        ELEMENT_HOME_PAGE.style.display = "none";
        ELEMENT_PER_PAGE.style.display = "block";
        ELEMENT_SHOW_FAVOURITE.style.display = 'none'
        movieInfo = arrData.find(item => { 
            return item.id == document.getElementById(id_movie).value
        })

        //tại vì api content tối đa có 12 thôi lớn hơn thì undefind
        n > 12 ? n = 2 : false
        movieInfo ? showPage(movieInfo, arrDataContent[n]) : false
}

// show page watch movie
const showPage = (item, content) => {
    console.log(btnFavourite)
    ELEMENT_MOVIE.innerHTML = `<iframe id="video" width="100%" height="500px" src="https://www.youtube.com/embed/${item.key}" 
                                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                                     clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>`
    ELEMENT_BTN_FAVOURITE.innerHTML = btnFavourite
    ELEMENT_ITEM_NAME_1.innerHTML   = item.name
    ELEMENT_ITEM_NAME_2.innerHTML   = item.name
    ELEMENT_HEADER_GENRE.innerHTML  = genreHeader
    ELEMENT_ITEM_NAME_3.innerHTML   = 'Nội dung phim ' + item.name
    ELEMENT_MOVIE_CONTENT.innerHTML = content.content
    for (k = 0; k <= content.author_details.rating; k++) {
        ICON_RATING[k].style.color  = 'rgba(61,177,102,1)'
    }
} 

//showPageFavourite
const ShowPageFavourite = () => {
    let Fxhtml = ''
    arrFavourite         = getFavouriteLocalstorage()
    for(let n = 0; n <= arrFavourite.length-1 ; n++) {
        let itemF    =  arrFavourite[n]
        Fxhtml   += ` <a href="#" id="no_data" onclick="clickItem('${itemF.clas}' , ${itemF.n})" class="c-2-5 col l-3 m-6 f-12 slide-nominated-link ${itemF.clas}">
                        <div class="slide-nominated-ground">
                            <div class="slide-nominated__cover-img">
                                  <input id="${itemF.idMovie}${itemF.n}" type="text" value="${itemF.id}" hidden>
                                  <img class="img-hover" src="${itemF.src}" alt="">
                            </div>
                            <p class="slide-nominated-name">${itemF.name}</p>
                            <p class="slide-nominated-sub">
                            ${itemF.site}
                            </p>
                            <i class="fa-solid fa-play slide-nominated-play"></i>
                            <i class="fa-solid fa-heart slide-nominated-favourite"></i>
                        </div>
                    </a>`
        console.log(itemF.name)
    }   
    FAVOURITE_RENDER.innerHTML = Fxhtml
    console.log(arrFavourite)
    ELEMENT_SHOW_FAVOURITE.style.display = 'block'
}

// click show page favourite
const BtnshowFavourite = () => {
    ELEMENT_HOME_PAGE.style.display = "none";
    ELEMENT_PER_PAGE.style.display = "none";
    console.log('show')
    ShowPageFavourite()
}

// add item favourite
const addListFavourite = () => {
    arrFavourite         = getFavouriteLocalstorage()
    let elementParentImg = document.getElementById(id_movie).closest('.slide-nominated__cover-img')
    let srcImg           = elementParentImg.querySelector('img').src
    movieInfo.src        = srcImg
    movieInfo.idMovie    = id_movie
    movieInfo.clas       = elItemMovie
    movieInfo.n          = indexItemMovie
    arrFavourite.push(movieInfo)
    localStorage.setItem('movieFavourite', JSON.stringify(arrFavourite))
}

//  render item genre
const ShowItemGenre = (items, element, clas) =>{
    let xhtml = '';
    let item;
    let n;
    let number;

    if ( clas == "slide-movie-nomination") {
        n = 0
        number = 10
    } else if (clas == "slide-movie-odd") {
        n = 9
        number = 16
    } else if (clas == "series-movie") {
        n = 11
        number = items.length
    } else if (clas == ""){
        n = 13
        number = items.length
    }

    for(n; n < number ; n++) {
        item =  items[n]
        xhtml += ` <a href="#" id="no_data" onclick="clickItem(this)" class="c-2-5 col l-3 m-6 f-12 slide-nominated-link ${clas}">
                        <div class="slide-nominated-ground">
                            <div class="slide-nominated__cover-img">
                                <img class="img-hover" src="${item.poste}" alt="">
                            </div>
                            <p class="slide-nominated-name">${item.name}</p>
                            <p class="slide-nominated-sub">
                            ${item.sub}
                            </p>
                            <i class="fa-solid fa-play slide-nominated-play"></i>
                        </div>
                    </a>`
    }    
    element.innerHTML = xhtml
}

// setCommentLocalstorage
const setCommentLocalstorage = () => {
    localStorage.setItem('comment', JSON.stringify(arrComment))
}

// getCommentLocalstorage
const getCommentLocalstorage = () => {
    let dataComment = JSON.parse(localStorage.getItem('comment'))
    dataComment = dataComment ? dataComment : []
    return dataComment
}

// getFavouriteLocalstorage
const getFavouriteLocalstorage = () => {
    let dataFavourite = JSON.parse(localStorage.getItem('movieFavourite'))
    dataFavourite = dataFavourite ? dataFavourite : []
    return dataFavourite
}

//BTN submit comment
BTN_SUBMIT.addEventListener('click', function(){
    if(INPUT_COMMENT.value){
        comment     = INPUT_COMMENT.value
        nameUser    = ELEMENT_SHOW_NAME_USER.innerText
        avatarUser  = ELEMENT_AVATAR.src
        arrComment.unshift({comment, nameUser, avatarUser})
        INPUT_COMMENT.value = ''
        setCommentLocalstorage()
        showComment()
    } else {
        console.log('méo')
        ELEMENT_ERR_COMMENT.style.display = 'block'
    }
})

const inputComment = () => {
    ELEMENT_ERR_COMMENT.style.display = 'none'
}

//show comment
const showComment = () => {
    arrComment = getCommentLocalstorage()
    let ahtml = '';
    arrComment.forEach(item => {
        ahtml += `<li class="comment__item">
                    <div class="avatar">
                        <img src="${item.avatarUser}" alt="">
                    </div>
                    <ul class="item__content">
                        <li class="item__name">
                            ${item.nameUser}
                        </li>
                        <li class="item__comment">
                            ${item.comment}
                        </li>
                        <li class="item-status">
                            <span>Thích</span>
                            <span>Phản hồi</span>
                            <span>1 phút</span>
                        </li>
                    </ul>     
                </li>`
    })
    LIST_COMMENT.innerHTML = ahtml
}

// go home
const goHome = () => {
    ELEMENT_HOME_PAGE.style.display = "block";
    ELEMENT_PER_PAGE.style.display = "none";
    ELEMENT_SHOW_FAVOURITE.style.display = 'none'
}

// btn show page home
for (const btn of ELEMENT_BTN_HOME) {
    btn.addEventListener('click',goHome)
}



