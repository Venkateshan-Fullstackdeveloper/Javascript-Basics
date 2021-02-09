const uno = () => {
    return "I am One";
}
const dos = /*async*/ () => {// if we use async() , it will return as Promise {undefined} as O/P whih literally means i promise that i will the send the data but it is not a proper way to write like that. Proper way to code shown below
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("I am two");// resolve() mean it will resolve the ode and return it whereas the reject() will raise an error
        },3000);
    });
}
const tres = () => {
    return "I am Three";
}

const callMe = async () => { // we must use async keyword when we call the Promise(). Why we calling the whole callMe() function as async beause there can any number of function that need some time to do the task. For example, there can await not only in dos() and may also be in tres() 
    const valOne = uno();
    console.log(valOne);
    const valTwo = await dos(); // **WITHOUT THE USAGEOF ASYNC,AWAIT,PROMISE like the code in "08async.js** when we return the value from the function but it has to perform some task for a while , the function dos() doesn't wait . So, the O/P BE LIKE UNDEFINED. we an resolve using async, await, promise.
    console.log(valTwo);
    const valThree = tres();
    console.log(valThree);
}

callMe();