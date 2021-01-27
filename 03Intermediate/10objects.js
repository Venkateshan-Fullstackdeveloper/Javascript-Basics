var user = {
    firstName : "Venkateshan",
    lastName : "Arumugam Prabhakaran",
    role : "Admin",
    logInCount : 32,
    googleLoginIn : true,
};  // objects **SYNTAX** var name = { key : value, key value};

console.log("firstName : "+user.firstName);//object values are accessed by keys and we an also manipulate the values

console.log("LogInCount : "+ user.logInCount);
user.logInCount = 50;
console.log("LogInCount : "+ user.logInCount);


