const venky = {
    firstName : "Venky",
    lastName : "Prabhakaran",
    role : "Admin",
    courseCount : 5,
    getInfo : function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses`);
    }
};

const AA = {
    firstName : "John Cena",
    lastName : "AA",
    role : "Admin",
    courseCount : 5,
};

venky.getInfo.call(AA);
var aaInfo =venky.getInfo.bind(AA);
aaInfo();
/* here BIND and CALL function are used to change the reference of this from the previous object to its object which means we can use the method which is defined join the previous object(venky). But bind() return its reference whereas the call() diretly call the function
 */


























