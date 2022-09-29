const   ELEMENT_HEADER_NAVBAR               = document.querySelector(".header__navbar-cover"),
        ELEMENT_HEADER_MENU                 = document.querySelector(".header__icon--menu"),
        ELEMENT_HEADER_BTN                  = document.querySelectorAll(".header__icon"),
        ELEMENT_COVER_NAVBAR                = document.querySelector(".header__navbar"),
        ELEMENT_NAME_CAST                   = document.querySelectorAll(".slide-nominated-name-cast"),
        ELEMENT_ICON_BULB                   = document.querySelector(".header__icon--bulb");

let     darkMode                = true,
        toggleMenu              = true;

let     ELEMENT_SLIDE_SHOW                  = document.querySelectorAll(".home__slide-item"),
        ELEMENT_SLIDE_MOVIE_CAST            = document.querySelectorAll(".slide-movie-cast"),
        prevBtn                             = document.querySelector('#prev'),
        nextBtn                             = document.querySelector('#next'),
        prevBtnHeader3                      = document.querySelector('#prev-header3'),
        nextBtnHeader3                      = document.querySelector('#next-header3'),
        dotPage                             = document.querySelectorAll('.dot-page'),
        ELEMENT_HOME_PAGE                   = document.getElementById('home-page'),
        ELEMENT_PER_PAGE                    = document.getElementById('per-page'),
        video                               = document.querySelector('iframe #video'),
        items                               = document.querySelectorAll('.slide-nominated-link');
        ELEMENT_SHOW_FAVOURITE              = document.querySelector('.grid-favourite');

        // render item home
let     GENRE_RENDER                        = document.querySelectorAll('.genre-render'),
        SERIES_MOVIE                        = document.querySelector('.list-series-movie'),
        ODD_RENDER                          = document.querySelector('.odd-render');
        MOVIE_COMING                        = document.querySelectorAll('.movie-coming');
        TOP_VIEW                            = document.querySelector('.top-view__list-items');
        CHANGE_PAGE                         = document.querySelector('.change-page');
        OPEN_CHANGE_PAGE                    = document.querySelector('.change-page-grounp');
        CHANGE_PAGE_HEADER                  = document.querySelector('.change-page-header');
        ITEM_GENRE                          = document.querySelector('.menu-items--genre');
        ITEM_COUNTRY                        = document.querySelector('.menu-items--country');
        FAVOURITE_RENDER                    = document.querySelector('.favourite');
        ELEMENT_ERR_COMMENT                 = document.querySelector('.err-comment');
        ELEMENT_WATCHED                     = document.querySelector('.menu-items--watched');

        //render page
let     ELEMENT_ITEM_NAME_1                 = document.getElementById('nav-bar__item-name'),
        ELEMENT_ITEM_NAME_2                 = document.querySelector('.content__name-movie'),
        ELEMENT_ITEM_NAME_3                 = document.querySelector('.movie__heading'),
        ELEMENT_MOVIE_CONTENT               = document.querySelector('.movie__content'),
        ELEMENT_MOVIE                       = document.getElementById('source-movie'),
        ELEMENT_BTN_HOME                    = document.querySelectorAll('.btn-home'),
        ELEMENT_BTN_FAVOURITE               = document.querySelector('.btn-favourite'),
        ELEMENT_BTN_SEARCH                  = document.querySelector('.form-search i'),
        children1,
        childrenName;  
        
let     LIST_COMMENT                        = document.querySelector('.comment__list'),
        BTN_SUBMIT                          = document.querySelector('.submit'),
        INPUT_COMMENT                       = document.querySelector('.input'),
        ELEMENT_HEADER_GENRE                = document.querySelector('.item__link-genre'),
        ELEMENT_HOME_ACTIVE                 = document.querySelector('.navbar__select-home'),
        ELEMENT_LIST_ITEMS_NAVBAR           = document.querySelectorAll('.header__navbar-item '),
        comment                             = '',
        nameUser                            = '',
        avatarUser                          = '';

let     numberSlide             = 0,
        current                 = 0,
        currentHeader3          = 0;

let     elItemMovie,
        indexItemMovie,
        genreHeader;

let     ICON_RATING                         = document.querySelectorAll('.icon__rating');
var     loader                              = document.querySelector(".preloader");
let     k = 0,
        a = 0;

let     arrDataContent,
        dataMovieGenre,
        dataMovieOrr,
        dataMovieSerie,
        dataTopView,
        dataMovieComing,
        arrDataImg,
        movieInfo;

