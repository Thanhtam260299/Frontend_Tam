const   ELEMENT_HEADER_NAVBAR               = document.querySelector(".header__navbar-cover"),
        ELEMENT_HEADER_MENU                 = document.querySelector(".header__icon--menu"),
        ELEMENT_HEADER_BTN                  = document.querySelectorAll(".header__icon"),
        ELEMENT_COVER_NAVBAR                = document.querySelector(".header__navbar"),
        ELEMENT_NAME_CAST                   = document.querySelectorAll(".slide-nominated-name-cast"),
        ELEMENT_ICON_BULB                   = document.querySelector(".header__icon--bulb");

const   prevBtnHeader1                      = document.querySelectorAll('.prev-header1'),
        nextBtnHeader1                      = document.querySelectorAll('.next-header1'),
        prevBtnHeader2                      = document.querySelector('#prev-header2'),
        nextBtnHeader2                      = document.querySelector('#next-header2'),
        ELEMENT_INTERVAL_HEADER1            = document.getElementById('intervalHeader1'),
        ELEMENT_INTERVAL_HEADER2            = document.getElementById('intervalHeader2'),
        ELEMENT_SLIDE_MOVIE_ODD             = document.querySelectorAll(".slide-movie-odd"),
        ELEMENT_SLIDE_MOVIE_NOMINATION      = document.querySelectorAll(".slide-movie-nomination");
let         
        darkMode                = true,
        toggleMenu              = true;

let     currentHeader1          = 0,
        currentHeader2          = 0;