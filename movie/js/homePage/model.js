// load
window.onload = function(){
    loader.style.display= 'none';
}

// toggleFormMenu
const toggleFormMenu = (open) => {
    if (open) {
        ELEMENT_HEADER_NAVBAR.classList.add('navbar-active');
        ELEMENT_HEADER_BTN[1].style.display = 'block';
        ELEMENT_HEADER_BTN[2].style.display = 'block';
        ELEMENT_COVER_NAVBAR.style.display  = 'block';
        ELEMENT_HEADER_MENU.classList.add('hover-menu');
    } else {
        ELEMENT_HEADER_NAVBAR.classList.remove('navbar-active');
        ELEMENT_HEADER_BTN[1].style.display = 'none';
        ELEMENT_HEADER_BTN[2].style.display = 'none';
        ELEMENT_COVER_NAVBAR.style.display  = 'none';
        ELEMENT_HEADER_MENU.classList.remove('hover-menu');
    }
    toggleMenu = !toggleMenu;
}

ELEMENT_HEADER_MENU.addEventListener('click', function() {
    toggleFormMenu(toggleMenu)
})

//stop close when click menu
ELEMENT_COVER_NAVBAR.addEventListener('click', function (){
    ELEMENT_HEADER_NAVBAR.classList.remove('navbar-active');
    ELEMENT_HEADER_BTN[1].style.display = 'none';
    ELEMENT_HEADER_BTN[2].style.display = 'none';
    ELEMENT_COVER_NAVBAR.style.display = 'none';
    ELEMENT_HEADER_MENU.classList.remove('hover-menu');
    toggleMenu = true
})

ELEMENT_HEADER_NAVBAR.addEventListener('click', function(event) {
event.stopPropagation()
})

// toggleDarkMode
const toggleDarkMode = (open) => {
    if (open) {
        ELEMENT_ICON_BULB.style.background  = '#e4e593';
        ELEMENT_ICON_BULB.style.color       = '#000';
        document.body.style.background      = '#e4e593';
        changeColor(ELEMENT_NAME_CAST, '#000')
    } else {
        document.body.style.background      = '#242632';
        ELEMENT_ICON_BULB.style.background  = 'rgb(62 75 99)';
        ELEMENT_ICON_BULB.style.color       = '#fff';
        changeColor(ELEMENT_NAME_CAST, '#fff')
    }
    darkMode = !darkMode;
}

// changeColor cho dark mode
function changeColor(el, color) {
    for (var i = 0; i < el.length; i++) {
        var currentEl = el[i];
        currentEl.style.color = color;
    }
}

//
ELEMENT_ICON_BULB.addEventListener('click', function() {
    toggleDarkMode(darkMode)
})

