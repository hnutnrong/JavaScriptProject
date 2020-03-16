//แบบเดิม

// let name ='nutnrong'
// let last = 'yookittichai'

// let user ={
//     name : name,
//     last : last
// }

// console.log(user);

//แบบใหม่ Shorthand Property
// let name = 'nutnrong'
// let last = 'yookittichai'

// let user = {
//     name , 
//     last
// }

// console.log(user);


function user(name,last,age){
    return{
        name,
        last,
        age
    }
}

console.log(user("nut","yookittichai",21))