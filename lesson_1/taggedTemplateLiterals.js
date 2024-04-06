function highlight ([first, ...strings], ...values){
    console.log(first)
    console.log(strings)
    console.log(values)
    return values.reduce(
        (acc, cur) => [...acc, `<span>${cur}</span>`, strings.shift()]
        , [first])
    // tương tự 
    // return values.reduce(function (acc, cur) { 
    //     acc.push(`<span>${cur}</span>`, strings.shift())
    //     return acc
    // }, [first])
    .join('')
}

var name ='khoa'
var age = 18 

var html = highlight`toi ten la ${name}, nam nay toi ${age}, rat vui duoc gap ban  !!!`
console.log(html)