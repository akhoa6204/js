// 1. là 1 định dạng dữ liệu (chuỗi)
// 3. Thể hiện dạng dữ liệu: number, boolen, string, null, Array, Object
// Mã hóa/ Giải mã 
// Encode/ decode 
// Stringify: từ js type -> JSON
// Parse: từ JSON -> js type 

//number
var json = '1'
//boolean
json = 'true'
//null 
json ='null'
//string
json = '"khoa"'
//array 
json ='["js","php"]'
//object
json = '{"name" : "khoa", "age" : 18}' 
console.log(JSON.parse(json))