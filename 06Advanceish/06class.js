class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo(){//no ned to specify the function keyword
        return {name : this.name,email : this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }
    static login(){// static is used not to allow this method to any class which means we can't inherit this login()
        return "im logged in";
    }
}

// const venky = new User("venky","venky8269@gmail.com"); //general way

module.exports = User;// this module.exports used to export the code from one file to another

const venky = new User("venky","venky8269@gmail.com");
// console.log(venky.getInfo);
venky.enrollCourse("Mern");
// console.log(venky.getCourseList());
// console.log(venky.courseList);//here courselist can be accessed because it is not declared in the private . in order to make a variable or array or anything use # infornt of it then the venky.courseList get the O/P as undefined

class subAdmin extends User{ // to inherits data and methods from parent class use extends keyword
    constructor(name,email){
        super(name,email); 
    }
    getAdminInfo(){
        return "I am subadmin";
    }
    login(){// we can override the function in parent class because we inhrited
        return "only admin can login";
    }
}

const cena = new subAdmin("john","john@wwe.com");
console.log(cena.getAdminInfo());
console.log(cena.login());
console.log(cena.getInfo());