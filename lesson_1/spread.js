var  array1 = ['khoa']
var  array2 = ['khoa']
var  array3 = [...array1, ...array2]
// bỏ dấu ngoặc
console.log(array3)

var obj1 ={
    name: 'khoa' 
}
var obj2 ={
    age: 18 
}
var obj3 ={
    ...obj1,
    ...obj2,
}
console.log(obj3)


var array = [ 'khoa', 'ngoc', 'bo']

// ... là rest
var logger = (...log) => {
    for(var i = 0; i < log.length; i++){
        console.log(log[i])
    }
}

logger(...array) // ... là spread