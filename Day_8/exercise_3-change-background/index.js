// function changeColor(color) {
//     document.body.style.backgroundColor = color
// }
// changeColor('red')

// document.addEventListener("DOMContentLoaded", () => {
//     const log = console.log,
//       array = ['red', 'green', 'blue', 'orange', 'yellow', 'violet'],
//       hàm random
//       random = Math.floor(Math.random() * array.length),
//     cái này giúp random thèn ở trên

//       target = document.getElementById("change_background");
//     target.id = `${array[random]}`;
//     log(target);
// });
// console.log(target)

var color =  [
    'red',
    'green',
    'blue',
    'orange',
    'yellow',
    'violet'
];

function changeColor(nu) {
    
    var nu = Math.floor(Math.random() * color.length);

    document.body.style.backgroundColor = color[nu]
}

changeColor();
