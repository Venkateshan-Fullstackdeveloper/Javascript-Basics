var User = {
    name : "",
    getUserName : function (){
        console.log(`User name is : ${this.name}`);
    }
};

var venky = Object.create(User); // creation of object using create method *syntax* object.create(proto,add extra properties(optional))
venky.name = "Venkateshan";
venky.getUserName();

var sam = Object.create(User,{
    name : {value : "sammy"}, // here, property syntax ==> key : {value : actual value}
    courseCount : {value : 3}
});
sam.getUserName();