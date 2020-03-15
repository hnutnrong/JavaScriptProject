//Template Literals

//แบบเดิม
const fname ="nutnarong"
const lname ="yookittichai"
const city = "Bangkok"

const all = " Name = " + fname + " Lname = "+ lname +" City = "+city
const allnew=" Name = " +fname+ 
"\n Last = " + lname + 
"\n City = " + city

console.log(allnew)

//การเขียนแบบใหม่
const allname =`Name = ${fname} Last = ${lname} City = ${city}`

const allname2 =`Name = ${fname} 
Last = ${lname} 
City = ${city}`

console.log(allname)
console.log(allname2)