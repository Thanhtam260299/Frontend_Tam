
var boxHeight = document.getElementsByClassName('box');
let maxHeight = 3;


for (let i = 0; i < boxHeight.length; i++) {
    if (maxHeight < boxHeight[i].offsetHeight) {
        maxHeight = boxHeight[i].offsetHeight
    } else {
        maxHeight=maxHeight;
    }
}

    for (let i = 0; i < boxHeight.length; i++) {
        boxHeight[i].style.height = maxHeight + 'px';

        if(i % 2 == 0) {
            boxHeight[i].style.backgroundColor = 'red'
        } else {
            boxHeight[i].style.backgroundColor = 'green';
        }
    }
    
