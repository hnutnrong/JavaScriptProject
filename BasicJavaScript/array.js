
let myName = ['nutnarong','jenny','john','bank'];
let myAge = [20,30,40,50];
let mygrade = [];

//myAge[0] = 25; //กำหนดค่า จากเดิม 20 เป็น 25
mygrade.push(3.33,2.23); //เป็นการใส่ค่าเข้าไป
//document.write('My name is '+ myname[0]+ ' I am ' + myAge[0]+' years old');
console.log(myName.length); //นับจำนวนว่ามีกี่จำนวน

console.log(mygrade.length);

for (let i = 0; i< myName.length; i++) {
  console.log(myName[i]);
    }