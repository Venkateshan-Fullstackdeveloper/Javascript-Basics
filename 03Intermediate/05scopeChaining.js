var name = "venky";
console.log(name);

function sayName(){
    // var name = "Mr. A";
    console.log("say name", name);
    sayNameTwo();
    function sayNameTwo(){
        // var name = "Mr.P";
        console.log("saynametwo", name);
    }
}
// if the value is not given it an search above
// remove 1by1 comments and see the ouput difference
sayName();

