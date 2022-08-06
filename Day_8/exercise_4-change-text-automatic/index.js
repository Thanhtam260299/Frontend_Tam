var words =  [
    'HTML',
    'CSS',
    'ReacJS',
    'PHP',
    'Jquery',
];

var text = document.getElementById('course')

setInterval(function(){
    var nu = Math.floor(Math.random() * words.length);
    text.innerText = words[nu];
}, 3000);