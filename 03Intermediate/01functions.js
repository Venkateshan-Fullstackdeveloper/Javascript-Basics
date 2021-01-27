function sayHello(name){
    console.log("Hello there, Venky");
    // console.log("Hello there,",name); it is a beginner way
    console.log(`Helo there, ${name} . Nice to meet you!`);   // ${variable}
}

// sayHello("venky");
// sayHello("Tessa");


function vanakam(){
    return "Hello in India";
}

var greetings = vanakam();

console.log(greetings);
console.log(vanakam());