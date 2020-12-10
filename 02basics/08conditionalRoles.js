// create an application with following roles:
// admin-get full Access
// subadmin - get access to create/delete courses
// testprep - get access to create/delete tests
// user - get access to consume content

var user = "user";

switch (user) {
    case "admin":
        console.log("get full Access");
        break;
    case "testprep":
        console.log("get access to create/delete tests");
        break;
    case "subadmin":
        console.log("get access to create/delete courses");
        break;
    case "user":
        console.log("get access to consume content");
        break;

    default:
        console.log("Trial user");
        break;
}