// 1. Var vs Let. Const: 
    // scope, hosting 
// 2. Const vs Var, Let
    // Assignment

// scope
// code blcok: if else, loop, {}, ... 
if (true){
    var course1 = "hello"
    let course2 = "hello"
    console.log(course2)
    {
        console.log(course2)
    }
}
console.log(course1)
// console.log(course2)
// var hỗ trợ ngoài code block 
// let/ const chỉ hỗ trợ trong code block 

//hosting
// var có thể đặt biến trước khi đặt kiểu dữ liệu 
a = 1 
var a 
console.log(a)

// b = 1 
// let b 
// console.log(b)

// Assignment
// const không thể gắn lại biến cho const 
// có thể lưu lại thuộc tính 

// const ex = 1 
// ex = 2 
// console.log(ex)

const ex2  = {
    name: 'khoa'
}
ex2.name = 'ngoc'
console.log(ex2) 

// !!!!!
// code thuần: Var
// Babel: Const, Let 
