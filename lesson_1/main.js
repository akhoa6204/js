var fullName = "Phan Nguyen Anh Khoa"
var age = 20
// alert(fullName); // hiện thông báo 
// alert(age)
/** 
 * alert 
 * console 
 * confirm 
 * prompt 
 * set timeout 
 * set interval
 */
console.log(fullName)
console.warn(fullName)
console.error(age) 
// hiện ở console 
// confirm("Please enter") // hộp thoại xác nhận 
// prompt("Please enter") // tương tự confirm có thêm hộp thoại để user nhập vào
// setTimeout(function() {
//     alert("Please enter")
// }, 1000)
// 1000 là thời gian ms
// setInterval( function (){
//     console.log(fullName)
// }, 1000)
// setTimeout : chạy 1 lần 
// setInterval: chạy nhiều lần
/** Toán tử
 * &&: and 
 * ||: or 
 * ! not  */ 

var result = 'a' && 'd'  
console.log(result) /* output: d */
var result = 'a' && NaN  && 'd'
console.log(result) /* output: NaN */
/** thuộc 6 giá trị falsy sẽ in luôn k quan tâm đến sau  
 * 0
 * ''
 * NaN
 * false 
 * null 
 * undefined
*/
var result = 'a' || NaN
console.log(result) /* output: a */ 
var result = NaN || 'a'
console.log(result) /* output: a */ 
var result = 'a' || 'b'
console.log(result) /* output: a */ 
var result = 'a' || 'b'|| NaN
console.log(result) /* output: a */ 

function showDialog() {
    alert('xin chao ngoc co')
}
function write(){
    for(var par of arguments) {
        console.log(par)
    }
}
write('log1', 'log2')
/** cac loai function
 * 1 Declaration funciton   phải đặt  | có thể gọi trước khi định nghĩa 
 * 2 Expression function  có thể đặt tên hoặc không  | không thể gọi trước khi định nghĩa 
 * 3 Arrow function
 */
function show(){

}/* Declaration funciton */
var show2 = function(){

} /* Expression function */ 

//tạo chuỗi 
var fullname = "khoa" //  c1 
var fullname = new String('khoa') //   không sử dụng
var first = '                 khoa  8 123 456 78 khoa khoa khoa khoa                    '
var last = 'phan'
console.log(`toi la: ${first} ${last}`)
console.log(first.length) // độ dài chuỗi

console.log(first.indexOf('8'))
console.log(first.lastIndexOf('8'))

console.log(first.search('8')) // hỗ trợ biểu thức chính qui

console.log(first.slice(0, 5)) // cắt chuỗi 

console.log(first.replace('khoa', 'ngoc')) // thay thế chữ đầu tiên tìm thấy 
console.log(first.replace(/khoa/g, 'ngoc')) // thay thế toàn bộ 

console.log(first.toLowerCase()) 
console.log(first.toUpperCase())

console.log(first.trim())

var languages ='py, ruby, java, c#'
console.log(languages.split(', ')) 
console.log(languages.split('')) 

console.log(languages.charAt(0)) // lấy kí tự theo index 
console.log(languages[2]) 

/*    
Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
*/

var age = 18
var pi = 3.14 
var other = new Number(18); // không sử dụng
var result = 20 / 'ABC' // output: NaN 

// isNaN(): check xem có phải NaN không
// NaN không phải 1 số hay 1 chuỗi 
// tuy nhiên nếu kiểm tra typeof của NaN thì vẫn là number

// toString(): chuyển sang chuỗi 
// toFixed(n): chuyển thập phân sang số nguyên bằng phương pháp làm tròn
// n là số thập phân muốn làm tròn, để trống là số nguyên 

// kiểm tra có phải Array không: Array.isArray()
// typeof array là object 

var numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.toString()) // chuyển sang chuỗi, cách nhau bằng 1 dấu phẩy
var numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.join(' - '))  // chuyển sang chuỗi nối nhau bằng kí tự trong dấu ngoặc
var numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.pop()) // xóa phần tử cuối cùng
console.log(numbers.pop())
console.log(numbers.pop())
console.log(numbers.pop())

