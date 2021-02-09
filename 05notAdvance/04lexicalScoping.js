function init() {
    var name = "venky";
    function sayName() {
        console.log(name);// o/p will be venky because it is defined within the scope
    }
    sayName();
}

init();
console.log(name);// O/P will be undefined due to it is defined or declared beyond its scope
