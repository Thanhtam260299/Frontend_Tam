
//DOM
let ul = document.createElement('ul') 
let li1 = document.createElement('li') 
let li2 = document.createElement('li') 

li1.innerText = 'trong react' // như thế này chỉ là đang tạo trong bộ nhớ thôi chưa hiện trong giao diện
li2.innerText = 'trong react' // như thế này chỉ là đang tạo trong bộ nhớ thôi chưa hiện trong giao diện
ul.title = 'hello'
ul.className = 'heading'
console.log(ul)

document.body.appendChild(ul) // dùng cách này để render ra giao diện
ul.appendChild(li1)
ul.appendChild(li2)
//REACT DOM

// React.createElement(type, props, children1, children2, children n) trong này childen vẫn được coi là props nhưng mà nó thể hiện khác thôi

const ulReact = React.createElement('ul', null, 
    React.createElement('li', null, 'cố lên m sẽ làm được'),
    React.createElement('li', null, 'cố lên m sẽ làm được')
)
// khi viết từ 2 phần tử children trở lên thì nó sẽ thể hiện trong prop là 1 Array

console.log(ulReact)

// get element root

const rootEl   = document.getElementById('root')

// react-dom

ReactDom.render(ulReact, rootEl)

