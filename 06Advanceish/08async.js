//look out the **Concurrency model and the event loop** in MDN
const uno = () => {
    console.log("I am One");
}
const dos = () => {
    setTimeout(() => { //this scope will be executed after some time
        console.log("Hey, I'm here");
    },3000);//so this dos() will search for any event which needs to execute beause your front code need some time to relax .Then O/P shown below
    console.log("I am Two");
}
const tres = () => {
    console.log("I am Three");
}
uno();
dos();
tres();
/**
 * I am One
 * I am Two  //here that's why the rest of code has been executed before "Hey , im here"
 * I am Three 
 * Hey, I'm here
 */