console.log(numbers)

console.log(numbers.shift()) // xóa phần tử đầu tiên
console.log(numbers)

console.log(numbers.push('khoa', 'dep trai'))  // thêm vào cuối
console.log(numbers)

console.log(numbers.unshift('khoa', 'dep trai')) //thêm phần tử vào đầu mảng
console.log(numbers)

//làm thay đổi mảng 
console.log(numbers.splice(0, 1)) 
// bắt đầu xóa ở index 0 và số phần tử xóa là 1 
console.log(numbers)
console.log(numbers.splice(0, 0)) //không xóa 
console.log(numbers) 
// chèn  
console.log(numbers.splice(0, 0, 'chen')) //không xóa 
console.log(numbers) 
console.log(numbers.splice(0, 1, 'chen2')) 
// xóa phần tử đầu rồi chèn vào chính index đó 
console.log(numbers) 

var cbd = [1, 2, 3]
var cbd2 = [4, 5]

console.log(cbd.concat(cbd2)) 
// nối chuỗi cbd là chuỗi gốc cộng chuỗi cbd2 

console.log(cbd.slice(-1))
console.log(cbd) 
// không làm thay đổi mảng
console.log(cbd.slice(0)) // copy mảng

// object trong js
var emailKey ='email' // thêm biến vào object thì phải có dấu ngoặc 
var myInfo = {
    name: 'khoa', 
    age: 20,
    address: 'Da Nang. VN',
    [emailKey]: 'khoaanh662004@gmail.com',
    getName: function(){
        return this.name
    }
}
console.log(myInfo['age'])
// hoặc 
console.log(myInfo.age)

delete myInfo.age
console.log(myInfo.getName())

// object constructor

function User(firstName, lastName, avatar){
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
}

User.prototype.className = '48K14.1' // cách thêm vào đối tượng chung
User.prototype.getName = function(){
    return this.className
}
console.log(User)

var author = new User('khoa', 'phan', 'deptrai')
author.class = '48K14.1'
author.sex = 'male'
// thêm thuộc tính cho đối tượng không ảnh hưởng đối tượng chung 
console.log(author.className)

// Date Object
var date = new Date()
var year = date.getFullYear()
var month = date.getMonth()
var day = date.getDate()
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()

console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`)

// Math Object
/** 
 * Math.PI
 * Math.round()
 * Math.abs()
 * Math.ceil()
 * Math.floor()
 * Math.random()
 * Math.min()
 * Math.max()
 */

// Toán tử 3 ngôi 
var obj = { 
    name: 'khoa',
    age: 30,
    address: 'DaNang'
}

var result = obj.age === 20 ? `${obj.age}` : '30'
//                     nếu đúng lấy vế này | sai lấy vế này 
console.log(result)

//  FOR 
//  vòng lặp for 
for(var i = 0; i < 10; i++){}
// vòng lặp for in 
var MyInfo = { 
name: 'khoa', 
age: 20
}
for(var key in MyInfo){
console.log(MyInfo[key]) // key là key trong object
// output: 'khoa' 20 
}
 var myGame = ['lol', 'tft', 'fc online']
for(var game in myGame){
    console.log(myGame[game]) // game là index 
}
//  vòng lặp for of 
var myGame = ['tft', 'tft', 'fc online']
for(var value of myGame){ 
    console.log(value) // trả về giá trị không phải index
}
for(var value of Object.keys(MyInfo)){
    console.log(value)
} // không truy cập được object => biến object thành array 

// while loop 
var i = 0 
while (i<10){
    console.log(i)
    i++
}
var i = 0 
do{
    console.log(i)
    i++
} while(i<1)

/* array methods  */
myGame.forEach(function(game){ // duyệt qua từng phần tử của mảng 
    console.log(game)
}); // call back

// every() trả về boolen
var tft = myGame.every(function (game){
    return game === 'tft' // điều kiện 
});
console.log(tft)
// kiểm tra phần tử của mảng 
// nếu có phần tử sai với dk thì trả về false luôn    

// some(): kiểm tra phần tử trong mảng 
// nếu 1 phần tử đúng sẽ trả về đúng 
var tft = myGame.some(function (game){
    return game === 'tft' // điều kiện 
});
console.log(tft)

// find(): tìm kiếm
var tft = myGame.find(function (game){
    return game === 'tft' // điều kiện 
});
console.log(tft)

// filter(): trả về danh sách đúng với dk lọc
var tft = myGame.filter(function (game){
    return game === 'tft' // điều kiện 
});
console.log(tft)

// map(): ứng dụng để tạo mảng mới dựa trên mảng cũ với những thay đổi mong muốn 
var courses =[
    {
        id: 1,
        name: 'js',
        coin: 10, 
    },{
        id: 2,
        name: 'py',
        coin: 10, 
    },{
        id: 3,
        name: 'c#',
        coin: 10, 
    },{
        id: 4,
        name: 'java',
        coin: 10, 
    },
]
var newCourse = courses.map(function(course){
    return { 
        id: `${course.id}`,
        name: `khoa hoc $'${course.name}`,
        coin: `${course.coin}`,
        coinText: `coin: ${course.coin}`
    }
})
console.log(newCourse);

