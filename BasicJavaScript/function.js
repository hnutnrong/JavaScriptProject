function showData(){
    document.write('JavaScript <br>');
}
showData();

function addNumber(number1, number2){
    var result=number1 + number2;
    document.write('Result: '+ result + '<br>');
}
addNumber(15,20);

//function แบบ return คือเราต้องการส่งค่าออกมาจาก function
function getMessage(msg){
    return 'Hello' + msg + '<br>';
}
///เขียนได้ 2 แบบ
document.write(getMessage('PHP'));

var msg = getMessage('Java');
document.write(msg);

//function expression
var showName = function(){
    document.write('nutnarong');
}

showName();