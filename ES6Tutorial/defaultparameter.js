//Default Parameter

const addUser=(name,last,city="Ratchaburi")=>{
    // return name + last + "city = " + city
    return `Hellod ${name} ${last} city =  ${city}`;
}
console.log(addUser("nutnarong","yookittichai","Bangkok"));
console.log(addUser("puimek","yookittichai")) ;
//ถ้ากำหนดไม่ครบมันก็จะเป็น undefied แต่ถ้าเรากำหนด city ตั้งแต่แรกมันก็จะเป็นค่านั้น(Ratchaburi)