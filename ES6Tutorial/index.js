//global , local -> block scope
// ถ้าใช้ var จะเป็นค่าแบบ global ถ้ามีการอัพเดทที่ใดที่นึงมันก็จะเป็นค่านั้นทั้งหมด
var price = 20
var fruit = 'mango'

if(price === 20){
    var fruit ="durian" //update 
    console.log(fruit)
}
console.log(fruit)

//let มันก็จะเปลี่ยนไปตามค่าที่มันอยู่นั้นๆ
let price2 = 20
let fruit2 = 'mango'

if(price2 === 20){
    let fruit2 ="durian"
    console.log(fruit2)
}
console.log(fruit2)

//const (constant) ค่าคงที่
const total =100
// total = 200 (error ค่าไม่สามารถปรับเปลี่ยนได้) 
console.log(total)

const person = {fname:"nutnarong",lname:"yookittichai"}
person.fname="puimek"
console.log(person);
document.write(person.fname+" "+person.lname)
