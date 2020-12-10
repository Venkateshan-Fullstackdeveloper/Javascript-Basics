// user is not allowed to purchase course in LCO 
// because if he/she is not logged in and his/her email verified
// and card info is correct

var isLoggedIn = true;
var emailVerified = true;
var cardInfo = false;
// if (isLoggedIn) {
//     console.log("Logged in success");
//     if (emailVerified) {
//         console.log("email is verified");
//         if (cardInfo) {
//             console.log("you can make a purchase");
//         }
//     }
// }

// **The above is code so long and is beginner friendly**

if (isLoggedIn && emailVerified && cardInfo) {
    console.log("you are allowed to make a purhase");
}else{
    console.log("you are NOT allowed to make a purchase");
          
}