// set time out cho 2 thèn slide
setTimeout(() => {
    const   prevBtnHeader1                      = document.querySelectorAll('.prev-header1'),
            nextBtnHeader1                      = document.querySelectorAll('.next-header1'),
            prevBtnHeader2                      = document.querySelector('#prev-header2'),
            nextBtnHeader2                      = document.querySelector('#next-header2'),
            ELEMENT_INTERVAL_HEADER1            = document.getElementById('intervalHeader1'),
            ELEMENT_INTERVAL_HEADER2            = document.getElementById('intervalHeader2'),
            ELEMENT_SLIDE_MOVIE_ODD             = document.querySelectorAll(".odd-render .slide-movie-odd"),
            ELEMENT_SLIDE_MOVIE_NOMINATION      = document.querySelectorAll(".genre-render .slide-movie-nomination");

    let     currentHeader1          = 0,
            currentHeader2          = 0;
    //// slider header 1
    nextBtnHeader1[0].addEventListener('click', function() {
        nextImgHeader1(ELEMENT_SLIDE_MOVIE_NOMINATION)
    })
    prevBtnHeader1[0].addEventListener('click', function(){
        prevImgHeader1(ELEMENT_SLIDE_MOVIE_NOMINATION)
    })

    function showImgHeader1(n, element) {
        element.forEach((slide) => {
            slide.style.transform = "translateX(" + (-n*100) + "%)";
        });
    }

    function nextImgHeader1(element) {
        if (currentHeader1 < element.length - 17) {
            currentHeader1++;
        } else {
            currentHeader1 = 0;
        }
        showImgHeader1(currentHeader1, element);
    }

    function prevImgHeader1(element) {
        if (currentHeader1 <= 0) {
            currentHeader1 = element.length - 17;
        } else {
            currentHeader1--;
        }
        showImgHeader1(currentHeader1, element);
    }

    let intervalHeader1 = setInterval(() => {
        nextImgHeader1(ELEMENT_SLIDE_MOVIE_NOMINATION)
    }, 3000);

    // stop intervalHeader1

    ELEMENT_INTERVAL_HEADER1.addEventListener('mouseenter', function(){
        clearInterval(intervalHeader1)
    })
    ELEMENT_INTERVAL_HEADER1.addEventListener('mouseleave', function(){
        intervalHeader1 = setInterval(() => {
            nextImgHeader1(ELEMENT_SLIDE_MOVIE_NOMINATION)
        }, 3000);
    })

    ////// slider header 2
    nextBtnHeader2.addEventListener('click', function() {
        nextImgHeader2(ELEMENT_SLIDE_MOVIE_ODD)
    })
    prevBtnHeader2.addEventListener('click', function(){
        prevImgHeader2(ELEMENT_SLIDE_MOVIE_ODD)
    })

    function showImgHeader2(n, element) {
        element.forEach((slide) => {
            slide.style.transform = "translateX(" + (-n*100) + "%)";
        });
    }

    function nextImgHeader2(element) {
        if (currentHeader2 < element.length - 5) {
            currentHeader2++;
        } else {
            currentHeader2 = 0;
        }
        showImgHeader2(currentHeader2, element);
    }

    function prevImgHeader2(element) {
        if (currentHeader2 <= 0) {
            currentHeader2 = element.length - 5;
        } else {
            currentHeader2--;
        }
        showImgHeader2(currentHeader2, element);
    }

    let intervalHeader2 = setInterval(() => {
        nextImgHeader2(ELEMENT_SLIDE_MOVIE_ODD)
    }, 3000);

    // stop intervalHeader2

    ELEMENT_INTERVAL_HEADER2.addEventListener('mouseenter', function(){
        clearInterval(intervalHeader2)
    })
    ELEMENT_INTERVAL_HEADER2.addEventListener('mouseleave', function(){
        intervalHeader2 = setInterval(() => {
            nextImgHeader2(ELEMENT_SLIDE_MOVIE_ODD)
        }, 3000);
    })
}, 3000);
// kết thúc set timeout cho mấy thèn slide

// slide main
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

setInterval(() => {
    nextImg();
    addActiveDot(current);
}, 3000);
// end slide main

// slider header movie cast
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
// end slide cast

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
    OPEN_CHANGE_PAGE.style.display = "none";
    ELEMENT_HOME_PAGE.style.display = "none";
    ELEMENT_PER_PAGE.style.display = "block";
    ELEMENT_SHOW_FAVOURITE.style.display = 'none'
    movieInfo = arrData.find(item => { 
         return item.id == document.getElementById(id_movie).value
    })
//tại vì api content tối đa có 12 thôi lớn hơn thì undefind
    n > 12 ? n = 2 : false
    movieInfo ? showPage(movieInfo, arrDataContent[n]) : false
// add item watched
    arrWatched = getWatchedLocalstorage()
    if (!arrWatched.some(item => item.idMovie == id_movie )) {
        let elementParentImg = document.getElementById(id_movie).closest('.slide-nominated__cover-img')
        let srcImg           = elementParentImg.querySelector('img').src
        movieInfo.src        = srcImg
        movieInfo.idMovie    = id_movie
        movieInfo.clas       = elItemMovie
        movieInfo.n          = indexItemMovie
        arrWatched.unshift(movieInfo)
        localStorage.setItem('watched', JSON.stringify(arrWatched))
        ShowPageFavourite(arrWatched, ELEMENT_WATCHED, "none")
    }
}

