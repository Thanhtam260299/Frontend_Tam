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

function changeColor(el, color) {
    for (var i = 0; i < el.length; i++) {
        var currentEl = el[i];
        currentEl.style.color = color;
    }
}

ELEMENT_ICON_BULB.addEventListener('click', function() {
    toggleDarkMode(darkMode)
})

////// slider header 1
// nextBtnHeader1[0].addEventListener('click', function() {
//     console.log('next')
//     nextImgHeader1(ELEMENT_SLIDE_MOVIE_NOMINATION)
// })
// prevBtnHeader1[0].addEventListener('click', function(){
//     console.log('prev')
//     prevImgHeader1(ELEMENT_SLIDE_MOVIE_NOMINATION)
// })

// function showImgHeader1(n, element) {
//     element.forEach((slide) => {
//         slide.style.transform = "translateX(" + (-n*100) + "%)";
//     });
// }

// function nextImgHeader1(element) {
//     if (currentHeader1 < element.length - 6) {
//         currentHeader1++;
//     } else {
//         currentHeader1 = 0;
//     }
//     showImgHeader1(currentHeader1, element);
// }

function prevImgHeader1(element) {
    if (currentHeader1 <= 0) {
        currentHeader1 = element.length - 6;
    } else {
        currentHeader1--;
    }
    showImgHeader1(currentHeader1, element);
}

// let intervalHeader1 = setInterval(() => {
//     nextImgHeader1(ELEMENT_SLIDE_MOVIE_NOMINATION)
// }, 3000);

// stop intervalHeader1

// ELEMENT_INTERVAL_HEADER1.addEventListener('mouseenter', function(){
//     clearInterval(intervalHeader1)
// })
// ELEMENT_INTERVAL_HEADER1.addEventListener('mouseleave', function(){
//     intervalHeader1 = setInterval(() => {
//         nextImgHeader1(ELEMENT_SLIDE_MOVIE_NOMINATION)
//     }, 3000);
// })

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

// let intervalHeader2 = setInterval(() => {
//     nextImgHeader2(ELEMENT_SLIDE_MOVIE_ODD)
// }, 3000);

// stop intervalHeader2

// ELEMENT_INTERVAL_HEADER2.addEventListener('mouseenter', function(){
//     clearInterval(intervalHeader2)
// })
// ELEMENT_INTERVAL_HEADER2.addEventListener('mouseleave', function(){
//     intervalHeader2 = setInterval(() => {
//         nextImgHeader2(ELEMENT_SLIDE_MOVIE_ODD)
//     }, 3000);
// })
