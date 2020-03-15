//Compute Property Name
//การดำเนินการภายใน Properties
let food1={name:"Cake",price:"200"}
let food2={"name":"Cake","price":250}

console.log(food1)
console.log(food2)

let user={
    ['user'+1]:'nut',
    ['user'+2*10]:'aaa'
}
console.log(user);


///การเอาตัวแปรจากด้านนอกมาประกาสเป็น Properties ด้านใน
let name = 'Cake'
let menu ={
    [name]:'Orange Cake', ///เติม []เข้าไป มันก็จะกลายเป็นคำว่า Cake จากตัวแปรด้านบน
    [name+'Mix']:'orange',
    price:'250'
}

//การเขียนแบบ Destructuring
//การดึงค่าจาก propeties มากำหนดเป็นตัวแปร
let {Cake,CakeMix}=menu
console.log(Cake)
console.log(CakeMix)


