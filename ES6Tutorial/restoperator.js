//Rest Operator


const addUser=(name,last,... city)=>{    ///...คือ Rest Operator สามารถส่งค่ามาได้อีกหลายค่า
    return name +" "+ last + " " + city
}
console.log(addUser("nutnarong","yookittichai","Bangkok"))
console.log(addUser("nutnarong","yookittichai","Bangkok","Khonkaen","Chiang Mai","Krabi"))


const addMessage =(first,... message)=>{
    return message.map(m=>first+message)
}
console.log(addMessage("Hello","JS","React"))


const addNumber=(... number)=>{
    return number.reduce((first,current)=>{ 
        return first + current
    })
}
///reduce การรวมเลขที่เราส่งเข้าไปโดยเอาค่าแรก first และค่าปัจจุบัน(current) ของarray(... number แต่ละตัว)

console.log(addNumber(1,2,3,4,5))