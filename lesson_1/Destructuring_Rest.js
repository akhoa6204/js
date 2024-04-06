var array = [ 'khoa', 'ngoc', 'bo']

var [a, b, c] = array 
console.log(a, b, c)

var [a, ...rest] = array;
console.log(a)
console.log(rest)
// rest là còn lại 

// cách viết cũ
// var a = array[0]
// var b = array[1]
// var c = array[2]
// console.log(a, b, c)

var course = {
    name: "khoa" , 
    age: 18,
    school: 'DUE',
    oldSchool: { 
        name: 'PCT', 
        year: '2018-2022'
    }
}

var {name, age, ...rest} = course
console.log(name, age)
console.log(rest)

var {name, oldSchool: {name: oldName}} = course
// thuộc tính con trùng với cha thì phải đổi tên
console.log(name)
console.log(oldName)

// cách xóa 1 key mà không dùng delete 
var {name, ...newObject} = course
console.log(newObject)
// obj mới không có name

var {name, desc = 'default'} = course
console.log(name, desc)
// đặt mặc định cho giá trị k có trong course
 

// ... là biến giá trị cho vào thành danh sách
var logger = (...param) => console.log(param)
logger(1,2,3,4,5)   

var logger1 = (a, ...param) => console.log(param)
logger1(1,2,3,4,5)   

// mảng và obj
var logger2 = ({name, age, ...rest}) => {
    console.log(name)
    console.log(age )
    console.log(rest)
}
logger2({
    name: 'khoa',
    age: 18,
    school: 'DUE'
})

var logger3 = ([a, b, ...rest]) => {
    console.log(a,b) 
    console.log(rest)
}
logger3([1,2,3,4,5])