// show page watch movie
const showPage = (item, content) => {
    let  btnFavourite = 'Yêu thích';
    document.querySelector('.content__favourite').style.background = 'rgb(212, 54, 54)'
    getarrFavouriteLocalstorage().forEach(item => {
        if(item.idMovie == id_movie ) {
            btnFavourite = 'Bỏ thích'
            document.querySelector('.content__favourite').style.background = 'green'
        } 
    })
    
    // check đã dăng nhập user thì mới hiện đã yêu thích
    ELEMENT_USER.style.display == 'block' ? ELEMENT_BTN_FAVOURITE.innerHTML = btnFavourite : false

    ELEMENT_MOVIE.innerHTML = `<iframe id="video" width="100%" height="500px" src="https://www.youtube.com/embed/${item.key}" 
                                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                                     clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>`
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
const ShowPageFavourite = (arr, ele, display) => {
    let Fxhtml = ''
    for(let n = 0; n <= arr.length-1 ; n++) {
        let itemF    =  arr[n]
        Fxhtml   += ` <a href="#" onclick="clickItem('${itemF.clas}' , ${itemF.n})" class="c-2-5 col l-3 m-6 f-12 slide-nominated-link ${itemF.clas}">
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
                            <i style="  display: ${display}"  class="fa-solid fa-heart slide-nominated-favourite"></i>
                        </div>
                    </a>`
    }   
    ele.innerHTML = Fxhtml
}

// click show page favourite
const BtnshowFavourite = () => {
    ELEMENT_HOME_PAGE.style.display = "none";
    ELEMENT_PER_PAGE.style.display = "none";
    ELEMENT_BLOCK_USER.style.display = 'none'
    OPEN_CHANGE_PAGE.style.display = 'none'
    ELEMENT_SHOW_FAVOURITE.style.display = 'block'
    ShowPageFavourite(getarrFavouriteLocalstorage(), FAVOURITE_RENDER, "block")
}

// add item favourite
const addListFavourite = (el) => {
    // laays thenf cha tổng này để xét color cho thèn trái tym
    let elementParentground = document.getElementById(id_movie).closest('.slide-nominated__cover-img').closest('.slide-nominated-ground')
    // nếu đang là bỏ thích thì sẽ yêu thích
    if(ELEMENT_BTN_FAVOURITE.innerHTML == 'Bỏ thích'){
        ELEMENT_BTN_FAVOURITE.innerHTML = 'Yêu thích'
        arrFavourite         = getarrFavouriteLocalstorage()
        arrFavourite.forEach((item, index) => {
            if (item.idMovie == id_movie) {
                arrFavourite.splice(index, 1)
            }
        })
        el.style.background = 'rgb(212, 54, 54)'
        localStorage.setItem('movieFavourite', JSON.stringify(arrFavourite))
        elementParentground.querySelector(".slide-nominated-favourite").style.display = 'none'
        showSuccessDelete()
        // nếu user avatar đang lock là đã đăng nhập thì có thể nhấn yêu thích
    } else if(ELEMENT_USER.style.display == 'block'){
        arrFavourite         = getarrFavouriteLocalstorage()
        let elementParentImg = document.getElementById(id_movie).closest('.slide-nominated__cover-img')
        let srcImg           = elementParentImg.querySelector('img').src
        movieInfo.src        = srcImg
        movieInfo.idMovie    = id_movie
        movieInfo.clas       = elItemMovie
        movieInfo.n          = indexItemMovie
        arrFavourite.push(movieInfo)
        localStorage.setItem('movieFavourite', JSON.stringify(arrFavourite))
        ELEMENT_BTN_FAVOURITE.innerHTML = 'Bỏ thích'
        el.style.background = 'green'
        elementParentground.querySelector(".slide-nominated-favourite").style.display = 'block'
        //////////////
        showSuccessToast()
    } else {
        // còn lại thì phải đăng nhập mới yêu thích được 
        showErrorToast()
    }
}

//  render navbar genre
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
        xhtml += ` <a href="#" onclick="clickItem(this)" class="c-2-5 col l-3 m-6 f-12 slide-nominated-link ${clas}">
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

// getLoginLocalstorage
const getLoginLocalstorage = () => {
    let dataComment = JSON.parse(localStorage.getItem('login'))
    dataComment = dataComment ? dataComment : []
    return dataComment
}

// getarrFavouriteLocalstorage
const getarrFavouriteLocalstorage = () => {
    let dataFavourite = JSON.parse(localStorage.getItem('movieFavourite'))
    dataFavourite = dataFavourite ? dataFavourite : []
    return dataFavourite
}

// getarrFavouriteLocalstorage
const getWatchedLocalstorage = () => {
    let dataFavourite = JSON.parse(localStorage.getItem('watched'))
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
    if ( ELEMENT_HOME_PAGE.style.display == "none"){

    }
    ELEMENT_HOME_PAGE.style.display = "block";
    ELEMENT_PER_PAGE.style.display = "none";
    ELEMENT_SHOW_FAVOURITE.style.display = 'none';
    OPEN_CHANGE_PAGE.style.display = "none";
    // gỡ active của mấy thèn trên navbar
    for (const item of ELEMENT_LIST_ITEMS_NAVBAR) {
        item.classList.remove("active-change-page")
    }
    ELEMENT_HOME_ACTIVE.classList.add("active-change-page")
}

// btn show page home
for (const btn of ELEMENT_BTN_HOME) {
    btn.addEventListener('click',goHome)
}

// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");
  
      // Auto remove toast
      const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
      }, duration + 1000);
  
      // Remove toast when clicked
      toast.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };
  
      const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle"
      };
      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);
  
      toast.classList.add("toast", `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
  
      toast.innerHTML = `
                      <div class="toast__icon">
                          <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
      main.appendChild(toast);
    }
  }

  function showSuccessToast() {
    toast({
      title: "Thành công!",
      message: "Đã thêm vào danh sách yêu thích thành công.",
      type: "success",
      duration: 5000
    });
  }

  function showErrorToast() {
    toast({
      title: "Thất bại!",
      message: "Vui lòng đăng nhập tài khoản FMovie.",
      type: "error",
      duration: 5000
    });
  }

  function showSuccessDelete() {
    toast({
      title: "Thành công!",
      message: "Đã xóa khỏi danh sách Yêu thích thành công",
      type: "error",
      duration: 5000
    });
  }

const changePage = (option) => {
    ELEMENT_HOME_PAGE.style.display = "none";
    ELEMENT_SHOW_FAVOURITE.style.display = 'none'
    OPEN_CHANGE_PAGE.style.display = "block";
    ELEMENT_PER_PAGE.style.display = "none";
    for (const item of ELEMENT_LIST_ITEMS_NAVBAR) {
            item.classList.remove("active-change-page")
    }
    option.classList.add("active-change-page")
    let headerText = option.querySelector("a").innerText
    CHANGE_PAGE_HEADER.innerHTML = headerText
    if(headerText == "NEW MOVIE") {
        headerText = "series-movie"
    } else if(headerText == "ODD MOVIE") {
        headerText = "slide-movie-nomination"
    } else if(headerText == "SERIES") {
        headerText = "slide-movie-odd"
    } else if(headerText == "TRAILER") {
        headerText = ""
    } else if(headerText == "ANIME") {
        headerText = ""
    }
    showPageChange(CHANGE_PAGE, headerText)
}

const showPageChange    =  (x, clas) => {
    let xhtml = '',
        item,
        numImg,
        numBlock,
        id_movie ;
    
    
    if ( clas == "slide-movie-nomination") {
        numImg = 0
        numBlock = 0
        arrData = dataMovieGenre
        id_movie = 'id_genre'
    } else if (clas == "slide-movie-odd") {
        numImg = 9
        numBlock = 0
        arrData = dataMovieOrr
        id_movie = 'id_orr'
    } else if (clas == "series-movie") {
        numImg = 0
        numBlock = 0
        arrData = dataMovieSerie
        id_movie = 'id_serie'
    } else if (clas == ""){
        numImg = 11
        numBlock = 0
        arrData = dataMovieComing
        id_movie = 'id_coming'
    } 

    for(let n = 0; n < arrData.length - numBlock ; n++) {
        let checkFavourite = 'none'
        item =  arrData[n]
        if(getDataSaveAccount().user || getLoginLocalstorage().user) {
            if(getarrFavouriteLocalstorage()[0]) {
                for(let a = 0; a < getarrFavouriteLocalstorage().length; a++) {
                    getarrFavouriteLocalstorage()[a].id == item.id ? checkFavourite = 'block' : false
                }
            }
        }
        xhtml   += ` <a href="#" onclick="clickItem('${clas}' , ${n})" class="c-2-5 col l-3 m-6 f-12 slide-nominated-link ${clas}">
                        <div class="slide-nominated-ground">
                            <div class="slide-nominated__cover-img">
                                  <input id="${id_movie}${n}" type="text" value="${item.id}" hidden>
                                  <img class="img-hover" src="https://image.tmdb.org/t/p/original${arrDataImg[numImg].file_path}" alt="">
                            </div>
                            <p class="slide-nominated-name">${item.name}</p>
                            <p class="slide-nominated-sub">
                            ${item.site}
                            </p>
                            <i class="fa-solid fa-play slide-nominated-play"></i>
                            <i style="  display:${checkFavourite}" class="fa-solid fa-heart slide-nominated-favourite"></i>
                        </div>
                    </a>`
                    numImg++;
    }   
    x.innerHTML = xhtml  
} 

// search
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].name.substr(val.length);
            b.innerHTML += "<input type='hidden' name = " + i +" value='" + arr[i].name.replace(
                /&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(
                    /"/g, "&quot;").replace(/'/g, "&#039;") + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                inp.name = this.getElementsByTagName("input")[0].name;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

const checkData = () => {
     arrTotal  = [...dataMovieComing, ...dataMovieGenre, ...dataMovieOrr, ...dataMovieSerie, ...dataTopView];
    autocomplete(document.getElementById("input__form-search"), arrTotal);            
}

ELEMENT_BTN_SEARCH.addEventListener('click', function() {
    if(document.getElementById("input__form-search").name){
    }
})