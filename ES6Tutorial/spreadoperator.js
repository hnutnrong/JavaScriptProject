//Spread Operator

//Array
let fruit =['mange','watermelon']
console.log(fruit)
let food = ['tomyum','padthai']
console.log(food)

let allfood=[...fruit,...food]
console.log(allfood)


let product ={name:'durian',price:300}
console.log(product)
let newproduct={...product,category:"fruit"}
console.log(newproduct)

let newprice={...newproduct,price:500} ///เปลี่ยนราคาจาก 300 เป็น 500
console.log(newprice)