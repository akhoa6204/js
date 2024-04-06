/** 
 * html dom 
 * element: id, class, tag, css selector, html selector
 * attribute: 
 * text: 
 */
var headingNode = document.getElementById('heading')
console.log(headingNode)
var headingNodes = document.getElementsByClassName('heading')
console.log(headingNodes) 
var tagNameNode = document.getElementsByTagName('p')
console.log(tagNameNode)
// class và tagname trả về biến là 1 array
// id trả về biến là 1 element

// css selector
var querySelector = document.querySelector('.box .heading:nth-child(2)') //:first-child: con đầu 
console.log(querySelector)

console.log(document.forms['form-2'])
console.log(document.forms.testForm)
// trả về biến là 1 element 
// SelectorAll trả về là 1 array

//html selector
console.log(document.anchors) // truy cập vào thẻ a có attr name = 'text'

var boxNode = document.querySelector('.box')
var subBoxNode = boxNode.querySelectorAll('h1')
console.log(subBoxNode)
console.log(boxNode) 