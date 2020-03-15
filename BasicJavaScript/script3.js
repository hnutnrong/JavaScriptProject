function alertMe(){
    alert('Alert me');
}

let p2 = document.getElementById("p2");//ค้นหาผ่านตัว Id

document.getElementById("btn2").onclick = function(){  //เมื่อclick ปุ่มแล้วข้อความก็จะเปลี่ยนจากเดิม()Content เป็น Thank you
    //alert("Thank you");
    p2.innerHTML = ("Thank you")  
}