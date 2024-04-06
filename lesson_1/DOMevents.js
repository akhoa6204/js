// DOM event 
// 1. Attribute event 
// 2. Assign event using the element node 

// attr
boxElement.setAttribute('onclick','console.log(this)')
console.log(boxElement) 
// assign 
boxElement.onclick = function() {
    console.log(this)
}

// 1. input/ select 
// 2. key up/ down/ press: sự kiện của bàn phím  

var inputElement = document.querySelector('input[type="text"]') 
inputElement.onchange = function(e) {
    console.log(e.target.value)
}
// onchange: thay đổi sau khi hoàn thành 
// oninput: nhập đâu đổi đó 

var checkElemnt = document.querySelector('input[type="checkbox"]') 
checkElemnt.onchange = function(e){
    console.log(e.target.checked) 
}
var selectElemnt = document.querySelector('select') 
selectElemnt.onchange = function(e){
    console.log(e.target.value) 
}

// 1. PreventDefault: hành vi mặc định của thẻ
// 2, stopPropagation: hành vi nổi bọt 

var aElements = document.querySelectorAll("a")
aElements.forEach(function(aElement) { 
    aElement.onclick = function(e){
        if (!e.target.href.startsWith('https://fvpl.fconline.garena.vn/')){
            e.preventDefault();
        }
    }
})

var ulElement = document.querySelector("ul")
ulElement.onmousedown = function(e){
    e.preventDefault();
}
ulElement.onclick = function(e){
    console.log(e.target)
}
document.querySelector('div.hanhViNoiBot').onclick = function(e){
    console.log('div')
}
document.querySelector('button.hanhViNoiBot').onclick = function(e){
    e.stopPropagation();
    console.log('click me')
}