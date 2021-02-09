function init() {
    var name = "venky";
    function sayName() {
        console.log(name);
    }
    return sayName;
}

 var result = init();// here we are referencing the sayName function so its scope its not ended , so the variable result can be used for calling the function. This is nothing but the closure
 result();


 function doAddition(x) {
     return function (y) {
         return x + y;
     }
 }

// we can call the function as same like above code

console.log(doAddition(5)(5));//***CURRING***we can pass two parameters because it is referenced or in other words memory location is pointed