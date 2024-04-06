// xử lý nhiều việc khi 1 event xảy ra 
// lắng nghe / hủy bỏ lắng nghe
var btn = document.getElementById('btn')
// btn.addEventListener('click', function(e){
//     console.log('oke vao day')
// })
// fuction trong addEventListener là callback
btn.addEventListener('click', damNhau)
btn.addEventListener('click', boChay)
function damNhau(e){ 
    console.log('oke vao day')
}
function boChay(e){
    console.log('tha em')
}
setTimeout(function(){
    btn.removeEventListener('click',damNhau)
},3000)

/** xử lí nhiều việc thì nên dùng addEventListener
*  khi bạn muốn loại bỏ event nào sau 1 thời gian thì nên dùng 
*/

