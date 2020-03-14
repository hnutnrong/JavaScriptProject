var msg = 'hello';

function showMsg(){
    var msg = 'good bye';     ///ถ้าไม่ใส่ var มันก็จะโชว์เป็นตัว global คือ hello
    document.write(msg);
}

showMsg(); ///จะ show msg ใน function

document.write(msg); //มันก็จะ show hello ที่เป็นตัว global 