var User = function (firstName,courseCount){ //functional way of creating object
    this.firstName = firstName;// this is other way of creating objects
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`Course count is : ${courseCount}`);
    };
};

User.prototype.getFirstName = function () { // way tat useful of adding the properties from outside of object
    console.log(`Your First Name is : ${this.firstName}`);
}

var venky = new User ("venky",10);// this is not regular function when new keyword is being used so the this keyword doesn't point towards the window object . Whenever the new keyword is created , its job to reate new instance for a prototype . The above ode is example of prototype
venky.getCourseCount();
if (venky.hasOwnProperty("firstName")) {//hasOwnProperty used to chek whether property is defined in the object
    venky.getFirstName();
}

// console.log(venky);

var ravi = new User("ravi",5);
// console.log(ravi);
ravi.getCourseCount();
ravi.getFirstName(); 