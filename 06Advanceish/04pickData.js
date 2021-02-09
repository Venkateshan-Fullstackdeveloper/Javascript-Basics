//destructuring the data in *ARRAY* and *OBJECT*

// const user =["venky",5,"admin"];
// var name = user[0];
// var courseCount = user[1];
// var role = user[2];
/**instead of destructing the array in different variales like the above 3 line of code we can use short hand of like code below*/
// var [name,courseCount,role] = user;
// console.log(role);

const user ={
    name: "venky",
    courseCount: 5,
    role: "admin"
};

// console.log(user.courseCount);//instead of this obj.key we can use only key by destructing the data of object

var {name,courseCount,role} = user;//here you should not change the variable names as you wish , it should be same as keys in given object

console.log(name);