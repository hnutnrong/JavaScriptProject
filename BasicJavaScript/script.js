var input = prompt('Input your message');
var count = prompt('Input your count ');

/**
 for(var i = 1; i <= count; i++ ){
    document.write('จำนวนรอบ' + i + ' ข้อความ ' + input + '<br>');

}
*/

///แบบ while 
 var i = 1;

while(i<= parseInt(count)){
    document.write('จำนวนรอบ'+ i + ' ข้อความ ' + input + '<br>');
    i++;
}
