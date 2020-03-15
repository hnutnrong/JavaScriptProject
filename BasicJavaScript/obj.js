//การเขียน Obj ตัวข้างในเรียกว่า properties(fullname,age,skills)
let programmer = {
    fullname : 'Nutnarong Yookittichai',
    age : 20,
    skills : ['html','css'],
    showData  : function(){
        return 'My name is ' + this.fullname;
    }
}

console.log(programmer.fullname);  //. ตามต้วย properties
console.log(programmer.skills[0]);



/// การใส่ค่าเข้าไป
programmer.fullname = 'Puimek Narak';
programmer.age = '22';
programmer.skills.push('php') //ถ้าเป็น Array ในการใส่ค่าใช้ .push 
console.log(programmer.fullname);
console.log(programmer.age);
console.log(programmer.skills);

console.log(programmer.showData());
