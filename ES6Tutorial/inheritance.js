
//แบบใหม่

class  Admin{
    constructor(){
        console.log("Call Constructor")
    }
    isPermission(){
        console.log("Read Write Data From Database")
    
    }
}

class User extends Admin{
    constructor(name,age){
        super()  ///ไปเรียกใช้งาน constructor ของ classแม่ (Admin)
        this.name=name
        this.age=age
    }
    SayHi(){
        console.log("Hello = " + this.name + "Age = "+ this.age)
    }
}


let user1 = new User("nutnarong",21)
user1.SayHi();
user1.isPermission();