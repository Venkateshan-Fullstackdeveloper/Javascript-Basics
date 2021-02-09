var myMap = new Map();
//spanish words
myMap.set(1,"Uno");
myMap.set(2,"Dos");
myMap.set(3,"Tres");
myMap.set(4,"Cautro");
//map is kind of object like it has keys: values ut it is not an object
console.log(myMap);

// for (let key of myMap.keys()) {
//     console.log(`Key is ${key}`);
// }
// for (let value of myMap.values()) {
//     console.log(`Value is ${value}`);
// }

for( let [key,value] of myMap){
    console.log(`Key is ${key} and Value is ${value}`);//forloop always gives keys as their O/P thats why we use [key,value] in case we want both keys and values
}

myMap.forEach( (key) => console.log(key)); // foreach always gives values but in case of if you need keys and values then you have code like below
myMap.forEach((v,k) => console.log(`value ${k} & key ${v}`));

myMap.delete(3);//delete methos is used to delete the valuesat its respective positions
console.log(myMap);