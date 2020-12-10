// undefined
// null         
// 0
// NaN
// these values are false values
var user = "2";

if (user) {
    console.log("condition is true");
}

console.log(2+"2"); // Js automatically converts the datatype , so called coercion

// in order to avoid coercion we have to use === operator

if (2 === user) {
    console.log("true");
}

if (2 == user) {
    console.log("true");
}