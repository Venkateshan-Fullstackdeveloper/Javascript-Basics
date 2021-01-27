var countrie = ["India","USA","Japan","Russia"];  //old format

var states = new Array("Rajasthan","Delhi","TamilNadu","Kerala");
//indexes are started with zero
// console.log(states[3]);

// console.log(states.length);
states[0] = "Karnataka";

// console.log(states);

var user = ["venky","venky6904@gmail.com",3,34,true];
// console.log(user);
user.pop();//pop is used to delete the last element of the array
// console.log(user);
user.unshift("NEW VALUE");// unshift method is used to insert a element in the first position of the array and then existed elements shifted towards right
// console.log(user);

user.shift();//shift method is used to shift the elements to left so then first element will be deleted
console.log(user);

console.log(user.indexOf(3));//indexOf method is used to identify the index of the given element and if an element is not present then 0/P will be -1
console.log(user.indexOf("javascript"));

console.log(Array.from("hitesh"));//Array method is used to convert any given input into an array. It may be of any kind of data type

