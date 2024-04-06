// inner text. text content 
var headingElement = document.querySelector('.innerText') 
console.log(headingElement.innerText)
console.log(headingElement.textContent)
// Điểm khác biệt giữa inner text và text content 
// inner text trả về như trình duyệt hiện ra // là attr của element node 
// text content trả về toàn bộ khoảng cách phía trước và phía sau của content 
// kể cả css và js 

// thêm vào element 
// innerHTML, outerHTML 
var boxElement = document.querySelector('.box1')
// boxElement.innerHTML = '<h1>heading</h1><h1>heading</h1><h1>heading</h1><h1>heading</h1>' // ghi vào bên trong thẻ box
// boxElement.outerHTML = '<h2></h2>' // ghi đè lên thẻ .box1
console.log(boxElement)  // khi in ra thì vẫn in lên giá trị ban đầu tuy nhiên
                        // đã không còn đúng giá trị trong html 