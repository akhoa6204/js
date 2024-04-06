// thuộc tính của element node 
// DOM style 
// dùng để css bằng js 
// c1
boxElement.style.height = '200px';
boxElement.style.width = '100px';
boxElement.style.backgroundColor = 'blue'
// c2
Object.assign(boxElement.style, {
    width: '100%',
    height: '50px',
    backgroundColor: 'black' 
})