let     arrFavourite            = [];
let     arrWatched              = [];
let     arrTotal
let     arrComment              = [
        {comment : "phim hay quá", 
        nameUser: "Tâm phạm", 
        avatarUser: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/49801093_2315127492051748_1598515952020881408_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=4FmTh7QaltQAX_xqxMY&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT9Wg31TfIh4-K3V906QheItxJUj1eNg3KWDZy0RP4FzUQ&oe=6343810C"},
        {comment : "Khi nào có phim mới vậy ad", 
        nameUser: "Hồng Lê", 
        avatarUser: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/52598142_2342668362630994_417409154030764032_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=mVNfGiLqHOsAX9khSu7&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT9ADiAr1Uq8g5J9cusTz1UpE_ZAfHaUzWxovpP000aiHQ&oe=6342AEA9"},
        {comment : "Hóng phần mới", 
        nameUser: "Sơn Nguyễn", 
        avatarUser: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/49759031_2315127495385081_8557953187477192704_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=_4ghuwto814AX8C5_g0&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT9odp8OoJc37spcAKsm2brw_P5jy2ikZGq0myVElxEThw&oe=63439C96"},
];

let     arrListGenre             = [
        {item : 'Action'}, {item : 'Horror'}, {item : 'Family'}, {item : 'Crime'},{item : 'War'}, {item : 'Kungfu'},{item : 'Adventure'},{item : 'Animation'},{item : 'Romance'},
        {item : 'History'}, {item : 'Drama'}, {item : 'Documetary'}, {item : 'Sport'}, {item : 'TV Show'}, {item : 'Music'}, {item : 'Biography'},
]

let     arrListCountry                = [
        {item : 'Argentina'}, {item : 'Belgium'}, {item : 'China'}, {item : 'Hong Kong'},{item : 'Italy'}, {item : 'Spain'},{item : 'Australia'},{item : 'France'},{item : 'Hungary'},
        {item : 'Japan'}, {item : 'Poland'}, {item : 'South Africa'}, {item : 'Brazil'}, {item : 'Finland'}, {item : 'Sweden'}, {item : 'Russia'}, {item : 'Mexico'}, {item : 'India'}, {item : 'Canada'}, {item : 'Denmark'},
]
           
const renderData    = async (x, url, clas) => {
    let arrData     = '',
        dataContent = '',
        xhtml = '',
        item,
        numImg,
        numBlock,
        id_movie ;
    
    // fet api data show home page
    try {
        let response      = await fetch("https://api.themoviedb.org/3/movie/" + url + "/videos?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos")
            arrData       = await response.json()
            arrData       =  arrData.results
    } catch {
        console.log('err')
    }

    // fet api data show img
    try {
        let responseImg   = await fetch("https://api.themoviedb.org/3/movie/616037/images?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos")
            arrDataImg    = await responseImg.json()
            arrDataImg    = arrDataImg.backdrops
    } catch {
        console.log('err')
    }

    // fet api data content movie
    try {
        let responseContent = await fetch("https://api.themoviedb.org/3/movie/616037/reviews?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos")
        dataContent         = await responseContent.json()
        arrDataContent      =  dataContent.results
    } catch {
        console.log('err')
    }
        
    if ( clas == "slide-movie-nomination") {
        numImg = 0
        numBlock = 0
        dataMovieGenre = arrData
        id_movie = 'id_genre'
    } else if (clas == "slide-movie-odd") {
        numImg = 9
        numBlock = 0
        dataMovieOrr = arrData
        id_movie = 'id_orr'
    } else if (clas == "series-movie") {
        numImg = 18
        numBlock = 15
        dataMovieSerie = arrData
        id_movie = 'id_serie'
    } else if (clas == ""){
        numImg = 11
        numBlock = 0
        dataMovieComing = arrData
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

const renderDataTopView    = async (x, url, clas) => {
    let arrData,
        arrDataImg,
        dataContent,
        xhtml = '',
        item,
        numImg = 0,
        id_movie;

    // fet api data show TopView
    try {
        let response      = await fetch("https://api.themoviedb.org/3/movie/" + url + "/videos?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos")
            arrData       = await response.json()
            arrData       =  arrData.results
    } catch {
        console.log('err')
    }

    // fet api data img TopView
    try {
        let responseImg   = await fetch("https://api.themoviedb.org/3/movie/361743/images?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos")
            arrDataImg    = await responseImg.json()
            arrDataImg    =  arrDataImg.backdrops
    } catch {
        console.log('err')
    }

    // fet api data contentMovie TopView
    try {
        let responseContent  = await fetch("https://api.themoviedb.org/3/movie/361743/reviews?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos")
            dataContent      = await responseContent.json()
            arrDataContent   =  dataContent.results
    } catch {
        console.log('err')
    }

    dataTopView = arrData
    id_movie = 'id_topView'
        
    for(let n = 0; n < arrData.length - 2 ; n++) {
        let checkFavourite = 'none'
        item =  arrData[n]
        if(getDataSaveAccount().user || getLoginLocalstorage().user) {
            if(getarrFavouriteLocalstorage()[0]) {
                for(let a = 0; a < getarrFavouriteLocalstorage().length; a++) {
                    getarrFavouriteLocalstorage()[a].id == item.id ? checkFavourite = 'block' : false
                }
            }
        }
        xhtml += ` <li class="top-view__item ${clas}" onclick="clickItem('${clas}' , ${n})">
                        <a href="#"class="top-view__item-link">
                            <div class="top-view__item-img slide-nominated__cover-img">
                                <input id="${id_movie}${n}" type="text" value="${item.id}" hidden>
                                <img src="https://image.tmdb.org/t/p/original${arrDataImg[numImg].file_path}" alt="">
                            </div>
                            <div class="top-view__item-group">
                                <h4 class="top-view__item-name">
                                ${item.name}
                                </h4>
                                <ul class="list-items-star">
                                        <li class="item-star">
                                            <i class="fa-solid fa-star"></i>
                                        </li>
                                        <li class="item-star">
                                            <i class="fa-solid fa-star"></i>
                                        </li>
                                        <li class="item-star">
                                            <i class="fa-solid fa-star"></i>
                                        </li>
                                        <li class="item-star">
                                            <i class="fa-solid fa-star"></i>
                                        </li>
                                        <li class="item-star">
                                            <i class="fa-solid fa-star"></i>
                                        </li>
                                </ul>
                                <span class="list-items-since">
                                ${item.published_at}
                                </span>
                                <i style="  display:${checkFavourite}" class="fa-solid fa-heart slide-nominated-favourite"></i>
                            </div>
                        </a>
                    </li>`
        numImg++;
    }   

    x.innerHTML = xhtml  
} 

const renderItemsGenre = (x, arr) => {
    let xhtml = '';
    arr.forEach(item => {
        xhtml += ` <li class="item">
                        <a class=" item-link" href="#">${item.item}</a>
                </li>`
    }) 
    x.innerHTML = xhtml 
}

    

