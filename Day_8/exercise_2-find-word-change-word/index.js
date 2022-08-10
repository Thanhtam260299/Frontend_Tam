var textChange = document.getElementById('hello');

// g là thay tất cả còn i là không phân biết chữ hoa chữ thường
var text = textChange.innerText.replace(/frontend/gi, "FRONTEND")


// này là thêm thuộc tính style cho cho thẻ
var result = text.replace(/FRONTEND/g, "<span style='background-color: green; color: white'>$&</span>")


// var search ='FRONTEND'
var result = text.replace(/FRONTEND/g, `<span style='background-color: green; color: white'>${search}</span>`)

// Nếu như không dùng thèn '$&' thì nên dùng theo cái trên và đặt nó là biến để sau này dễ thay đổi, và phải đặt hai cặp ngoặt lá ${'search'} thèn này thì mới chuyền biến vô được


// innerHTML có thể thêm được element node vào text node, còn innerText thì không
textChange.innerHTML = result