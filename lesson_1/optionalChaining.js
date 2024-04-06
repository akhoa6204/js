// Optional chaining (?.)
const obj = { 
    name: 'alice', 
    cat: { 
        name: 'John', 
            cat2: { 
                name: 'John2', 
                cat3: { 
                    name: 'John3', 
                }
            }
    },
    getname(value){ 
        console.log(value);
    }
}
// giúp xử lí đỡ cồng kềnh khi lấy dữ liệu từ database không chắc nó có tồn tại không 
// giúp không báo lỗi khi in ra  
if (obj.cat?.cat2?.cat3){
    console.log(obj.cat.cat2.cat3.name)
}

obj.getname?.(123)