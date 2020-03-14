// var userName ='admin';
var userName = prompt('Who are you?'); /// prompt จะเก็บค่าที่ใส่เข้ามา
if(userName === 'admin'){
    document.write('<p>You are Admin</p>');
}else if(userName === 'user'){
    document.write('<p>You are User</p>');
}else{
    document.write('<p>You are </p>');
    document.write(userName);
}