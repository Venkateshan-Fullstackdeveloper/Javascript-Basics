/*                                     CONTEXT
               context are two types namely
               execution context and global context
               execution context will be created on each and every line , it excutes and it go off whereas global conext will be created on bunch of code like functions

               execution contexts are threetypes namely
               variable object   scope chain     this
               **two rules have to be followed**
               function declarations are scanned and made available eg:03jsContext.js
               variable declarations are scanned and made undefined
               example will be shown below


*/

console.log(name);  //  O/P will be undefined
var name = "venky";

function sayMe(){
    var name = "Harry";
    console.log(name);
}

sayMe();

console.log(name); // O/P will be the given value