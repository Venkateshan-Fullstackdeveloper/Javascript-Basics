//  **...args** spread and rest operator are same 

// var result =Math.max(2,3,4,5,6,7);
// console.log(result);// O\P is 7 

// var obj = {};

// Object.assign(obj,{a:1,b:2,c:3},{w:4,y:5});//syntax for assign(target object,{key:value,...})
// console.log(obj);//o/p is {a:1,b:2,c:3,w:4,y:5} this assign method just combine the objects

function sumone(a,b) {
    return a+b;
}

// console.log(sumone(5,4));
// In case of we want to pass the parameter as an array,we can use spread operator
var myArray = [5,4,1];//it ignores 1
console.log(sumone(...myArray));//here values are array have spreaded to the respective variables in formal parmenters a,b like a=5,b=4 if we give more values it takes only first two values and rest of them were ignores. this is spread operator i.e. operator(...args) used in the calling function is called spread operator

// In case we dont know how much values will be going to pass we can use rest      operator(...args)

function sumTwo(c,d,...values){//it an be args or values or anything. it just name
    console.log("rest operator taken values",values);
    let multiply = c*d;
    let sum = 0;
    for (let arg  of values) {
        sum += arg;
    }
    return [sum,multiply];
}

console.log(sumTwo(2,3,4,5,6));//here separted values of given parameters are been combined as an **array** whih is named as values . This is called rest operator. we can also tell rest operators to take only some certain values by defining in formal parameters as sumTwo(a,b,...values) here first two values whih passed will not taken by rest operator