var textChange = document.getElementById('hello');

// g là thay tất cả còn i là không phân biết chữ hoa chữ thường
var text = textChange.innerText.replace(/frontend/gi, "FRONTEND")


// này là thêm thuộc tính style cho cho thẻ
var result = text.replace(/FRONTEND/g, "<span style='background-color: green; color: white'>$&</span>")


// innerHTML có thể thêm được element node vào text node, còn innerText thì không
textChange.innerHTML = result