function getUser(name,role){      // <== this line is not the usual way 
    switch (role) {               // var getUser = function (name,role){
        case "admin":
            return `${name} is admin with all access`;
            break;//if we use return in switch case then break is unnecessary 
        case "sub-admin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is a testprep with access to create and delete tests`;
            break;
        case "user":
            return `${name} is a user to consume content`;
            break;
    
        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUser("Tessa","testprep"));

var getRole = getUser("Hardin","user");

console.log(getRole);


