// sync  : đồng bộ 
// async : bất đồng bộ

// setTimeOut, setInterval, fetch
// XMLHttpRequest, file reading 
// request animation frame 
// chạy theo kiểu bất đồng bộ

// Callback hell
// Pyramid of doom 

// Lý thuyết, cách hoạt động 
// tác dụng xử lý thao tác bất đồng bộ 
// để giải quyết vấn đề khi xuất hiện callback hell

// cách tạo 
var promise = new Promise(
    //Excute: truyền vào tham số là 2 hàm
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()             
        resolve()
})

// 3 trạng thái của promise
// pendding: rò rỉ bộ nhớ khi không có thành công hay thất bại
// fulfilled: thành công
// rejected:  thất bại 
promise
    .then(function(){
       return 1      
    })
    .then(function(data){
        console.log(data)
    })
    // khi return không phải là promise 
    // thì sẽ ngay lập tức gọi then sau
    // nếu là promise thì sẽ đợi promise giải quyết xong đề 
    // mới gọi then sau
    .then(function(){
        return new Promise(function(resolve, reject) {
            setTimeout(resolve(['promise']), 5000);
        })
    })
    .then(function(data){
        console.log(data)
    }) // .then của promise được return chứ k phải của ban đầu


    .catch(function(){
            console.log("2")
    })
    .finally(function(){
            console.log("3")
    })
// khi resolve() --> gọi then()
// khi reject() --> gọi catch()

// 1. Promise.resolve 
// 2. Promise.reject
// 3. Promise.all 

// Thư viện: output luôn luôn là 1 promise
var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve([1]);
    }, 2000 )
})
var promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve([2, 3]);
    }, 2000 )
})
// Promise.all([promise1, promise2])
//     .then(function(result){
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2));
//     })
// Promise.all([promise1, promise2])
//     .then(function([result1, result2]){
//         console.log(result1.concat(result2));
//     }) // cách viết ES6


var users = [
    {
        id: 1, 
        name: 'khoa',
    },{ 
        id: 2,
        name: 'nghia',
    },{
        id: 3, 
        name: 'phanh',
    }
]
var cmts = [
    {
        id: 1, 
        user_id: 1, 
        content: 'danh nhau khong',
    },{
        id: 2, 
        user_id: 2,
        content: 'thich thi dam',
    },{
        id: 3, 
        user_id: 3, 
        content: 'thoi cho tao xin 2 thang tre trau nay',
    }
]

// 1. Lấy cmt 
// 2. từ Cmt -> userId
// 3. từ userID -> id 
//    3.1. lấy id của users
//    3.2. so sánh với userId lấy user trùng 
// 4. Nối users với cmts trùng nhau thành 1 object
function getCmts(){ 
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(cmts)
        },1000)
    })
}
function getUsersById(userIds){
    return new Promise(function(resolve){
        var user = users.filter(function(user){
            return userIds.includes(user.id)
        })
        resolve(user)
    })
}
getCmts()
    .then(function(cmts){
        var userIds = cmts.map(function(cmt){
            return cmt.user_id
        })
        return getUsersById(userIds)
            .then(function(users){
                return {
                    users: users, 
                    comments: cmts
                }
            })
    })
    .then(function(data){ 
        var contentBlock = document.getElementById("content-block") 
        var html =""
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){ 
                return user.id == comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        contentBlock.innerHTML = html
    })