// reduce(): tính toán tương tự vòng for 
var totalCoin = courses.reduce(function(total, curValue){
    return total + curValue.coin
}, 0) // total ban đầu sẽ là 0  | {} là obj nếu đề yêu cầu
console.log(totalCoin) 
// array.reduce(function(total, curValue){}, intial value) 
// intial value không bắt buộc 
// nếu không có thì lần đầu tiên sẽ trả phần tử đầu tiên của mảng là biến total 
// curValue sẽ là phần tử thứ 2
// lần lặp tiếp theo total sẽ là giá trị của phần tử đầu 
// curValue sẽ là phần tử thứ 3  
// giảm 1 lần lặp so với có biến intial value

// string/ array icludes() methods: kiểm tra trong string/array có tham số trong includes k

//call back 
// vd về hàm map
// Array.prototype.map2 = function (callback){
//     var output=  []
//     var arraylength = this.length // this là đối tượng dùng hàm map
//     for (var i = 0; i  < arraylength; i++) {
//         output.push(callback(this[i], i))
//     }
//     return output 
// }
courses = [
    'khoa',
    'ngoc',
    'minh',
    'no'
]

// forEach()
Array.prototype.forEach2 = function (callback){
    for (var i in this){
        if(this.hasOwnProperty(i)){
            callback(this[i])
        }
    }
}
console.log(courses.forEach2(function (cur){
    console.log(cur)
}))
// khi duyệt qua mảg bằng for...in thì sẽ duyệt qua cả proto 
// muốn ktra không nằm trong proto không dùng hasOwnProperty()

// filter
Array.prototype.filter2 = function (callback){ 
    var output = [];
    for(var i = 0; i < this.length; i++){
        var result = callback(this[i])
        if(result){
            output.push(this[i])
        }
    }
    return output
}
var course = courses.filter2(function (course) {
    return course === 'khoa'
})
console.log(course)

  
// some
Array.prototype.some2 = function (callback){ 
    for(var i = 0; i < this.length; i++){
        var result = callback(this[i], i) 
        if (result){
            return true
        }
    }
    return false
}

var course = courses.some2(function (course){
    return course === 'khoa'
}) 
console.log(course)

// every 
Array.prototype.every2 = function (callback){
    for(var i = 0; i < this.length; i++){
        var result = callback(this[i], i)
        if(!result){
            return false
        } 
    }
    return true
}
var course = courses.every2(function (course){
    return course === 'ngoc'
}) 
console.log(course)

// find 
Array.prototype.find2 = function(callback){
    var output = []
    for(var i = 0; i < this.length; i++){
        var result = callback(this[i], i)
        if(result){
            output.push(this[i])
        }
    }
    return output
}
var course = courses.find2(function (course){
    return course === 'ngoc'
})
console.log(course)





