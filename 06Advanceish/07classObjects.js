// import User from "./06class"  //this is used in frameworks and in modern js

const User = require("./06class");//old method

const venky = new User("venky","venky8269@gmail.com");

console.log(venky.getInfo());
venky.enrollCourse("MERN");
venky.enrollCourse("JAVA");
// console.log(venky.getCourseList());// O/P is in form of array        

let courses = venky.getCourseList();
courses.forEach(c => console.log(c))
