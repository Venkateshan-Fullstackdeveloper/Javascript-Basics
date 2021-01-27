var isEven = (element) => {  // arrow function
    // if (element % 2 === 0) {    **this is one way**
    //     return true;
    // }
    // return false;
    return element % 2 === 0; // other way
}

// console.log(isEven(3));
//**call back function **
// var result = [2,3,6,8].every(isEven);//every method is used to check every element in an array with the function and return the value. In here, syntax is every(callback function name or reference , number, array)

// console.log(result);
//** How to write callback function**
// sysntax is () => {}
// var result = [2,4,6,8].every((e) => {
//     return e%2 ===0;
// });
//if you dont want to use retun keyword , you shouldnt use {} .every((e) => e%2===0) . it shows the same result
var result = [2,3,6,8].every((e) => (e%2 === 0))//we can use parentheses
console.log(result);
