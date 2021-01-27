console.log(this);// O/P is {} due to node engine
//***RULE*** for all REGULAR FUNCTIONS CALLS, THIS points to windows object 
var user = {
    firstName: "venky",
    age: 20,
    department: "CSE",
    getDepCount: function (){ //this is not a reg func , this is obj via func
        console.log("line no 8",this);
        function sayHello(){
            console.log("line no 10",this); //this is reg func
            // O/P is window or global object depends on engine
        }
        sayHello();
    }
};

user.getDepCount();