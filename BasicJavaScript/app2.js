

var randomNumber = Math.floor(Math.random() * 5)+1 ; 
///Math.random มันจะ random แค่ 0-1 ถ้าอยากได้เลขถึงเท่าไหร่ก็เอาไปคูณเช่น 5
/// Math.floor เพื่อทำให้เป็นจำนวนเต็ม
var input = prompt ('Choose your Number 1-5');
//prompt เป็นคำสั่งรับค่าจากผู้ใช้

if(parseInt(input) === randomNumber){ ///parseInt เพราะค่าที่รับมามันเป็นString
    document.write('You are WINNER');
}else{
    document.write('Sorry, The random number is ' + randomNumber);
}



console.log(randomNumber);