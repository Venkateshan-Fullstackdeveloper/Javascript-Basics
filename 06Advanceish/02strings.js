var name = "venky";
var fullName = `${name} Prabhu`;/** backticks are used because in case of any usage of ',"" or any symol inside `` we can directly add but in case of "" or '' we have to use \ before the symbols for example below*/
// var title = 'Friend\'s'; 
console.log(fullName);
console.log(fullName.charAt(4));/** chartAt(index) method is used to return the charater at given index */
console.log(fullName.endsWith("Prabhu"));/*endswith() is used to check whether the string or character ends with a certain position (position is optional) and return true or false  */
console.log(fullName.includes("r"));/**includes() is used to check whether the string or character included in the string or not and return true or false*/
console.log(fullName.toUpperCase());/**this function is used to convert all the characters of the string into uppercase */
