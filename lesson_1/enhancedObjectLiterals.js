var name = 'khoa' 
var age = 19 

var fieldName ='name' 
var fieldAge = 'age'
// var course = {
//     name: name, 
//     age: age,
//     getName: function() { 
//         return this.name
//     }
// }
var course = {
    name, 
    age, 
    getName(){
        return name
    }
}
console.log(course) 

var course2 = { 
    [fieldName]: 'khoa',
    [fieldAge]: 18
}
 
console.log(course2)

// Định nghĩa key/ method
// Định nghĩa key cho method dưới dạng biến
