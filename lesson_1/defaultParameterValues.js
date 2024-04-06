var logger = (log = 'gia tri mac dinh') => console.log(log) 
logger(2123)
// bth 
var logger = function (log){
    if (typeof log === 'undefined'){
        return console.log('gia tri mac dinh') 
    }
    console.log(log)
    
}
logger() 