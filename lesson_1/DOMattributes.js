// dom attributes 
var headingElement = document.querySelector('#headingText')
// thêm attr vào có 2 cách
headingElement.title = 'heading' // c1 
headingElement.setAttribute('class', 'heading') //c2
console.log(headingElement)       

// lấy ra 
console.log(headingElement.getAttribute('class', heading))
