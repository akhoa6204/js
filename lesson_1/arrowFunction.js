var line = (log) => {
    console.log(log)
}
line('khoa')

// chạy khối code 
// có thể viết 
line = (log) => console.log(log)
line('khoa')

const sum = (a, b) => a + b 
// return luôn không dùng {}

const sum1 = (a, b) => ({a:a, b:b}) 
// return obj

console.log(sum(2, 3))

// không thể dùng để tạo constructor 