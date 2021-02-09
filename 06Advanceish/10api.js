fetch('https://api.chucknorris.io/jokes/random') //whenever fetch() get executed it will return a promise
.then((response) => {
    return response.json();//json() method is used to convert the fetched api into JSON format so we can clearly understand(what is inside(value or data)) the api in brower console
})
.then((data) => {//here data is any variable whih holds the return value from first .then()
    var jokes = data.value;// this will fetch the data
    console.log("JOKE :" + jokes);
})// In case, more .then() methods are used then,first .then methods perform some taskand return the value to then second .then() , it will do similarly and return to the third .then() and so on 
.catch()//this method is used to raise an error like try & catch
