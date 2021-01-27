var testArray = [2,4,6,8,1,3,5,7];

// console.log(testArray.fill("v",3,5));// fill method is used to fill the given input in the specified position in the array ***SYNTAX*** anyArray.fill("input",start,end) input may be any data type ; start and end represents the index positions ; end is always  n-1

 const myNumber = [21,34,56,78,90,43,65,87,91];

const result = myNumber.filter( (num) => (num > 56) ); //filter method is used to filter the values according to the condition **syntax** array.filter((e) => (condition))

// console.log(result);

var users = ["venky","sanju","naveen","gokul","mohan"];

// console.log(users.slice(2,4));//slice is used to slice the value in the given range ***SYNTAX*** array.slice(start,end)
users.splice(1,2,4);//splie is used to delete the elements in the given range and (optional) insert elements **SYNTAX** array.splice(start,count,string or number or any datatype) In here,count is nothing but how many elements should be deleted from the start position
console.log(users);